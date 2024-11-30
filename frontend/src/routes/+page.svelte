<script lang="ts">
    import Header from "$components/Header.svelte";
    import Categories from "$components/Categories.svelte";
</script>


<Header/>
<main class = "flex flex-col flex-wrap my-8 justify-start h-dvh content-center"> 
    <div>
        <Categories> Ongoing Storms </Categories> 
        <!-- Storm cards -->
    </div>
    <div>
        <Categories> All Storms </Categories> 
        <!-- Storm cards -->
    </div>
</main>




