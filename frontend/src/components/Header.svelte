<script lang="ts">
	import { Cloud } from 'lucide-svelte';
	import LinkHeader from './more_components/LinkHeader.svelte';

	interface LinkHeaderProps {
		onSearch?: () => void
	}

	let { onSearch } : LinkHeaderProps = $props()
</script>

<header class="bg-neutral-900">
	<div class="flex justify-between w-full p-4 max-md:p-2 items-center">
		<div
			class="flex w-1/3 text-slate-200 justify-self-start pl-60 items-center space-x-2"
		>
			<Cloud class="w-9 h-9"/>
			<span class="font-bold text-3xl">Storm Tracker</span>
		</div>
		<div class="h-10 w-1/3 flex items-center justify-center">
			<input 
				class="bg-slate-100 outline-0 w-2/3 h-full rounded-md p-3" 
				type="text" 
				placeholder="Search storm..."
				onchange={() => {
					if(onSearch){
						onSearch()
					}
				}}
			>
		</div>
		<nav class="flex w-1/3 justify-center space-x-6">
			<LinkHeader href='/'>Home</LinkHeader>
			<LinkHeader href='/fskld'>About</LinkHeader>
			<LinkHeader href='/'>Contact</LinkHeader>
		</nav>
	</div>
</header>
