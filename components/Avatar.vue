<script setup>
defineProps(['src', 'alt'])
</script>

<template>
  <img class="aspect-square rounded-full mx-0 my-0 px-0 py-0" :src="src" :alt="alt"/>
</template>
