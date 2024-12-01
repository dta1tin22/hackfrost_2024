<script lang="ts">
	import type { Snippet } from 'svelte';

	interface CategoryProps {
		children: Snippet;
	}
	let { children }: CategoryProps = $props();
</script>

<div class="bg-transparent text-center text-5xl font-bold text-slate-100 w-full h-full">
	{@render children()}
</div>
