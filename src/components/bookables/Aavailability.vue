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
      <button class="btn-gray" @click.prevent="check">Check!</button>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";

const data = ref({
  from: '',
  to: ''
});

const check = ()=> {
  console.log(data.value)
}

</script>

