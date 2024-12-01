<script lang="ts">
	import Header from '$components/Header.svelte';
	import StormDataTable from '$components/StormDataTable.svelte';
	import StormScoreBar from '$components/StormScoreBar.svelte';
	import Categories from '$components/Categories.svelte';
	import StormDisplay from '$components/StormDisplay.svelte';
	import { type StormInformation } from '$lib';
	import { PUBLIC_SERVER_URL } from '$env/static/public';

	const { data } = $props()
	let isSeaching = $state(false);
	let searchResult: StormInformation[] | null = $state(null)

	const searchStorms = async (value: string) => {
		const response = await fetch(`${PUBLIC_SERVER_URL}/search?value=${value}`)

		const data = await response.json();

		return data.stormsInformation as StormInformation[];
	}
</script>

<svelte:head>
	<title>{data.name}</title>
	<meta name="description" content="Storm Tracker" />
</svelte:head>

<Header
	onSearch={async (searchValue) => {
		if (searchValue.length > 0) isSeaching = true;
		else isSeaching = false;
		searchResult = await searchStorms(searchValue)
	}}
/>

<div>
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
		<section class="py-10 space-y-10 max-w-4xl mx-auto">
			<h1 class="text-slate-200 text-4xl font-bold text-center">{data.name} Information</h1>
			<div class="bg-slate-100 opacity-85 rounded-lg p-6 space-y-10">
				<StormDataTable {data} />
				<div class="space-y-4">
					<h2 class="text-2xl font-semibold">Storm Severity Score</h2>
					<StormScoreBar score={data.gdacs_score} />
				</div>
			</div>
		</section>
	{/if}
</div>
