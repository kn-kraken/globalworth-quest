<script>
</script>

<div class={`fixed inset-0 mt-[80px] flex flex-col overflow-hidden  `}>
	<div class="absolute top-6 z-20 flex w-full justify-center">
		<div class="h-1.5 w-32 rounded-full bg-white"></div>
	</div>
	<div class="edge h-7"></div>
	<div class="paper-bg flex w-full grow flex-col items-center gap-4 px-4 pt-4">
		<div class="hide-scrollbar flex w-full flex-1 flex-col items-center overflow-y-auto">
			<slot></slot>
		</div>
	</div>
</div>

<style>
	/* Hide scrollbar */
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.hide-scrollbar {
		scrollbar-width: none; /* Firefox */
	}

	.paper-bg {
		background-image: url('../../resources/texture_paper.png');
		background-size: cover;
		background-repeat: no-repeat;
	}

	.edge {
		mask-image: url('../../resources/paper_edge_full2-3.png');
		mask-size: cover;
		mask-repeat: no-repeat;
		background-image: url('../../resources/texture_paper.png');
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
