<!-- HeaderOverlay.svelte -->
<script>
	// Props
	export let currentXP = 3;
	export let totalXP = 8;
	export let iconSrc = "src/assets/icon_shield.png";
	export let username = "Jan Kowalski";
	export let readyText = "ready for a quest?";
	export let onProfileClick = () => {};
	export let isOpen = false;
	$: filledSegments = Math.floor(0.7 * 8);
	const segments = Array(8).fill(0);
</script>

<div class="relative w-full px-4 py-3">
	<div class="w-full bg-gray-200 px-4 py-3 flex items-center justify-between">
		<div class="flex flex-col">
			<span class="text-xs text-gray-500">{readyText}</span>
			<span class="text-2xl font-medium">{username}</span>
		</div>

		<button
			on:click={onProfileClick}
			class="w-10 h-10 scale-120 rounded-full border-2 border-gray-400 flex items-center justify-center bg-white"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
			</svg>
		</button>
	</div>

	<div class="flex items-center w-full space-x-2">
		<!-- Thinner segmented progress bar stretching full width -->
		<div class="flex-1 flex space-x-1">
			{#each segments as _, index}
				<div
					class="flex-1 h-1 rounded-sm"
					class:bg-green-500={index < filledSegments}
					class:bg-gray-300={index >= filledSegments}
				></div>
			{/each}
			<div class="mt-1 text-xs text-gray-700 text-center">
				{currentXP}/{totalXP} xp
			</div>
		</div>

		<!-- Yellow circle with number 7 -->
		<div class="relative w-8 h-8">
			<img src="{iconSrc}" alt="Icon" class="w-full h-full object-contain">
			<span class="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
      7
    </span>
		</div>

		<!-- XP display -->
	</div>

	<!-- Overlay content when open -->
	{#if isOpen}
		<div class="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg p-4 z-10">
			<slot></slot>
		</div>
	{/if}
</div>