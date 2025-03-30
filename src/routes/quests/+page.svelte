<script>
	import Achievement from '$lib/components/Achievement.svelte';
	import Overlay from '$lib/components/Overlay.svelte';
	import Quest from '$lib/components/Quest.svelte';

	let achievement = $state([
		{
			title: 'Welcome Aboard!',
			description: 'complete your basic training',
			longDescription: 'Complete your basic training to get started',
			xp: 69,
			status: 1
		},
		{
			title: "Now we're talking",
			description: 'find the arcade room',
			longDescription: 'Find the arcade room to start your adventure',
			xp: 69,
			status: null
		},
		{
			title: 'Party maker!',
			description: 'host 5 events',
			longDescription: 'Host 5 events to earn some rewards',
			xp: 69,
			status: null
		}
	]);
</script>

<h1>All Achievements</h1>

<Overlay>
	{#each achievement as achievement}
		<Quest {...achievement} />
	{/each}
</Overlay>
