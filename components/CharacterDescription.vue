<script setup>
import { withBase } from 'vitepress'
import Avatar from './Avatar.vue'
defineProps(['name', 'desc', 'image'])
</script>

<template>
  <div class="flex items-center px-1 py-1 space-x-2 w-56">
      <Avatar class="w-10 h-10 block mb-0.5 border-[0.5px] border-orange-300" :src="withBase(image)" :alt="'[Avatar of ' + name + ']'"/>
    <div class="flex flex-col">
      <strong>{{ name }}</strong>
      <span class="text-gray-400">{{ desc }}</span>
    </div>
  </div>
</template>
