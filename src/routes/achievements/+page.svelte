<script>
    import Achievement from "$lib/components/Achievement.svelte";
    import Overlay from "$lib/components/Overlay.svelte";
    import UpBar from '$lib/components/UpBar.svelte';

    let achievement = $state([
        { title: "Welcome Aboard!", description: "complete your basic training", rp: 55, xp: 55, status: 1 },
        { title: "Now we're talking", description: "find the arcade room", rp: null, xp: null, status: null },
        { title: "Party maker!", description: "host 5 events", rp: 55, xp: 55, status: 0.6 },
    ])
</script>

<UpBar
  upperText = "Track your progress"
  mainText = "Achievements"
/>

<Overlay>
    {#each achievement as achievement}
        <Achievement {...achievement}/>
    {/each}
</Overlay>