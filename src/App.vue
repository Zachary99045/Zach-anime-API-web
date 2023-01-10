<template>
  <div class="nav">
    <TheNavbar/>
    <router-view />
    <button @click="showAnime">Show Anime</button>
    <div v-if="AnimeData">
      <p>{{AnimeData}}</p>
    </div>
</div>
</template>

<script>
import axios from 'axios';

import TheNavbar from './components/TheNavbar.vue';
export default {
  name: "App",
  components:{
    TheNavbar
  },
  data(){
    return{
      AnimeData:''
    }
  },
  methods:{
    async showAnime(){
      let option = {
        method: 'GET',
        url: 'https://anime-db.p.rapidapi.com/anime/by-ranking/1',
        headers: {
          'X-RapidAPI-Key': '6cb1fdb764msh1700787e0288af7p16150bjsn54c08f25e017',
          'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
      }
      const animeData = await axios.get('https://anime-db.p.rapidapi.com/anime/by-ranking/1',option);
      this.AnimeData = animeData.data
    }
  }
};
</script>

<style lang="scss">

</style>
