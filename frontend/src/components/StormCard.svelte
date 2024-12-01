<script lang="ts">
	import type { StormInformation } from '$lib';
	import { AlertTriangle, Users, Wind } from 'lucide-svelte';

	interface StormCardProps {
		stormInformation: StormInformation;
	}

	let { stormInformation }: StormCardProps = $props();
</script>

<a href={`/${stormInformation._id}`}>
	<div class="bg-slate-100 min-h-40 rounded-lg p-4 hover:opacity-100 opacity-85">
		<h2 class="text-2xl font-bold mb-4">{stormInformation.name}</h2>
		<ul class="space-y-1">
			<li class="flex items-center space-x-2">
				<Wind />
				<span class="text-lg font-semibold">Maximum Wind Speed: </span>
				<span class="truncate max-w-20">{stormInformation.maximum_wind_speed}</span>
			</li>
			<li class="flex items-center space-x-2">
				<Users />
				<span class="text-lg font-semibold">Exposed Population: </span>
				<span class="truncate">{stormInformation.exposed_population}</span>
			</li>
			<li class="flex items-center space-x-2">
				<AlertTriangle />
				<span class="text-lg font-semibold">Vulnerability: </span>
				<span class="truncate">{stormInformation.vulnerability}</span>
			</li>
		</ul>
	</div>
</a>
