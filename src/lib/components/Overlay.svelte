<script>
    export let color = "bg-[#D4C1AE]"; // Beige background
  </script>

  <div class={`mt-[80px] fixed inset-0 flex flex-col items-center gap-4 p-4 ${color} rounded-t-3xl`}>
    <!-- Top Spacer -->
    <div class="w-full flex justify-center mb-6">
      <!-- Thin White Rounded Rectangle -->
      <div class="w-32 h-1.5 bg-white rounded-full"></div>
    </div>

    <slot></slot>
  </div>
