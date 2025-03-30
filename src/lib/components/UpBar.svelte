<script>
	import UpBarButton from '$lib/components/UpBarButton.svelte';
	export let upperText
	export let mainText

</script>

<div class="w-full px-4 py-2 flex items-center justify-between">
	<div class="flex flex-col">
		<span class="text-s text-gray-500">{upperText}</span>
		<span class="text-3xl font-medium">{mainText}</span>
	</div>
	<UpBarButton/>
</div>