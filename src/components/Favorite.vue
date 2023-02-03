<template>
  <div>
    <!-- Page content goes here -->
    <h2>hi</h2>
  </div>
</template>

<script>
import axios from 'axios';
import Card from './card';
export default {
  name: "App",
  components:{
    Card,
  },
  data(){
    return{
      AnimeData: [],
    }
  },
  methods:{
    async showAnime(){
      let option = {
        method: 'GET',
        url: 'https://anime-db.p.rapidapi.com/anime',
        params: {
          page: '1',
          size: '10',
          sortBy: 'ranking',
          sortOrder: 'asc'
        },
        headers: {
          'X-RapidAPI-Key': 'e69143328emsh92acd746dd6c773p1365d6jsn23bbcb11707b',
          'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
      }
      try{
        const resData = await axios.get('https://anime-db.p.rapidapi.com/anime',option);
        console.log(resData.data.data)
        this.AnimeData = await resData.data.data
      } catch(error){
        console.error(error);
      }
      
    }
  }
};
</script>

<style>
/* Page styles go here */
</style>
