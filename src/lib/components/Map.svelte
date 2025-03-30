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
		{ x: -0.7, y: 0.5, w: 1.8, h: 0.6 },
		{ x: 0.5, y: 0.5, w: 1.8, h: 1 },
		{ x: 2.0, y: 0.1, w: 1, h: 1.2 },
		{ x: 2, y: 2, w: 2, h: 1.2 },
		{ x: 0, y: 2.4, w: 1.2, h: 2 }
	];

	let selectedFloor: number | null = $state(null);

	let { invalidate } = useThrelte();

	let props = $derived.by(() => {
		if (selectedFloor === null) {
			return [12, 2, 0, -Math.PI / 4, 0.9];
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

	const spheres = [
		{ x: 1.8, y: -3, z: -0.5 },
		{ x: 1.4 - 0.2 / 3, y: -3, z: -0.5 },
		{ x: 1.0 - 0.4 / 3, y: -3, z: -0.5 },
		{ x: 0.6 - 0.6 / 3, y: -3, z: -0.5 },
		{ x: 0.6 - 0.6 / 3, y: -3, z: -0.1 },
		{ x: 0.6 - 0.6 / 3, y: -3, z: 0.3 },
		{ x: 0.0, y: -3, z: 0.3 },
		{ x: 0.0, y: -2.7, z: 0.1 },
		{ x: 0.0, y: -2.4, z: 0.1 },
		{ x: 0.0, y: -2.1, z: 0.1 },
		{ x: 0.0, y: -1.8, z: 0.1 },
		{ x: 0.0, y: -1.5, z: 0.1 },
		{ x: 0.0, y: -1.2, z: 0.1 },
		{ x: 0.0, y: -0.9, z: 0.1 },
		{ x: 0.0, y: -0.6, z: 0.1 },
		{ x: 0.0, y: -0.3, z: 0.1 },
		{ x: -0.2 + 0.6 / 3, y: 0, z: 0.3 },
		{ x: 0.6 - 0.6 / 3, y: 0, z: 0.3 },
		{ x: 0.6 - 0.6 / 3, y: 0, z: -0.1 },
		{ x: 0.6 - 0.6 / 3, y: 0, z: -0.5 },
		{ x: 0.6 - 0.6 / 3, y: 0, z: -0.9 }
	];

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
	{#each [-2, -1, 0, 1, 2, 3] as floor}
		<T.DirectionalLight position={[10, 40, -5]} intensity={0.85} />
		<T.AmbientLight intensity={0.15} />
		{#each rects as rect, i}
			<T.Mesh
				position={[rect.x - 0.8, floor * 1.5, rect.y - 1.3]}
				onclick={() => (selectedFloor = floor)}
			>
				<T.BoxGeometry args={[rect.h, 0.2, rect.w]} />
				<T.MeshStandardMaterial
					color={floor == -2 || (floor == 0 && i >= 2) || (floor == -1 && (i == 0 || i == 3))
						? new Color(0x47433e)
						: new Color(0xd2c5b7)}
					opacity={floor === selectedFloor ? 0.9 : tweenedPosition.current[4]}
					transparent
				/>
			</T.Mesh>
		{/each}
		{#each spheres as sphere}
			<T.Mesh position={[sphere.x, sphere.y, sphere.z]}>
				<T.SphereGeometry args={[0.1, 32, 32]} />
				<T.MeshStandardMaterial
					color={'red'}
					transparent
					opacity={selectedFloor === null || sphere.y === selectedFloor * 1.5
						? 0.9
						: tweenedPosition.current[4]}
				/>
			</T.Mesh>
		{/each}
	{/each}
</T.Group>
