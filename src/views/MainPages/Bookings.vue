<template>
  <section class="max-w-5xl mx-auto">
    <h1 class="pb-2 font-semibold">Top City</h1>
    <span class=" grid grid-cols-3 gap-4 content-stretch h-56">
      <bookable-list-item
          :key="bookable.id"
          v-bind="bookable"
          v-for="bookable in bookables"
      />
    </span>
  </section>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";

const API = import.meta.env.VITE_API_URL

import BookableListItem from '@/components/bookables/BookableListItem.vue';
import axios from "axios";

const bookables = ref([
  {
    id: 1,
    title: 'Loop City',
    description: 'community for devs'
  },

]);

onMounted(() => {
  axios.get(API + 'bookables')
      .then(res => bookables.value = res.data)
});

</script>

<style scoped>

</style>
