<script lang="ts">
	import Header from "$components/Header.svelte";
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

<main class="min-h-dvh">
	<Header/>
	<section class="py-10 space-y-10 w-4xl mx-auto">
		<h1 class="text-4xl font-bold text-center">{data.name} Information</h1>
		<div class="bg-amber-100 shadow-xl p-6 rounded-lg grid grid-cols-2 gap-6">
			<StormInfoCard title="Date">
				<p class="text-lg">{data.from_to}</p>
			</StormInfoCard>
			<StormInfoCard title="Exposed Countries">
				<p class="text-lg">{data.exposed_countries}</p>
			</StormInfoCard>
			<StormInfoCard title="Exposed Population">
				<p class="text-lg">{data.exposed_population}</p>
			</StormInfoCard>
			<StormInfoCard title="Maximum Wind Speed">
				<p class="text-lg">{data.maximum_wind_speed}</p>
			</StormInfoCard>
			<StormInfoCard title="Maximum Storm Surge">
				<p class="text-lg">{data.maximum_storm_surge}</p>
			</StormInfoCard>
			<StormInfoCard title="Vulnerability">
				<p class="text-lg">{data.vulnerability}</p>
			</StormInfoCard>
		</div>
		<div class="space-y-4">
			<h2 class="text-2xl font-semibold">Storm Severity Score</h2>
			<StormScoreBar score={data.gdacs_score}/>
		</div>
	</section>
</main>