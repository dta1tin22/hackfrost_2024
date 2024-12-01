<script lang="ts">
	import Header from "$components/Header.svelte";
	import StormInfoCard from "$components/StormInfoCard.svelte";
	import StormScoreBar from "$components/StormScoreBar.svelte";
	import type { StormInformation } from "$lib";
	import { AlertTriangle, Calendar, Cloud, Users, Waves, Wind } from "lucide-svelte"

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

{#snippet calendarIcon()}
	<Calendar/>
{/snippet}

{#snippet cloudIcon()}
	<Cloud/>
{/snippet}

{#snippet peopleIcon()}
	<Users/>
{/snippet}

{#snippet windIcon()}
	<Wind/>
{/snippet}

{#snippet wavesIcon()}
	<Waves/>
{/snippet}

{#snippet alertIcon()}
	<AlertTriangle/>
{/snippet}

<Header/>

<section class="py-10 space-y-10 max-w-4xl mx-auto">
	<h1 class="text-slate-200 text-4xl font-bold text-center">{data.name} Information</h1>
	<div class="bg-slate-100 opacity-85 rounded-lg p-6 space-y-10">
		<div class="grid grid-cols-2 gap-6">
			<StormInfoCard icon={calendarIcon} title="Date Range">
				<p class="text-lg">{data.from_to}</p>
			</StormInfoCard>
			<StormInfoCard icon={cloudIcon} title="Exposed Countries">
				<p class="text-lg">{data.exposed_countries}</p>
			</StormInfoCard>
			<StormInfoCard icon={peopleIcon} title="Exposed Population">
				<p class="text-lg">{data.exposed_population}</p>
			</StormInfoCard>
			<StormInfoCard icon={windIcon} title="Maximum Wind Speed">
				<p class="text-lg">{data.maximum_wind_speed}</p>
			</StormInfoCard>
			<StormInfoCard icon={wavesIcon} title="Maximum Storm Surge">
				<p class="text-lg">{data.maximum_storm_surge}</p>
			</StormInfoCard>
			<StormInfoCard icon={alertIcon} title="Vulnerability">
				<p class="text-lg">{data.vulnerability}</p>
			</StormInfoCard>
		</div>
		<div class="space-y-4">
			<h2 class="text-2xl font-semibold">Storm Severity Score</h2>
			<StormScoreBar score={data.gdacs_score}/>
		</div>
	</div>
</section>