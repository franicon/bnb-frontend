<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="" v-for="i in num" :key="i">
    <div class="border border-gray-200 shadow rounded-md px-5 py-5 mb-4" >
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 py-1">
          <div class="space-y-3">
            <div class="grid grid-cols-4 gap-4">
              <div class="h-2 bg-gray-200 col-span-2"></div>
            </div>
            <div class="h-20 bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  num: { type: Number }
})
</script>

