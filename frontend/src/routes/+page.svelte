<script lang="ts">
	import Header from '$components/Header.svelte';
	import Categories from '$components/Categories.svelte';
	import StormDisplay from '$components/StormDisplay.svelte';

	const liveStorms = [
		{
			gdacs_id: 'TC 1001130',
			name: 'FENGAL-24',
			from_to: '29 Nov - 30 Nov',
			exposed_countries: 'India',
			exposed_population: 'No people',
			maximum_wind_speed: '93 km/h Tropical storm',
			maximum_storm_surge: '0.9 m',
			vulnerability: 'High (India)',
			gdacs_score: 1.5
		},
		{
			gdacs_id: 'TC 1001129',
			name: 'ROBYN-24',
			from_to: '27 Nov - 29 Nov',
			exposed_countries: 'Off-shore',
			exposed_population: 'No people',
			maximum_wind_speed: '93 km/h Tropical storm',
			maximum_storm_surge: '',
			vulnerability: '--',
			gdacs_score: 0.5
		}
	]
const history = [
		{
			gdacs_id: 'TC 1001128',
			name: 'BHEKI-25',
			from_to: '14 Nov - 22 Nov',
			exposed_countries: 'Mauritius, Miscellaneous (French) Indian Ocean Islands',
			exposed_population: 'No people',
			maximum_wind_speed: '222 km/h Category 4',
			maximum_storm_surge: '0.2 m',
			vulnerability: 'Medium (Mauritius)',
			gdacs_score: 0.5
		},
		{
			gdacs_id: 'TC 1001124',
			name: 'MAN-YI-24',
			from_to: '09 Nov - 19 Nov',
			exposed_countries: 'Philippines, China, Guam',
			exposed_population: '7.1 million',
			maximum_wind_speed: '259 km/h Category 5',
			maximum_storm_surge: '1.1 m',
			vulnerability: 'Medium (Philippines)',
			gdacs_score: 2.5
		},
		{
			gdacs_id: 'TC 1001127',
			name: 'SARA-24',
			from_to: '13 Nov - 18 Nov',
			exposed_countries: 'Honduras, Guatemala, Nicaragua, Mexico, Belize',
			exposed_population: 'No people',
			maximum_wind_speed: '83 km/h Tropical storm',
			maximum_storm_surge: '0.8 m',
			vulnerability: 'High (Guatemala)',
			gdacs_score: 0.5
		},
		{
			gdacs_id: 'TC 1001126',
			name: 'USAGI-24',
			from_to: '11 Nov - 16 Nov',
			exposed_countries: 'Philippines, Taiwan',
			exposed_population: '1.2 million',
			maximum_wind_speed: '241 km/h Category 4',
			maximum_storm_surge: '0.8 m',
			vulnerability: 'Medium (Philippines)',
			gdacs_score: 2.5
		},
		{
			gdacs_id: 'TC 1001125',
			name: 'TORAJI-24',
			from_to: '09 Nov - 14 Nov',
			exposed_countries: 'Philippines, China',
			exposed_population: '3.5 million',
			maximum_wind_speed: '148 km/h Category 1',
			maximum_storm_surge: '0.6 m',
			vulnerability: 'Medium (Philippines)',
			gdacs_score: 1.5
		},
		{
			gdacs_id: 'TC 1001121',
			name: 'YINXING-24',
			from_to: '03 Nov - 12 Nov',
			exposed_countries: 'Philippines, Viet Nam',
			exposed_population: '1.6 million',
			maximum_wind_speed: '231 km/h Category 4',
			maximum_storm_surge: '1.1 m',
			vulnerability: 'Medium (Philippines)',
			gdacs_score: 2.5
		},
		{
			gdacs_id: 'TC 1001122',
			name: 'RAFAEL-24',
			from_to: '03 Nov - 10 Nov',
			exposed_countries: 'Cuba, Jamaica',
			exposed_population: '590 thousand',
			maximum_wind_speed: '194 km/h Category 3',
			maximum_storm_surge: '1 m',
			vulnerability: 'Low (Cuba)',
			gdacs_score: 1.5
		},
		{
			gdacs_id: 'TC 1001123',
			name: 'FOURTEEN-E-24',
			from_to: '06 Nov - 07 Nov',
			exposed_countries: 'Off-shore',
			exposed_population: 'No people',
			maximum_wind_speed: '56 km/h Tropical depression',
			maximum_storm_surge: '',
			vulnerability: '--',
			gdacs_score: 0.5
		},
		{
			gdacs_id: 'TC 1001120',
			name: 'PATTY-24',
			from_to: '02 Nov - 04 Nov',
			exposed_countries: 'Portugal',
			exposed_population: 'No people',
			maximum_wind_speed: '102 km/h Tropical storm',
			maximum_storm_surge: '0.3 m',
			vulnerability: 'Low (Portugal)',
			gdacs_score: 0.5
		},
		{
			gdacs_id: 'TC 1001119',
			name: 'LANE-24',
			from_to: '01 Nov - 03 Nov',
			exposed_countries: 'Off-shore',
			exposed_population: 'No people',
			maximum_wind_speed: '74 km/h Tropical storm',
			maximum_storm_surge: '',
			vulnerability: '--',
			gdacs_score: 0.5
		},
		{
			gdacs_id: 'TC 1001118',
			name: 'KONG-REY-24',
			from_to: '25 Oct - 01 Nov',
			exposed_countries: 'Philippines, Taiwan, China, Japan',
			exposed_population: '15.8 million',
			maximum_wind_speed: '241 km/h Category 4',
			maximum_storm_surge: '0.1 m',
			vulnerability: 'Medium (China)',
			gdacs_score: 2.5
		},
		{
			gdacs_id: 'TC 1001115',
			name: 'TRAMI-24',
			from_to: '20 Oct - 28 Oct',
			exposed_countries: 'Viet Nam, China, Philippines, Cambodia, Laos, Taiwan',
			exposed_population: 'No people',
			maximum_wind_speed: '111 km/h Tropical storm',
			maximum_storm_surge: '0.8 m',
			vulnerability: 'High (Cambodia)',
			gdacs_score: 1.5
		},
		{
			gdacs_id: 'TC 1001116',
			name: 'KRISTY-24',
			from_to: '21 Oct - 27 Oct',
			exposed_countries: 'Off-shore',
			exposed_population: 'No people',
			maximum_wind_speed: '259 km/h Category 5',
			maximum_storm_surge: '',
			vulnerability: '--',
			gdacs_score: 0.5
		},
		{
			gdacs_id: 'TC 1001117',
			name: 'DANA-24',
			from_to: '23 Oct - 25 Oct',
			exposed_countries: 'India',
			exposed_population: '9.2 million',
			maximum_wind_speed: '120 km/h Category 1',
			maximum_storm_surge: '1.9 m',
			vulnerability: 'High (India)',
			gdacs_score: 2.5
		},
		{
			gdacs_id: 'TC 1001114',
			name: 'OSCAR-24',
			from_to: '19 Oct - 22 Oct',
			exposed_countries: 'Turks and Caicos Islands, Bahamas, Cuba, United States',
			exposed_population: '90 thousand',
			maximum_wind_speed: '139 km/h Category 1',
			maximum_storm_surge: '0.3 m',
			vulnerability: 'Medium (Turks & Caicos Is.)',
			gdacs_score: 1.5
		},
		{
			gdacs_id: 'TC 1001113',
			name: 'NADINE-24',
			from_to: '18 Oct - 20 Oct',
			exposed_countries: 'Guatemala, Mexico, Belize, Honduras, Nicaragua',
			exposed_population: 'No people',
			maximum_wind_speed: '83 km/h Tropical storm',
			maximum_storm_surge: '0.7 m',
			vulnerability: 'High (Guatemala)',
			gdacs_score: 1.5
		},
		{
			gdacs_id: 'TC 1001110',
			name: 'LESLIE-24',
			from_to: '02 Oct - 12 Oct',
			exposed_countries: 'Off-shore',
			exposed_population: 'No people',
			maximum_wind_speed: '167 km/h Category 2',
			maximum_storm_surge: '0.2 m',
			vulnerability: '--',
			gdacs_score: 0.5
		}
	]
</script>

<Header />
<div class="flex flex-col flex-wrap my-8 justify-start content-center">
	<section>
		<Categories>Live</Categories>
		{#if liveStorms.length > 0}
			<StormDisplay stormsInformation={liveStorms}/>
		{:else}
		<p class="text-lg text-center text-white bg-black bg-opacity-50 p-2 rounded">No storms reported today.</p>
		{/if}
	</section>
	<section>
		<Categories>History</Categories>
		<!-- Storm cards -->
	</section>
</div>