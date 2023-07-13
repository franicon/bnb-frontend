<template>
  <section class="max-w-5xl mx-auto">
    <h1 class="pb-4 font-semibold">Top City</h1>

    <template v-if="loading">
      <div class="grid grid-cols-3 gap-4">
        <div class="" v-for="i in 3" :key="i">
          <div class="border border-gray-200 shadow rounded-md p-5 mb-4" >
            <div class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-6 py-1">
                <div class="space-y-4">
                  <div class="grid grid-cols-4 gap-4">
                    <div class="h-4 bg-gray-300 rounded col-span-2"></div>
                  </div>
                  <div class="h-4 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <span class=" grid xl:grid-cols-3 grid-cols-1 gap-4 content-stretch">
      <bookable-list-item :key="bookable.id" v-bind="bookable" v-for="bookable in bookables"/>
    </span>
  </section>
</template>

<script setup lang="ts">
import axios from "axios";
const API = import.meta.env.VITE_API_URL;

import { ref, onMounted} from "vue";
import BookableListItem from '@/components/bookables/BookableListItem.vue';

const bookables = ref([]);
const loading = ref( true );

onMounted(() => {
  axios.get(API + 'bookables')
      .then(res => {
        bookables.value = res.data;
        loading.value = false
      })
});

</script>

<style scoped>

</style>
