<script lang="ts">
	import CardWrapper from './CardWrapper.svelte';
	import ProgressButton from './ProgressButton.svelte';

	let { title, description, longDescription = '', status, children } = $props();

	function getColor(s: number) {
		if (s == 1) {
			return 'bg-[#727271]';
		}
		if (s == null) {
			return 'bg-[#5c6840]';
		}
		return 'bg-[#8b7665]';
	}

	let color = $derived(getColor(status));

	function handleOnClick() {
		if (status == null) {
			status = 0;
		}
	}
</script>

<CardWrapper {color} margin="m-5">
		{#snippet upperChildren()}
			<div class="mx-2 my-2 h-16 w-16 rounded-2xl bg-[#f7f7f7]"></div>
			<div class="mt-3 ml-2 text-[#f2f2f2]">
				<p class="text-xl font-bold">{title}</p>
				<p>{description}</p>
			</div>
		{/snippet}
		{#snippet lowerChildren()}
		<div class="ml-4 mr-6 mt-1.5 py-1 text-base/4 text-white">
			{longDescription}
		</div>
		<div class="ml-4 mr-3 flex items-center pb-3 pt-1.5 text-[#f2f2f2]">
			{@render children()}
			<ProgressButton {status} onClick={handleOnClick} class="ml-auto" />
		</div>
		{/snippet}
</CardWrapper>
