<script>
	import Account from '$lib/components/Account.svelte';
	import Map from '$lib/components/Map.svelte';
	import { Canvas } from '@threlte/core';

	let touchPosition = { x: 0, y: 0 };
	let position = $state({ x: 0, y: 0 });
</script>

<Account />
<div
	class="relative w-full grow touch-none"
	onpointerdown={(e) => (touchPosition = { x: e.offsetX, y: e.offsetY })}
	onpointermove={(e) => {
		e.preventDefault();
		position.x += touchPosition.x - e.offsetX;
		position.y += touchPosition.y - e.offsetY;
		touchPosition = { x: e.offsetX, y: e.offsetY };
	}}
>
	<Canvas>
		<Map {position} />
	</Canvas>
</div>

