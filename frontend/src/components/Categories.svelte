<script lang="ts">
    import type { Snippet } from "svelte";

    interface CategoryProps{
        children: Snippet
    }
let { children } : CategoryProps = $props()
</script>

<div class = "bg-transparent text-center text-5xl font-bold text-zinc-900 w-full h-full py-2">
    {@render children()}
</div>