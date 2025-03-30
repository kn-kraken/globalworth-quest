<script>
	import { goto } from "\$app/navigation";

	let iconSrc = "src/assets/icon_user.png";

	function navigateTo() {
		goto("src/routes/user/+page.svelte")
	}
</script>

<button on:click={navigateTo}	class="w-10 h-10 scale-120 rounded-full border-2 border-black flex items-center justify-center bg-white">
	<img src="{iconSrc}" alt="Icon" class="w-full h-full object-contain">
</button>