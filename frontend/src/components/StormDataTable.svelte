<script lang="ts">
	import type { StormInformation } from '$lib';
	import StormInfoCard from './StormInfoCard.svelte';
	import { AlertTriangle, Calendar, Cloud, Users, Waves, Wind } from 'lucide-svelte';

	interface StormDataTableProps {
		data: StormInformation;
	}

	let { data }: StormDataTableProps = $props();
</script>

<div class="grid grid-cols-2 gap-6">
	<StormInfoCard Icon={Calendar} title="Date Range">
		<p class="text-lg">{data.from_to}</p>
	</StormInfoCard>
	<StormInfoCard Icon={Cloud} title="Exposed Countries">
		<p class="text-lg">{data.exposed_countries.join(', ')}</p>
	</StormInfoCard>
	<StormInfoCard Icon={Users} title="Exposed Population">
		<p class="text-lg">{data.exposed_population}</p>
	</StormInfoCard>
	<StormInfoCard Icon={Wind} title="Maximum Wind Speed">
		<p class="text-lg">{data.maximum_wind_speed}</p>
	</StormInfoCard>
	<StormInfoCard Icon={Waves} title="Maximum Storm Surge">
		<p class="text-lg">{data.maximum_storm_surge}</p>
	</StormInfoCard>
	<StormInfoCard Icon={AlertTriangle} title="Vulnerability">
		<p class="text-lg">{data.vulnerability}</p>
	</StormInfoCard>
</div>
