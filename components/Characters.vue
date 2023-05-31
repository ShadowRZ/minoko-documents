<script setup>
import { data as items } from '../data/characters.data.js'
import CharacterDescription from './CharacterDescription.vue'

defineProps(['type'])
</script>

<template>
  <div class="mt-4 flex flex-wrap flex-row">
    <template v-for="item in items">
      <CharacterDescription :name='item.name' :desc='item.desc' :image='item.image' v-if="item.type === type"/>
    </template>
  </div>
</template>
