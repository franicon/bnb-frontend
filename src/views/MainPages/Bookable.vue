<template>
  <div class="max-w-5xl mx-auto">
    <Loader :num="Number(2)" v-if="loading"/>
    <div class="grid grid-cols-6 gap-6" v-else>
      <div class="shadow-sm rounded border p-4 h-36 col-span-3">
        <h2 class="text-2xl">{{ bookable?.title }}</h2>
        <p class="text-sm text-gray-600 pt-2">{{ bookable?.description }}</p>
      </div>
      <div class="col-span-2 bg-gray-100 p-4 rounded">
        <Availability/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";

const API = import.meta.env.VITE_API_URL

import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

import Loader from "@/components/utils/Loader.vue";
import Availability from "@/components/bookables/Aavailability.vue"


const route = useRoute();

const bookable = ref();
const loading = ref(true);

onMounted(() => {
  axios.get(API + `bookables/${route.params.id}`).then(res => {
    bookable.value = res.data.data;
    loading.value = false
  });
});

</script>

<style scoped>

</style>
