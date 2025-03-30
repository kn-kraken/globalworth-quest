<script>
    let { iconSrc, color, children, width, translate } = $props();
</script>


<div class="flex my-2">
    <div class="{color} {width} ml-8  h-6 rounded-r-full flex">
        {@render children()}
    </div>
    <img src="{iconSrc}" class="w-14 {translate}" />
</div>