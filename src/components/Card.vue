<template>
  <div class="card shadow w-100 h-100 pt-2 justify-center items-center ">
    <div class="flex pt-2">
      <input
        type="text"
        name="task"
        class="border-2 ml-2 rounded h-10 w-60 outline-none text-gray-600 text-sm focus:border-gray-400 border-gray-800"
        v-model="state.capital"
      />
      <button
        @click="retrieveData"
        class="ml-5 bg-gray-600 rounded text-white font-semibold w-20 hover:bg-gray-400"
      >
        Chercher
      </button>
    </div>
    <div class="flex-col items-center justify-center pt-4">
      <h1 class="text-3xl font-bold hover:text-blue-800 cursor-pointer mb-2 ml-7">
        {{ state.capital }}
      </h1>
      <p class="mb-2 italic">Chance of rain: {{ state.chanceOfRain }}%</p>
    </div>
    <div>
      <img :src="state.icon" class="h-[5rem] w-[5rem] ml-4" />
      <p class="font-bold text-gray-300">{{ state.text }}</p>
    </div>
    <div class="ml-5">
      <h1 class="text-7xl font-bold cursor-pointer"> {{ state.temperature }}°</h1>
    </div>
    <Prevision :prevision_data="state.prevision_data"/>
  </div>
</template>

<script setup>
import Prevision from "../components/Prevision.vue";
import { onMounted, reactive } from "vue";




const state = reactive({
   chanceOfRain : 0,
    temperature : null,
    updated : null,
    text : null,
    icon : null,
    capital : 'Dakar',
    Prevision : []
})

const retrieveData = () => {
  retrieveWeatherData()
  retrievePrevision()

}

const retrievePrevision = async () => {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=01e3d04256c44816b53150417231212&q=${state.capital}&days=4`);
    const data = await response.json();

    state.prevision_data = data.forecast.forecastday.slice(0, 4).map(day => ({
      heure: day.hour[0].time, 
      temp: day.day.avgtemp_c + '°C', 
      img: day.day.condition.icon,
    }));
    console.log(state.prevision_data)
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

const retrieveWeatherData = async () => {
  try {

    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=01e3d04256c44816b53150417231212&q=${state.capital}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error.message);
    }

    const data = await response.json();
    console.log({ data });

    state.chanceOfRain = data.current.precip_in;
    state.temperature = data.current.temp_c;
    state.updated = data.current.last_updated;
    state.text = data.current.condition.text;
    state.icon = data.current.condition.icon;
  } catch (error) {
    console.log("Error fetching weather data:", error.message);
   
  }
};

onMounted(() => {
  retrieveData()
});

</script>
