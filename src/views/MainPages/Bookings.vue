<template>
  <section class="max-w-5xl mx-auto">
    <h1 class="pb-4 font-semibold">All Bookings</h1>

    <template v-if="loading">
     <Loader :num="Number(6)"/>
    </template>
    <span class=" grid xl:grid-cols-3 grid-cols-1 gap-4 content-stretch">
      <bookable-list-item v-bind="bookable" v-for="bookable in bookables" :key="bookable.id"/>
    </span>
  </section>
</template>

<script setup lang="ts">
import axios from "axios";
const API = import.meta.env.VITE_API_URL;

import { ref, onMounted} from "vue";

import Loader from "@/components/utils/Loader.vue";
import BookableListItem from '@/components/bookables/BookableListItem.vue';

const bookables = ref();
const loading = ref( true );

onMounted(() => {
  axios.get(API + 'bookables')
      .then(res => {
        bookables.value = res.data.data;
        loading.value = false
      })
});

</script>

<style scoped>

</style>
