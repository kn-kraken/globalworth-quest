<script lang="ts">
	import { Color, PerspectiveCamera } from 'three';
	import { Canvas, T, useThrelte } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { tick } from 'svelte';
	import { Tween, tweened } from 'svelte/motion';

	let { position } = $props();

	interactivity();
	//
	let rects = [
		{ x: 0, y: 0.8, w: 1, h: 1 },
		{ x: 1.5, y: 0, w: 1, h: 1 },
		{ x: 2, y: 2, w: 2, h: 1 },
		{ x: 0, y: 2.5, w: 1, h: 2 }
	];

	let selectedFloor: number | null = $state(null);

	let { invalidate } = useThrelte();

	let props = $derived.by(() => {
		if (selectedFloor === null) {
			return [10, 2, 0, -Math.PI / 4, 1];
		} else {
			return [0, 10 + selectedFloor * 1.5, 0, 0, 0];
		}
	});

	let tweenedPosition = new Tween(props);
	$effect(() => {
		tweenedPosition.set(props, {
			duration: 450,
			easing: (t) => t
		});
	});

	$effect(() => {
		let [x, y, z] = tweenedPosition.current;

		cameraRef.position.set(x, y, z);
		cameraRef.lookAt(0, 0, 0);
		// cameraRef.rotation.set(rx, ry, rz);
		cameraRef.updateProjectionMatrix();
		cameraRef.updateMatrixWorld();
		cameraRef.updateMatrix();
		if (x === 0) {
			cameraRef.rotateZ(Math.PI / 2);
		}

		invalidate();

		// cameraRef.updateWorldMatrix();
	});

	let cameraRef: PerspectiveCamera;
</script>

<T.PerspectiveCamera
	makeDefault
	oncreate={(ref) => {
		cameraRef = ref;
	}}
/>

<T.Group
	rotation={[0, tweenedPosition.current[3], 0]}
	position={[-position.y / 90, 0, position.x / 90]}
>
	{#each [-2, -1, 0, 1, 2] as floor}
		<T.DirectionalLight position={[10, 40, -5]} />
		{#each rects as rect}
			<T.Mesh
				position={[rect.x - 1, floor * 1.5, rect.y - 1]}
				onclick={() => (selectedFloor = floor)}
			>
				<T.BoxGeometry args={[rect.h, 0.2, rect.w]} />
				<T.MeshStandardMaterial
					color={new Color(0xd2c5b7)}
					opacity={floor === selectedFloor ? 1 : tweenedPosition.current[4]}
					transparent
				/>
			</T.Mesh>
		{/each}
	{/each}
</T.Group>
