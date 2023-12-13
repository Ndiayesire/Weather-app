<template>
  <div class="d-flex flex-col justify-center align-center">
        <div class=" ml-5 mr-5">
      <p class="text-sm text-gray-400">{{ heure }}</p>
    </div>
    <div class="ml-5 mr-5">
      <img :src="img" class="h-[2rem] w-[2rem]">
    </div>
    <div class=" ml-6 mr-5 pt-1">
      <p class="text-sm font-bold">{{ temp }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heure: String,
    temp: String,
    img: String,
  },
};
</script>
