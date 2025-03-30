<script lang="ts">
	let { status, onClick, class: className = '' } = $props();

	function getColor(s: number) {
		if (s == 1) {
			return 'bg-[#a5a5a5]';
		}
		if (s == null) {
			return 'bg-[#b3c485]';
		}
		return 'bg-[#5c6840]';
	}

	let percentage = $derived(status * 100);
	let color = $derived(getColor(status));
</script>

<button
	class="relative h-8 w-24 rounded-full {color} overflow-hidden text-black {className}"
	onclick={onClick}
>
	{#if status != null && status != 1}
		<div
			class="absolute left-0 top-0 h-full bg-[#b3c485] transition-all"
			style="width: {percentage}%;"
		></div>

		<span class="relative z-10">{Math.round(percentage / 20)}/5</span>
	{:else if status == null}
		CLAIM
	{:else}
		CLAIMED
	{/if}
</button>
