<script>
    import Event from "$lib/components/Event.svelte";
    import Overlay from "$lib/components/Overlay.svelte";
    import UpBar from '$lib/components/UpBar.svelte';

    let events = $state([
        {
            title: "Happy Hour",
            shortDescription: "Unwind with drinks and snacks after work!",
            longDescription: "Join us for an evening of relaxation and networking with colleagues. Enjoy a selection of cocktails, beer, wine, and appetizers while catching up with your team in a laid-back setting.",
            date: "05.04.2025",
            gp: 10,
            xp: 55,
            rp: 20,
        },
        {
            title: "Ping Pong Tournament",
            shortDescription: "Show off your ping pong skills in a friendly competition!",
            longDescription: "Compete in our office-wide ping pong tournament! Whether you're a beginner or a pro, everyone is welcome to participate. Prizes for the winners and bragging rights up for grabs!",
            date: "12.04.2025",
            gp: 12,
            xp: 65,
            rp: 25,
        },
        {
            title: "Trivia Night",
            shortDescription: "Test your knowledge and win prizes!",
            longDescription: "Gather your team and challenge yourselves in an exciting trivia night covering various topics. Enjoy food, drinks, and a night full of fun as you compete for the top spot!",
            date: "18.04.2025",
            gp: 8,
            xp: 40,
            rp: 15,
        },
        {
            title: "Office Olympics",
            shortDescription: "Compete in fun office-themed games!",
            longDescription: "Join us for a day of friendly competition with desk chair races, paper toss challenges, and more! Teams will battle it out for the ultimate Office Olympics championship.",
            date: "25.04.2025",
            gp: 20,
            xp: 35,
            rp: 10,
        },
        {
            title: "Themed Dress-Up Day",
            shortDescription: "Dress up according to the theme and have fun!",
            longDescription: "This month's theme is 'Retro 80s'! Come to work in your best 80s-inspired outfit and participate in a mini fashion show for a chance to win cool prizes!",
            date: "30.04.2025",
            gp: 15,
            xp: 40,
            rp: 55,
        }
    ])
</script>

<UpBar
    upperText = "looking for some new activities?"
    mainText = "Ongoing events"
/>

<Overlay>
    {#each events as event}
        <Event {...event}/>
    {/each}
</Overlay>