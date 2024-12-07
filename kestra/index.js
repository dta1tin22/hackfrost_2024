// import puppeteer from "puppeteer";
// import * as cheerio from "cheerio";

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const SOURCE_URL = 'https://www.gdacs.org';
const BACKEND_URL = 'https://stormtracker.fly.dev';

/**
 * @returns {string}
 * @param {string} label
 */
const labelHandler = (label) => {
	label = label.trim();

	if (label === 'From - To') {
		label = 'from_to';
	} else {
		label = label.toLowerCase();
		label = label.replaceAll(' ', '_');
	}

	return label;
};

/**
 * @typedef {Object} StormInformation
 * @property {string} gdacs_id
 * @property {string} name
 * @property {string} from_to
 * @property {string} exposed_countries
 * @property {string} exposed_population
 * @property {string} maximum_wind_speed
 * @property {string} maximum_storm_surge
 * @property {string} vulnerability
 * @property {number} gdacs_score
 */

/**
 * @returns {Promise<StormInformation>}
 * @param {import('cheerio').Cheerio<Element>} $a
 * @param {import('puppeteer').Page} page
 */
const linkHandler = async ($a, page) => {
	const validLabels = [
		'gdacs_id',
		'name',
		'from_to',
		'exposed_countries',
		'exposed_population',
		'maximum_wind_speed',
		'maximum_storm_surge',
		'vulnerability',
		'gdacs_score'
	];

	/**@type {StormInformation} */
	let stormInformation = {};

	await page.goto(`${SOURCE_URL}/${$a.attr('href')}`);

	const content = await page.content();

	const $ = cheerio.load(content);

	// Get summary information
	$('table.summary > tbody')
		.children()
		.each((index, element) => {
			/**@type {string} */
			const label = labelHandler(element.children[0].children[0].data);

			if (!validLabels.includes(label)) return;

			/**@type {string} */
			const dataElement = element.children[1].children[0];

			if (dataElement) {
				const data = dataElement.data;
				stormInformation[label] = data.trim();
			} else {
				stormInformation[label] = '';
			}
		});

	//Get GDACS Score
	const gdacsScoreElement = $(
		'div#alertscorebar > div > svg > g.highcharts-data-labels'
	).children()[0]?.children[0]?.children[0]?.children[0];

	if (gdacsScoreElement && gdacsScoreElement.data) {
		stormInformation.gdacs_score = parseFloat(gdacsScoreElement.data);
		if (stormInformation.gdacs_score === NaN) {
			stormInformation.gdacs_score = 0;
		}
	} else stormInformation.gdacs_score = 0;

	await page.goBack();

	return stormInformation;
};

/**
 * @returns {Promise<StormInformation[]>}
 * @param {string} content
 * @param {import('puppeteer').Page} page
 */
const contentHandler = async (content, page) => {
	/**@type {StormInformation[]} */
	let stormsInformation = [];

	const $ = cheerio.load(content);

	let $ptrElement = $('div#gdacs_eventtype_TC').children();

	while (true) {
		const $a = $ptrElement.children();

		const stormInformation = await linkHandler($a, page);

		console.log(stormInformation.name);

		stormsInformation.push({ ...stormInformation });

		if ($ptrElement.children().length <= 1) break;

		$ptrElement = $a.next();

		// Wait 10 seconds before fetching the next page to avoid being blocked by the website
		await new Promise((resolve) => {
			setTimeout(resolve, 10000);
		});
	}

	return stormsInformation;
};

/**
 * @param {{stormsInformation: StormInformation[]}} data
 */
const sendData = async (data) => {
	const response = await fetch(`${BACKEND_URL}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	if (!response.ok) {
		console.log(`Failed to send storms information. Response status code: ${response.status}`);
	}
};

(async () => {
	const browser = await puppeteer.launch({
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});
	// const browser = await puppeteer.launch()
	const page = await browser.newPage();
	await page.setViewport({ width: 1080, height: 1024 });

	await page.goto(SOURCE_URL);

	const content = await page.content();

	const stormsInformation = await contentHandler(content, page);

	const data = {
		stormsInformation
	};

	console.log(data);

	await sendData(data);

	await browser.close();
})();
