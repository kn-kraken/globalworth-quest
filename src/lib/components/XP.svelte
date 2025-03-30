<script lang="ts">
	import money from '../../resources/money.png';

	let { children } = $props();
</script>

<div class="mr-3 flex items-center gap-3">
	<div class="-mt-0.5">
		<img src={money} alt="money" class="transparent-image h-auto w-8" />
	</div>
	<p>{@render children()} xp</p>
</div>
