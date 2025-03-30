<script>
	import Card from './Card.svelte';
	import Rp from './RP.svelte';
	import Xp from './XP.svelte';

	let { title, description, rp, xp, status, iconUrl } = $props();
</script>

<Card {title} {description} {status} {iconUrl}>
	<Rp>{rp}</Rp>
	<Xp>{xp}</Xp>
</Card>
