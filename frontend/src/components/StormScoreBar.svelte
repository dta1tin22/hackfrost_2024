<script lang="ts">
	interface StormScoreBarProps {
		score: number;
	}

	const { score } : StormScoreBarProps = $props()

	const percentage = (score / 2) * 100

	const gradientColor = `linear-gradient(90deg, 
    rgb(0, 200, 0) 0%, 
    rgb(255, 200, 0) 50%, 
    rgb(200, 0, 0) 100%)`
</script>

<div class="relative h-8 bg-gray-400 rounded-full shadow-inner">
	<div 
		class="absolute top-0 left-0 h-full rounded-full"
		style={`width: ${percentage}%; background: ${gradientColor}`}
	></div>
	<div class="absolute top-0 left-0 w-full h-full flex justify-center items-center">
		<span class="text-lg font-bold">
			{score} / 2
		</span>
	</div>
</div>