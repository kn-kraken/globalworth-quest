<script>
	let { data } = $props();
</script>

<h1>All Quests</h1>

<ul>
    {#each data.quests as quest}
        <li>{quest.title}</li>
    {/each}
</ul>