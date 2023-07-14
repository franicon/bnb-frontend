<template>
  <div>
    <h1 class="text-sm uppercase font-bold text-gray-500">Check Availability</h1>
    <div class="grid grid-cols-2 gap-4">
      <div class="pt-1">
        <label for="from" class="text-sm text-gray-400 font-semibold"> From </label>
        <input placeholder="Start date" type="text" name="from" class="input w-full" v-model="data.from" v-on:keyup.enter="check">
      </div>
      <div class="pt-1">
        <label for="end" class="text-sm text-gray-400 font-semibold">To</label>
        <input placeholder="End date" type="text" name="from" class="input w-full" v-model="data.to" v-on:keyup.enter="check">
      </div>
    </div>
    <div class="w-full flex mx-auto mt-3">
      <button class="btn-gray" @click.prevent="check" :disabled="data.loading">Check!</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const API = import.meta.env.VITE_API_URL

import {ref} from "vue";
import axios from "axios";

const route = useRoute();

const data = ref({
  from: '',
  to: '',
  loading: false,
  error: null,
  status: null
});

const check = ()=> {
  data.value.loading = true
  axios.get(API + `bookables/${route.params.id}/availability?from=${data.value.from}&to=${data.value.to}`).then(res => {
    data.value.status = res.status
  }).catch(error => {
    if (422 == error.response.status) {
      data.value.error = error.response.data.errors;
    }
    data.value.status = error.response.status
  }).then(()=>(data.value.loading=false));
}

</script>

