<template>
  <div class="bg-blue-50 h-[10rem] w-[25rem] rounded-lg">
    <p class="text-gray-400 text-sm ml-2 font-semibold pt-2">Prevision</p>
    <div class="d-flex flex-row justify-between">
      <Subprevision
        v-for="(prevision, index) in props.prevision_data "
        :key="index"
        :heure="prevision.heure"
        :temp="prevision.temp"
        :img="prevision.img"
      />
    </div>
  </div>
</template>

<script setup>
import Subprevision from "../components/Data-Prevision/Subprevision.vue";

const props = defineProps ({
  prevision_data : Array,
})

</script>
