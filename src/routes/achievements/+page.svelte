<script>
	import Achievement from '$lib/components/Achievement.svelte';
	import Overlay from '$lib/components/Overlay.svelte';
	import UpBar from '$lib/components/UpBar.svelte';
	import achievement from '../../resources/icon_achievement.png'

	let achievements = $state([
		{
			title: 'Welcome Aboard!',
			description: 'complete your basic training',
			rp: 35,
			xp: 55,
			status: 1,
			iconUrl: achievement,
		},
		{
			title: "Now we're talking",
			description: 'find the arcade room',
			rp: 10,
			xp: 20,
			status: null,
			iconUrl: achievement,
		},
		{
			title: 'Party maker!',
			description: 'host 5 events',
			rp: 45,
			xp: 60,
			status: 0.6,
			iconUrl: achievement
		}
	]);
</script>

<UpBar upperText="Track your progress" mainText="Achievements" />

<Overlay>
	{#each achievements as achiev}
		<Achievement {...achiev} />
	{/each}
</Overlay>
