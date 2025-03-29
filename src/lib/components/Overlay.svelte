<script>
    export let color = "bg-[#D4C1AE]"; // Beige background
</script>

<div class={`mt-[80px] fixed inset-0 flex flex-col items-center gap-4 p-4 ${color} rounded-t-3xl overflow-hidden`}>
  <!-- Top Non-Scrollable Section -->
  <div class="w-full flex justify-center mb-4">
    <!-- Thin White Rounded Rectangle -->
    <div class="w-32 h-1.5 bg-white rounded-full"></div>
  </div>

  <!-- Scrollable Content -->
  <div class="w-full flex-1 overflow-y-auto hide-scrollbar flex flex-col items-center">
    <slot></slot>
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
</style>
