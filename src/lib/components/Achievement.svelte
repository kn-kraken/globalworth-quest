<script>
    import AchievementButton from './AchievementButton.svelte'
    import money from '../../resources/money.png'
    let {
        title,
        description,
        rp,
        xp,
        status
    } = $props();

    function getColor(s) {
        if (s == 1) {
            return 'bg-[#727271]';
        }
        if (s == null) {
            return 'bg-[#5c6840]'
        }
        return 'bg-[#8b7665]';
    }

    function handleOnClick() {
        if (status == null) {
            status = 0;
        }
    }

    let color = $derived(getColor(status));
</script>

<div class={`${color} rounded-3xl w-full items-center inline-block mb-5`}>
    <div class="bg-[#60412c] rounded-3xl w-full flex-row flex">
        <div class='w-16 h-16 bg-[#f7f7f7] rounded-3xl m-2'></div>
        <div class="mt-3 text-[#f2f2f2]">
            <p class="font-bold text-xl">{title}</p>
            <p>{description}</p>
        </div>
    </div>
    <div class="flex text-[#f2f2f2] justify-between items-center mx-3">
        <div class="flex mr-3 my-3 gap-3 items-center">
            <img src={money} alt="money" class="transparent-image w-8 h-auto" />
            {#if rp}<p>{rp} rp</p>{/if}
        </div>
        {#if xp}<p>{xp} xp</p>{/if}
        <AchievementButton {status} onClick={handleOnClick}/>
    </div>

</div>