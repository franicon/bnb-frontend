<template>
  <section>
    <div class="mb-4 shadow-sm rounded border p-4 h-56">
      <h1 class="text-md font-[500]">{{ props.title }}</h1>
      <p class="text-sm">{{ props.description }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">

import { PropType } from "vue";

interface Booking {
  title: string
  description: string
  id: number
}
const props = defineProps<Booking>()
</script>

<style scoped>

</style>
