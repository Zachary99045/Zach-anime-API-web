<template>
    <div>
      <button @click="showAnime">Show Anime</button>
      <div class="cardcontainer" v-if="AnimeData">
        <div v-for="AD in AnimeData" :key="AD._id">
          <card v-bind:imagelink="AD.image" :title="AD.title" :alternativeTitles="AD.alternativeTitles" :ranking="AD.ranking"/>
          <div>{{AD.image}}</div>
        </div>
      </div>
      <p>{{AnimeData}}</p>
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
.cardcontainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>