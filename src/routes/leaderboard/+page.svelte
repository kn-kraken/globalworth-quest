<script>
    import LeaderBoard from "$lib/components/LeaderBoard.svelte";
    import Overlay from "$lib/components/Overlay.svelte";
    import UpBar from '$lib/components/UpBar.svelte';
    import shield from '../../resources/shield.png'
    import trophy from '../../resources/trophy.png'
    import stars5 from '../../resources/star.png'
    import stars3 from '../../resources/stars3.png'
    import stars2 from '../../resources/stars2.png'

    let leaderboards = [
        {
            type: 'team',
            iconSrc: shield,
            color: "bg-[#897aba]",
            ranks: [
                { rp: 612, iconSrc: stars5, name: "Rafał Pomorski" },
                { rp: 104, iconSrc: stars3, name: "Robert Makłowicz" },
                { rp: 67, iconSrc: stars2, name: "Janusz Piechociński" }
            ]
        },
        {
            type: 'general',
            iconSrc: trophy,
            color: "bg-[#e7ac4e]",
            ranks: [
                { rp: 720, iconSrc: stars5, name: "Maryla Rodowicz" },
                { rp: 612, iconSrc: stars5, name: "Rafał Pomorski" },
                { rp: 104, iconSrc: stars3, name: "Robert Makłowicz" },
                { rp: 67, iconSrc: stars2, name: "Janusz Piechociński" }
            ]
        }
    ]
</script>

<UpBar
    upperText = "time to hit the major leagues"
    mainText = "Leaderboards"
/>


<Overlay>
    {#each leaderboards as leaderboard}
        <LeaderBoard {...leaderboard} />
    {/each}
</Overlay>