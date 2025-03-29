<script>
    let color = "bg-[#917E76]"; // Default brown
    let { onClick } = $props();
</script>

<!-- 917E76 -->
 <!-- #D2BFAF -- brown -->

<div class={`rounded-3xl ${color} w-full h-20 flex-col items-center p-2`} on:click={onClick}>
    <slot></slot>
</div>
