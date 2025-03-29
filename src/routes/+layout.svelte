<script lang="ts">
	import '../app.css';
	import Account from '$lib/components/Account.svelte';
	let { children } = $props();
</script>
{@render children()}
