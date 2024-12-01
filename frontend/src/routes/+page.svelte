<script lang="ts">
	import Header from '$components/Header.svelte';
	import Categories from '$components/Categories.svelte';
	import StormDisplay from '$components/StormDisplay.svelte';
	import { searchStorms, type StormInformation } from '$lib';

	const { data } = $props();

	const liveStorms = data.liveStorms
	const history = data.historyStorms

	let isSeaching = $state(false);
	let searchResult: StormInformation[] | null = $state(null)
</script>

<svelte:head>
	<title>Storm Tracker</title>
	<meta name="description" content="Storm Tracker" />
</svelte:head>

<Header
	onSearch={async (searchValue) => {
		if (searchValue.length > 0) isSeaching = true;
		else isSeaching = false;
		searchResult = await searchStorms(searchValue);
	}}
/>

<div class="my-8 space-y-20">
	{#if isSeaching && searchResult}
			{#if searchResult.length > 0}
			<section class="py-10 space-y-8">
				<Categories>Search Results</Categories>
				<StormDisplay stormsInformation={searchResult} />
			</section>
		{:else}
			<section class="py-10">
				<Categories>No results</Categories>
			</section>
		{/if}
	{:else}
		<section class="space-y-8 mb-28">
			<Categories>Live</Categories>
			{#if liveStorms.length > 0}
				<StormDisplay stormsInformation={liveStorms} />
			{:else}
				<p class="text-2xl font-bold text-center text-slate-100 p-2 rounded">
					No storms occurring currently.
				</p>
			{/if}
		</section>
		<div class="bg-slate-100 w-1/2 h-[2px] mx-auto rounded-full"></div>
		<section class="space-y-8">
			<Categories>History</Categories>
			{#if history.length > 0}
				<StormDisplay stormsInformation={history} />
			{:else}
				<p class="text-lg text-center text-white bg-black bg-opacity-50 p-2 rounded">
					No storms reported recent.
				</p>
			{/if}
		</section>
	{/if}
</div>
