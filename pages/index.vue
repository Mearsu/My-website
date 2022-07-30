<template>
      <h1>Hello world</h1>
      <p>{{ count }}</p>
      <button @click="increment"> click me</button>
      <div v-for="d in data">
         {{ d }}
      </div>
</template>

<script setup>
const layout = "default";
const count = ref(0);
const increment = () => count.value++;
let data = ["idk"];
//data = useFetch("https://api.nuxtjs.dev/posts")
</script>
