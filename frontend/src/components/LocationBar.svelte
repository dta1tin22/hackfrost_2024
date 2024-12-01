<script lang="ts">
    import type { Snippet } from 'svelte';

    interface LocationProps {
        children: Snippet;
    }
    let { children }: LocationProps = $props();
</script>
<div class = "w-auto h-1/5 text-xl text-left border-4 border-zinc-200 mx-2 my-0.5">
    {@render children()}
</div>