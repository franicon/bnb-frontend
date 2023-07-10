<template>
  <section class="max-w-3xl mx-auto grid grid-cols-3 gap-4">
    <bookable-list-item :price="Number(2000)" :title="bookable.title" :content="bookable.content" v-for="bookable in bookables" :key="bookable.id"/>
  </section>
</template>

<script setup lang="ts">
import {ref} from "vue";

import BookableListItem from  '@/components/bookables/BookableListItem.vue';

const bookables = ref([
  {
    id: 1,
    title: 'Loop City',
    content: 'community for devs'
  },
  {
    id: 2,
    title: 'Cloud City',
    content: 'community for devs'
  },
  {
    id: 3,
    title: 'Cloud City',
    content: 'community for devs'
  },
])
</script>

<style scoped>

</style>
