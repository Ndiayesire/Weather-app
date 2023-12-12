<template>
    <div class="card w-100 h-100 pt-2 justify-center shadow items-center ">
      <div class="flex pt-2">
            <input type="text" name="task" class="border-1 ml-2 rounded h-10 w-60 outline-none text-gray-600 text-sm focus:border-green-800 border-green-800" v-model="capital">
            <button @click="assignValueToCityName" class="ml-5 bg-gray-600 rounded text-white font-semibold w-40 hover:bg-green-800">Chercher</button>
          </div>
      <div class="flex-col items-center justify-center pt-4">
        <h1 class="text-3xl font-bold hover:text-blue-800 cursor-pointer mb-2 ml-7">{{cityName}}</h1>
        <p class="mb-2 italic">Chance of rain: {{chanceOfRain}}%</p>
      </div>
      <div>
        <img :src="icon" class="h-[5rem] w-[5rem] ml-4">
        <p class="font-bold text-gray-300">{{text}}</p>
      </div>
      <div class="ml-5">
        <h1 class="text-7xl font-bold cursor-pointer"> {{temperature}}°</h1>
      </div>
      <Prevision/>
    </div>
  </template>
  <script setup>
    import Prevision from "../components/Prevision.vue";
    import { ref, onMounted} from 'vue';
  
  const cityName = ref(null);
  const chanceOfRain = ref(0);
  const temperature = ref(null);
  const updated = ref(null)
  const text = ref(null)
  const icon = ref(null)
  const capital = ref(null)

  function assignValueToCityName() {
    cityName.value = capital.value;
    }
  
  const fetchWeatherData = async () => {
    try {
     
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=01e3d04256c44816b53150417231212&q=${cityName}`);
      const data = await response.json();
      console.log({data})
  
      chanceOfRain.value = data.current.precip_in;
      temperature.value = data.current.temp_c;
      updated.value = data.current.last_updated;
      text.value = data.current.condition.text;
      icon.value = data.current.condition.icon
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  onMounted(fetchWeatherData);

  </script>