<script>
    import Quest from "$lib/components/Quest.svelte";
    import Overlay from "$lib/components/Overlay.svelte";

    let quests = $state([{ title: "First Quests", description: "This is description" }])
</script>

<h1>All Quests</h1>

<!-- <ul>
    {#each data.quests as quest}
        <li>{quest.title}</li>
    {/each}
</ul> -->

<Overlay>
    {#each quests as quest}
        <Quest {...quest}/>
    {/each}
</Overlay>