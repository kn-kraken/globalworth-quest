<script>
	import { goto } from '$app/navigation';

	function navigateTo() {
		goto('/leaderboard');
	}
</script>

<button
	on:click={navigateTo}
	class="scale-120 flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white"
>
	<img src="../../resources/icon_user.png" alt="Icon" class="h-full w-full object-contain" />
</button>
