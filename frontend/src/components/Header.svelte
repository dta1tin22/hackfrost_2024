<script lang="ts">
    import Button from "./more_components/Button.svelte";
    
</script>


<div class = "bg-zinc-200">
    <div class = "flex w-full h-20 bg-neutral-900 items-center">
        <div class = "flex w-3/8 h-1/2 font-bold text-3xl text-zinc-200 justify-self-start pl-60 items-center">
            <img src = "/cloud.png" alt = "Cloud" width = 50 height = 50>
            Storm Tracker
        </div>
        <div class = "bg-zinc-200 w-1/4 h-3/5 rounded justify-self-center" > 
            <div class = "bg-neutral-950 w-1/9 h-full items-center"> 
                <img src = "/glass.png" alt = "Search" width = 50 height = 50 style = "vertical-align:middle">
            </div>
        </div>
        <div class = "flex w-3/8 h-1/2 justify-center space-x-2.5"> 
            <Button> Home </Button>
            <Button> About </Button>
            <Button> Contact </Button>
        </div>
    </div>

</div>
