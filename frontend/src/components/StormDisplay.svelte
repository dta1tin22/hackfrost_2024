<script lang="ts">
	import type { StormInformation } from '$lib';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import StormCard from './StormCard.svelte';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaCarouselType } from 'embla-carousel';

	interface StormDisplayProps {
		stormsInformation: StormInformation[];
		isClickOnCard?: boolean;
	}

	let { stormsInformation, isClickOnCard = $bindable<boolean>(false) }: StormDisplayProps =
		$props();

	let emblaApi: EmblaCarouselType | null = $state(null);
	let canScrollPrevious = $state(false);
	let canScrollNext = $state(false);

	const onInit = (event: CustomEvent<EmblaCarouselType>) => {
		emblaApi = event.detail;
	};

	const scrollPrevious = () => {
		if (emblaApi) {
			emblaApi.scrollPrev();
		}
	};

	const scrollNext = () => {
		if (emblaApi) {
			emblaApi.scrollNext();
		}
	};

	const onSelect = () => {
		if (!emblaApi) return;

		canScrollPrevious = emblaApi.canScrollPrev();
		canScrollNext = emblaApi.canScrollNext();
	};

	$effect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on('select', onSelect);
		emblaApi.on('reInit', onSelect);
	});
</script>

<div class="relative w-3/4 mx-auto">
	<div class="overflow-hidden" use:emblaCarouselSvelte onemblaInit={onInit}>
		<div class="flex">
			{#each stormsInformation as stormInformation}
				<div class="flex-[0_0_33.33%] min-w-0 pr-4">
					<StormCard bind:isClick={isClickOnCard} {stormInformation} />
				</div>
			{/each}
		</div>
	</div>
	<button
		class="absolute top-1/2 -left-10 bg-slate-100 p-1 rounded-full opacity-70 disabled:cursor-not-allowed disabled:opacity-70 hover:opacity-100"
		onclick={scrollPrevious}
		disabled={!canScrollPrevious}
	>
		<ChevronLeft />
	</button>
	<button
		class="absolute top-1/2 -right-6 bg-slate-100 p-1 rounded-full opacity-70 disabled:cursor-not-allowed disabled:opacity-70 hover:opacity-100"
		onclick={scrollNext}
		disabled={!canScrollNext}
	>
		<ChevronRight />
	</button>
</div>
