<script lang="ts">
	import order from '../../resources/order.png';

	let { children } = $props();
</script>

<div class="mr-3 flex items-center gap-3">
	<div class="-mt-0.5">
		<img src={order} alt="order" class="transparent-image h-auto w-6" />
	</div>
	<p>{@render children()} rp</p>
</div>
