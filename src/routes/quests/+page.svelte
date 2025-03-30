<script>
	import Achievement from '$lib/components/Achievement.svelte';
	import Overlay from '$lib/components/Overlay.svelte';
	import Quest from '$lib/components/Quest.svelte';
	import UpBar from '$lib/components/UpBar.svelte';
	import book from '../../resources/icon_quest.png'
	import map from '../../resources/icon_map.png'

	let achievement = $state([
		{
			title: 'Welcome Aboard!',
			description: 'complete your basic training',
			longDescription: 'Complete your basic training to get started',
			xp: 69,
			status: 1,
			iconUrl: book,
		},
		{
			title: "Now we're talking",
			description: 'find the arcade room',
			longDescription: 'Find the arcade room to start your adventure',
			xp: 69,
			status: null,
			iconUrl: map,
		},
		{
			title: 'Party maker!',
			description: 'host 5 events',
			longDescription: 'Host 5 events to earn some rewards',
			xp: 69,
			status: null,
			iconUrl: map,
		}
	]);
</script>

<UpBar
	upperText = "looking for some new activities?"
	mainText = "Your quests"
/>

<Overlay>
	{#each achievement as achievement}
		<Quest {...achievement} />
	{/each}
</Overlay>
