<script lang="ts">
	import type { StormInformation } from '$lib';
	import StormInfoCard from './StormInfoCard.svelte';
	import { AlertTriangle, Calendar, Cloud, Users, Waves, Wind } from 'lucide-svelte';

	interface StormDataTableProps {
		data: StormInformation;
	}

	let { data }: StormDataTableProps = $props();
</script>

{#snippet calendarIcon()}
	<Calendar />
{/snippet}

{#snippet cloudIcon()}
	<Cloud />
{/snippet}

{#snippet peopleIcon()}
	<Users />
{/snippet}

{#snippet windIcon()}
	<Wind />
{/snippet}

{#snippet wavesIcon()}
	<Waves />
{/snippet}

{#snippet alertIcon()}
	<AlertTriangle />
{/snippet}

<div class="grid grid-cols-2 gap-6">
	<StormInfoCard icon={calendarIcon} title="Date Range">
		<p class="text-lg">{data.from_to}</p>
	</StormInfoCard>
	<StormInfoCard icon={cloudIcon} title="Exposed Countries">
		<p class="text-lg">{data.exposed_countries.join(', ')}</p>
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
