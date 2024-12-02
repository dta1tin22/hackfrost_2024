<script lang="ts">
	import { Tornado } from 'lucide-svelte';
	import LinkHeader from './more_components/LinkHeader.svelte';

	interface LinkHeaderProps {
		onSearch?: (searchValue: string) => void;
	}

	let { onSearch }: LinkHeaderProps = $props();

	let searchValue = $state('');
	let timer: NodeJS.Timeout | null = null;
</script>

<header class="bg-neutral-900">
	<div class="flex justify-between w-full p-4 max-md:p-2 items-center">
		<div class="flex w-1/3 text-slate-200 justify-self-start pl-60 items-center space-x-2">
			<a href="/"><Tornado class="w-9 h-9" /></a>
			<a href="/"><span class="font-bold text-3xl">Storm Tracker</span></a>
		</div>
		<div class="h-10 w-1/3 flex items-center justify-center">
			<input
				class="bg-slate-100 outline-0 w-2/3 h-full rounded-md p-3"
				type="text"
				placeholder="Search storm..."
				bind:value={searchValue}
				oninput={() => {
					if (onSearch) {
						if (timer) clearTimeout(timer);
						timer = setTimeout(() => {
							onSearch(searchValue);
						}, 100);
					}
				}}
			/>
		</div>
		<nav class="flex w-1/3 justify-center space-x-6">
			<LinkHeader href="/">Home</LinkHeader>
			<LinkHeader href="https://github.com/dta1tin22">About</LinkHeader>
			<LinkHeader href="https://www.facebook.com/geor.steven/">Contact</LinkHeader>
		</nav>
	</div>
</header>
