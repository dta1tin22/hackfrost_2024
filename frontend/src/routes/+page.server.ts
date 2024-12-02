import type { PageServerLoad } from './$types';
import type { StormInformation } from '$lib';
import { PUBLIC_SERVER_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch(`${PUBLIC_SERVER_URL}/`);

	const data = await response.json();

	// console.log(data)

	let liveStorms: StormInformation[] = [];
	let historyStorms: StormInformation[] = [];

	(data.stormsInformation as Array<any>).forEach((stormInformation: any) => {
		if (stormInformation.ended) {
			historyStorms.push(stormInformation);
		} else liveStorms.push(stormInformation);
	});

	return { liveStorms, historyStorms };
};
