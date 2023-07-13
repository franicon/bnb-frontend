<template>
  <div>Single bookable</div>
</template>

<script setup lang="ts">
import axios from "axios";
const API = import.meta.env.VITE_API_URL

import {onMounted, ref } from "vue";
import { useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();

const bookable = ref( null );

onMounted(() => {
  axios.get(API + `bookables/${route.params.id}`).then(res => bookable.value = res.data)
})
</script>

<style scoped>

</style>
