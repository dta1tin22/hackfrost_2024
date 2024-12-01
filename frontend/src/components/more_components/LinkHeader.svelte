<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		href: string
		children: Snippet;
	}
	let { href, children }: ButtonProps = $props();
</script>

<a
	href={href}
	class="rounded-md bg-transparent hover:bg-slate-200 text-slate-200 hover:text-black font-bold text-xl text-center px-5 py-1 hover:transition-colors"
>
	{@render children()}
</a>
