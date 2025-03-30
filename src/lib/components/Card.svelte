<script lang="ts">
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

<div class={`${color} mb-5 inline-block w-full items-center rounded-3xl`}>
	<div class="flex w-full flex-row rounded-3xl bg-[#60412c]">
		<div class="mx-2 my-2 h-16 w-16 rounded-2xl bg-[#f7f7f7]"></div>
		<div class="ml-2 mt-3 text-[#f2f2f2]">
			<p class="text-xl font-bold">{title}</p>
			<p>{description}</p>
		</div>
	</div>
	{#if longDescription}
		<div class="ml-4 mr-6 mt-1.5 py-1 text-base/4 text-white">
			{longDescription}
		</div>
	{:else}
		<div class="mt-1.5"></div>
	{/if}
	<div class="ml-4 mr-3 flex items-center pb-3 pt-1.5 text-[#f2f2f2]">
		{@render children()}
		<ProgressButton {status} onClick={handleOnClick} class="ml-auto" />
	</div>
</div>
