<template>
  <section>
    <h1 class="text-2xl font-medium">Title</h1>
    <p>{{props.title}}</p>
    <p class="text-lg">content</p>
    <p>{{props.content}}</p>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  content: { type: String, required: true }
})
</script>

<style scoped>

</style>
