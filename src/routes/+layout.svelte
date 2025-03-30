<script lang="ts">
	import UpBar from '$lib/components/UpBar.svelte';
	import '../app.css';

	import { page } from '$app/state';

	import icon_achievement from '../resources/icon_achievement.png';
	import icon_achievement2 from '../resources/icon_achievement2.png';
	import icon_event from '../resources/icon_event.png';
	import icon_event2 from '../resources/icon_event2.png';
	import icon_map from '../resources/icon_map.png';
	import icon_map2 from '../resources/icon_map2.png';
	import icon_quest from '../resources/icon_quest.png';
	import icon_quest2 from '../resources/icon_quest2.png';
	import icon_search from '../resources/icon_search.png';
	import icon_search2 from '../resources/icon_search2.png';
	import { goto } from '$app/navigation';

	let { children } = $props();
</script>

<div class="relative flex h-full w-full flex-col">
	{@render children()}

	{#snippet link(active: string, normal: string, name: string)}
		<button
			class="flex h-14 grow items-center justify-center rounded-full bg-[#4e3d33] p-0.5"
			onclick={() => goto(name)}
		>
			{#if page.url.pathname === name}
				<img src={active} alt="icon" class="h-full w-full object-contain" />
			{:else}
				<img src={normal} alt="icon" class="h-full w-full object-contain" />
			{/if}
		</button>
	{/snippet}

	<div class="absolute bottom-0 z-20 flex h-20 w-full gap-2 rounded-t-[2em] bg-[#485b80] p-2">
		{@render link(icon_search, icon_search2, '/search')}
		{@render link(icon_achievement, icon_achievement2, '/achievements')}
		{@render link(icon_quest, icon_quest2, '/quests')}
		{@render link(icon_map, icon_map2, '/')}
		{@render link(icon_event, icon_event2, '/events')}
	</div>
</div>
