<script lang="ts">
	import type { Snippet } from "svelte";

	interface StormInfoCardProps{
		title: string
		children: Snippet
	}

	const { title, children } : StormInfoCardProps = $props()
</script>

<div class="rounded-lg p-4 shadow-md bg-amber-200 space-y-4">
	<h2 class="text-2xl font-semibold">{title}</h2>
	<div>
		{@render children()}
	</div>
</div>