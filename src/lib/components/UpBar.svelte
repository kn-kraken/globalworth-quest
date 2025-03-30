<script>
	import UpBarButton from '$lib/components/UpBarButton.svelte';
	export let upperText;
	export let mainText;
</script>

<div class="flex w-full items-center justify-between px-4 py-2">
	<div class="flex flex-col">
		<span class="text-gray-500">{upperText}</span>
		<span class="text-3xl font-medium">{mainText}</span>
	</div>
	<UpBarButton />
</div>
