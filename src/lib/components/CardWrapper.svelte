<script lang="ts">
	let { color, margin, upperChildren, lowerChildren } = $props();

</script>

<div class="{color} {margin} inline-block w-full items-center rounded-3xl">
	<div class="flex w-full flex-row rounded-3xl bg-[#60412c]">
		{@render upperChildren()}
	</div>
	{@render lowerChildren()}
</div>
