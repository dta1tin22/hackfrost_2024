<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="bg-center" style="background-image: url('/background.jpg');">
	<div class="w-full min-h-dvh backdrop-blur-sm">
		{@render children()}
	</div>
</main>