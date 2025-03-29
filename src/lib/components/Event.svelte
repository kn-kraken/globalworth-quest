<script>
    import { Keyboard_arrow_down, Keyboard_arrow_up } from 'svelte-google-materialdesign-icons';
	import Wrapper from "./Wrapper.svelte";
    import defaultEventImage from '../../resources/event_background.jpg'

    let {
        title,
        shortDescription,
        longDescription,
        imageUrl = defaultEventImage,
        date
    } = $props();

    let isExpanded = $state(false);
    let isAccepted = $state({ state: false, acceptText: "Accept quest!"});

    function toggleExpand() {
        isExpanded = !isExpanded;
    }

    function acceptChallenge() {
        if (isAccepted.state) {
            isAccepted = { state: false, acceptText: "Accept quest!"}
        } else {
            isAccepted = { state: true, acceptText: "Quest accepted!" };
        }
    }
</script>

<Wrapper onClick={() => {}}>
    <div class="flex flex-col h-32 w-full rounded-t-3xl bg-cover bg-center bg-no-repeat" style="background-image: url('{imageUrl}');">
        <p class='text-[#f7f7f7] mt-auto ml-2 mb-2 font-bold text-xl'>{title}</p>
    </div>
    <div class="flex-col h-auto">
        <div class="border-t-2 border-dashed border-[#705037]-500 w-full my-4"
            style="border-top-style: dashed; border-top-width: 3px; border-top-color: #705037; border-top: 3px dashed #705037; border-image: repeating-linear-gradient(90deg, #705037 0px, #705037 10px, transparent 10px, transparent 13px) 30;">
        </div>
        <div class='px-2'>
            <p class='text-[#f7f7f7] mb-3 text-justify'>{isExpanded ? longDescription : shortDescription}</p>
            <p class='text-[#f7f7f7]'>ends: {date}</p>
            <div class='mt-5 items-center flex width-full justify-between flex-row-reverse'>
                <button class='bg-[#705037] rounded-full float-right mr-3 mb-5' on:click={toggleExpand}>
                    {#if !isExpanded}
                        <Keyboard_arrow_down color='#f7f7f7'/>
                    {:else}
                        <Keyboard_arrow_up color='#f7f7f7'/>
                    {/if}
                </button>
                {#if isExpanded || isAccepted.state }
                    <button class='text-[#f7f7f7] bg-[#705037] rounded-3xl py-1 px-5 mr-5 mb-5 ml-3' on:click={acceptChallenge}>
                        {isAccepted.acceptText.toUpperCase()}!
                    </button>
                {/if}
            </div>
        </div>
    </div>

</Wrapper>