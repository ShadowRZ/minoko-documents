<script setup>
import { withBase } from 'vitepress'
import { UserIcon } from '@heroicons/vue/24/outline'
import Avatar from './Avatar.vue'
defineProps(['name', 'desc', 'image'])
</script>

<template>
  <div class="flex items-center px-1 py-1 space-x-2 w-56">
    <template
      class="rounded-full w-10 h-10 block mb-0.5 border-[0.5px] border-pink-300">
      <Avatar
        :src="withBase(image)"
        :alt="'[Avatar of ' + name + ']'"
        v-if="image !== ''"/>
      <div class="bg-pink-100 aspect-square rounded-full flex items-center justify-center" v-else>
        <UserIcon class="w-4 h-4" />
      </div>
    </template>
    <div class="flex flex-col">
      <strong>{{ name }}</strong>
      <span class="text-gray-400">{{ desc }}</span>
    </div>
  </div>
</template>
