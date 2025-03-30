<script>
    import CardWrapper from "./CardWrapper.svelte";
    import Stats from "./Stats.svelte";
    import Rank from "./Rank.svelte";

    let {
        iconSrc,
        ranks,
        color,
        type
    } = $props();

    let rank1 = ranks[0];
</script>

<CardWrapper color="bg-[#8b7665]" margin="mt-5 z-10">
    {#snippet upperChildren()}
    {#if type == 'team'}
    <div class="flex">
        <Stats iconSrc={iconSrc} {color} width="w-28" translate="-translate-x-32">
            <p class="font-bold text-[#f7f7f7] ml-auto pr-2.5 md-12">920 rp</p>
        </Stats>
        <p class="font-bold text-[#f7f7f7] mt-2">YOUR TEAM</p>
    </div>
    {:else}
        <Stats iconSrc={iconSrc} {color} width="w-72" translate="-translate-x-[18.5rem]">
            <div class="ml-7 w-64 h-12 rounded-r-full flex pr-2.5 pd-4">
                <p class="font-bold text-[#f7f7f7] ml-6 pr-2.5 md-12">{rank1.rp} rp</p>
                <p class="text-[#f7f7f7] pr-2.5 md-12">{rank1.name}</p>
            </div>
        </Stats>
    {/if}
    {/snippet}
    {#snippet lowerChildren()}
        <div class="mt-4">
            {#each ranks as rank, index}
                <Rank {...rank} count={index+1} />
            {/each}
        </div>
    {/snippet}
</CardWrapper>
<div class="bg-[#60412c] text-[#f7f7f7] rounded-b-3xl ml-auto h-13 z-0 -mt-8 w-44">
    <p class="mt-7 text-center">full leaderboard</p>
</div>

