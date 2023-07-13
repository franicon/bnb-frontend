<template>
  <Loader :num="Number(2)" v-if="loading"/>
  <div class="grid grid-cols-2 gap-6 max-w-5xl mx-auto" v-else>
    <div class="shadow-sm rounded border p-4 h-36">
      <h2>{{ bookable?.title }}</h2>
      <p class="text-sm text-gray-600 pt-2">{{ bookable?.description }}</p>
    </div>
    <div>
      <h1 class="">Availability & Prices</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";

const API = import.meta.env.VITE_API_URL

import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import Loader from "@/components/utils/Loader.vue";


const route = useRoute();

const loading = ref(true);
const bookable = ref(null);

onMounted(() => {
  axios.get(API + 'bookables/' + route.params.id).then(res => {
    bookable.value = res.data;
    loading.value = false
  });
});

</script>

<style scoped>

</style>
