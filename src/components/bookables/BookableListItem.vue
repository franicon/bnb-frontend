<template>
  <section>
    <div class="mb-4 shadow-sm rounded border p-4 h-40">
      <router-link :to="{name: 'bookable', params: { id }}">
        <h1 class="text-md font-[500] pb-2">{{ props.title }}</h1>
      </router-link>
      <p class="text-sm text-gray-600">{{ props.description }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">

interface Booking {
  id: number;
  title: string;
  description: string;
}

const props = defineProps<Booking>();
</script>

<style scoped>

</style>
