<script lang="ts">
	import money from '../../resources/money.png';

	let { children } = $props();
</script>

<div class="mr-3 flex items-center gap-3">
	<img src={money} alt="money" class="transparent-image h-auto w-8" />
	<p>{@render children()} rp</p>
</div>
