<script>
    let { count, rp, name, iconSrc } = $props();

</script>

<div class="flex mb-1">
    <p class="ml-5 text-lg font-bold text-[#f7f7f7]" style="text-shadow: 2px 2px #000000;">#{count}</p>
    <div class="ml-7 bg-[#c3b4a6] w-64 h-8 rounded-r-full flex ">
        <p class="font-bold text-[#f7f7f7] mt-1 ml-6 pr-2.5 md-12">{rp} rp</p>
        <div class="ml-auto w-40">
            <p class="text-[#f7f7f7] mt-1 pr-2.5 md-12">{name}</p>
        </div>
    </div>
    <img src="{iconSrc}" class="w-12 -ml-[17.5rem] -translate-y-2" />
</div>
