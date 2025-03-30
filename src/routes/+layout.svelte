<script lang="ts">
	import UpBar from '$lib/components/UpBar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<UpBar mainText="ligma" upperText="balls" />
{@render children()}
