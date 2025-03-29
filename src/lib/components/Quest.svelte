<script>
    import Wrapper from "./Wrapper.svelte";
    let { title, description } = $props();

    let isExpanded = $state(false);

    function toggleExpand() {
        isExpanded = !isExpanded;
    }
</script>

<Wrapper onClick={toggleExpand}>
    <div class='flex'>
        <div class='w-16 h-16 bg-[#f7f7f7] rounded-3xl'></div>
        <div class='p-2'>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    </div>
    {#if isExpanded}
        <div class="mt-4 p-4 bg-gray-200 rounded">
            🎉 This component is visible!
        </div>
    {/if}
</Wrapper>