<script>
    export let color = "bg-[#8B7568]"; // Default brown
    export let width = "w-4/5"; // Default width (80%)
    export let height = "h-16"; // Default height (64px)
</script>

<div class={`rounded-lg ${color} ${width} ${height}`}>
    <slot></slot>
</div>
