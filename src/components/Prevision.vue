<template>
    <div class="bg-blue-50 h-[10rem] w-[25rem] rounded-lg">
    <p class="text-gray-400 text-sm ml-2 font-semibold pt-2">Prevision Aujourd'hui</p>
    <div class="d-flex flex-row justify-between">
      <Subprevision 
      v-for="(Prevision, index) in state.Prevision_data " :key="index"
      :heure ='Prevision.heure'
      :temp = 'Prevision.temp'
      :img ='Prevision.img'
     />
    </div>
      
    </div>
  </template>
  <script setup>
import { reactive } from "vue";
import Subprevision from "../components/Data-Prevision/Subprevision.vue";

const state = reactive ({
    
    
    Prevision_data : [
      {
        heure : '9:00 AM',
        temp: '26°',
        img : 'sun.png',
      },
      {
        heure : '7:00 AM',
        temp: '24°',
        img : 'sunrise.png',
      },
      {
        heure : '8:00 AM',
        temp: '22°',
        img : 'pluie.png',
      },
      {
        heure : '8:00 AM',
        temp: '22°',
        img : 'pluie.png',
      },
      {
        heure : '8:00 AM',
        temp: '22°',
        img : 'pluie.png',
      },
     
    ]
    
    
    })

  </script>