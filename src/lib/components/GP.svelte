<script lang="ts">
	import money from '../../resources/money.png';

	let { children } = $props();
</script>

<div class="mr-3 flex items-center gap-1.5">
	<img src={money} alt="money" class="transparent-image h-auto w-[22px]" />
	<p class="text-sm">{@render children()} gp</p>
</div>
