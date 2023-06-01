<script setup>
import { data as items } from "../data/characters.data.js"
import CharacterDescription from "./CharacterDescription.vue"

defineProps(["type"])
</script>

<template>
  <div class="mt-4 flex flex-wrap flex-row">
    <template v-for="item in items">
      <template v-if="item.type === type">
        <a class="grow sm:grow-0" :href="item.link" v-if="item.link !== ''">
          <CharacterDescription v-bind="item"/>
        </a>
        <CharacterDescription
          class="grow sm:grow-0"
          v-bind="item"
          v-else/>
      </template>
    </template>
  </div>
</template>
