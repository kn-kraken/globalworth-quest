<script>
    let { onClick, height = 'h-20', color = 'bg-[#37251c]' } = $props();
</script>

<div class={`rounded-3xl ${color} w-full items-center inline-block mb-5`} on:click={onClick}>
    <slot></slot>
</div>
