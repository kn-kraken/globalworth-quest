<script>
	import Card from './Card.svelte';
	import Xp from './XP.svelte';

	let { title, description, longDescription, status, xp } = $props();
</script>

<Card {title} {description} {longDescription} {status}>
	<script>
		import Card from './Card.svelte';
		import Rp from './RP.svelte';
		import Xp from './XP.svelte';

		let { title, description, rp, xp, status } = $props();
	</script>

	<Xp>{xp}</Xp>
</Card>
