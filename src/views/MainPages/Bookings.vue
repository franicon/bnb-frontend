<template>
  <section class="max-w-3xl mx-auto">
    <h1 class="pb-2 font-semibold">Top City</h1>
    <span class=" grid grid-cols-3 gap-4 content-stretch h-56">
      <bookable-list-item :price="Number(2000)" :title="bookable.title" :content="bookable.description"
                          v-for="bookable in bookables" :key="bookable.id"/>
    </span>
  </section>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";

import BookableListItem from '@/components/bookables/BookableListItem.vue';
import axios from "axios";

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
]);

onMounted(() => {
  axios.get('http://localhost:8000/api/bookables')
      .then(res => bookables.value = res.data)
});
</script>

<style scoped>

</style>
