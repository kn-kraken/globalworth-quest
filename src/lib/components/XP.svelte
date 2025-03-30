<script lang="ts">
	import plus from '../../resources/plus.png';

	let { children } = $props();
</script>

<div class="mr-3 flex items-center gap-3">
	<div class="-mt-0.5">
		<img src={plus} alt="plus" class="transparent-image h-auto w-6" />
	</div>
	<p>{@render children()} xp</p>
</div>
