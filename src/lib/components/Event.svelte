<script>
    import { Keyboard_arrow_down, Keyboard_arrow_up } from 'svelte-google-materialdesign-icons';
	import Wrapper from "./Wrapper.svelte";
    import defaultEventImage from '../../resources/event_background.jpg'
	import Gp from './GP.svelte';
    import Xp from './XP.svelte';
    import Rp
     from './RP.svelte';
    let {
        title,
        shortDescription,
        longDescription,
        imageUrl = defaultEventImage,
        date,
        gp,
        xp,
        rp
    } = $props();

    let isExpanded = $state(false);
    let isAccepted = $state({ state: false, acceptText: "Accept!"});

    function toggleExpand() {
        isExpanded = !isExpanded;
    }

    function acceptChallenge() {
        if (isAccepted.state) {
            isAccepted = { state: false, acceptText: "Accept!"}
        } else {
            isAccepted = { state: true, acceptText: "accepted!" };
        }
    }
</script>

<Wrapper onClick={() => {}}>
    <div class="flex flex-col h-32 w-full rounded-t-3xl bg-cover bg-center bg-no-repeat" style="background-image: url('{imageUrl}');">
        <button class='bg-[#705037] rounded-full float-right mr-3 mb-5 w-6 ml-auto mt-3.5' on:click={toggleExpand}>
            {#if !isExpanded}
                <Keyboard_arrow_down color='#f7f7f7'/>
            {:else}
                <Keyboard_arrow_up color='#f7f7f7'/>
            {/if}
        </button>
        <p class='text-[#f7f7f7] mt-auto ml-2 mb-2 font-bold text-xl'>{title}</p>
    </div>
    <div class="flex-col h-auto">
        <div class="border-t-2 border-dashed border-[#705037]-500 w-full my-4"
            style="border-top-style: dashed; border-top-width: 3px; border-top-color: #705037; border-top: 3px dashed #705037; border-image: repeating-linear-gradient(90deg, #705037 0px, #705037 10px, transparent 10px, transparent 13px) 30;">
        </div>
        <div class='px-2 mb-1'>
            <p class='text-[#f7f7f7] mb-3 text-justify'>{isExpanded ? longDescription : shortDescription}</p>
            <p class='text-[#f7f7f7]'>ends: {date}</p>
            <div class="flex items-center ml-1.5 pb-2 pt-[0.45em] text-[#f2f2f2]">
                <Gp>{gp}</Gp>
                <Xp>{xp}</Xp>
                <Rp>{rp}</Rp>
                <button class='text-[#f7f7f7] bg-[#705037] rounded-full h-8 w-24' on:click={acceptChallenge}>
                    {isAccepted.acceptText.toUpperCase()}!
                </button>
            </div>
        </div>
    </div>

</Wrapper>