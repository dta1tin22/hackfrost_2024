<script lang="ts">
	import Header from "$components/Header.svelte";
	import StormDataTable from "$components/StormDataTable.svelte";
	import StormInfoCard from "$components/StormInfoCard.svelte";
	import StormScoreBar from "$components/StormScoreBar.svelte";
	import type { StormInformation } from "$lib";

	const data : StormInformation = {
		gdacs_id: 'TC 1001130',
		name: 'FENGAL-24',
		from_to: '29 Nov - 30 Nov',
		exposed_countries: 'India',
		exposed_population: 'No people',
		maximum_wind_speed: '93 km/h Tropical storm',
		maximum_storm_surge: '0.9 m',
		vulnerability: 'High (India)',
		gdacs_score: 1.5
	}
</script>


<svelte:head>
	<title>{data.name}</title>
	<meta name="description" content="Storm Tracker"/>
</svelte:head>

<Header/>

<section class="py-10 space-y-10 max-w-4xl mx-auto">
	<h1 class="text-slate-200 text-4xl font-bold text-center">{data.name} Information</h1>
	<div class="bg-slate-100 opacity-85 rounded-lg p-6 space-y-10">
		<StormDataTable data={data} />
		<div class="space-y-4">
			<h2 class="text-2xl font-semibold">Storm Severity Score</h2>
			<StormScoreBar score={data.gdacs_score}/>
		</div>
	</div>
</section>