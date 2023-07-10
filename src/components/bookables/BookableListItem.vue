<template>
  <section>
    <h1 class="text-2xl font-[400]">{{props.title}}</h1>
    <p class="text-sm">{{props.content}}</p>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  price: { type: Number, required: true},
  title: { type: String, required: true },
  content: { type: String, required: true }
})
</script>

<style scoped>

</style>
