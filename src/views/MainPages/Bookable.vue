<template>
  <div class="grid grid-cols-2 max-w-5xl mx-auto">
    <div>*</div>
    <div>*</div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
const API = import.meta.env.VITE_API_URL

import {onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const bookable = ref( null );

onMounted(() => {
  axios.get(API + 'bookables/' + route.params.id).then(res => bookable.value = res.data)
});

</script>

<style scoped>

</style>
