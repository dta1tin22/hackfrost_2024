<script lang="ts">
	import Button from './more_components/Button.svelte';
</script>

<div class="bg-zinc-200">
	<div class="flex w-full h-20 bg-neutral-900 items-center">
		<div
			class="flex w-3/8 h-1/2 font-bold text-3xl text-zinc-200 justify-self-start pl-60 items-center"
		>
			<img src="/cloud.png" alt="Cloud" width="50" height="50" />
			Storm Tracker
		</div>
		<div class="flex bg-zinc-200 w-1/4 h-3/5 rounded justify-self-center">
			<div class="bg-red-600 rounded w-1/9 h-full items-center">
				<img src="/glass.png" alt="Search" width="50" height="50" style="vertical-align:middle" />
			</div>
			<div class="bg-transparent rounded w-8/9 h-full items-center">
				<input
					type="text"
					class="text-zinc-900 placeholder:text-zinc-400 w-full h-full pl-4 outline-none"
					placeholder="Find something?"
				/>
			</div>
		</div>
		<div class="flex w-3/8 h-1/2 justify-center space-x-2.5">
			<Button>Home</Button>
			<Button>About</Button>
			<Button>Contact</Button>
		</div>
	</div>
</div>
