<script lang="ts">
	import type { Snippet } from "svelte";

	interface StormInfoCardProps{
		icon: Snippet
		title: string
		children: Snippet
	}

	const { icon, title, children } : StormInfoCardProps = $props()
</script>

<div class="rounded-lg p-4 shadow-md bg-slate-300 space-y-4">
	<div class="flex items-center space-x-2">
		{@render icon()}
		<h2 class="text-2xl font-semibold">{title}</h2>
	</div>
	<div>
		{@render children()}
	</div>
</div>