<script>
	import { goto } from "\$app/navigation";

	function navigateTo() {
		goto("src/routes/user/+page.svelte")
	}
</script>

<button on:click={navigateTo}	class="w-10 h-10 scale-120 rounded-full border-2 border-black flex items-center justify-center bg-white">
	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
	</svg>
</button>