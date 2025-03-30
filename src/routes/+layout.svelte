<script lang="ts">
	import UpBar from '$lib/components/UpBar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<UpBar mainText="Leaderboard" upperText="time to hit the major leagues" />
{@render children()}
