<template>
    <div class="introcontainer">
        <div class="toppage" :style="{backgroundImage: ADimageURL}">{{AnimeData}}</div>
        <div>{{ADimageURL}}</div>
        <!-- <div>{{$route.params.id}}</div> -->
        <!-- Page content goes here -->
        <h2>hi</h2>
    </div>
  </template>
  
  <script>
    import axios from 'axios';
    import {useRoute} from 'vue-router'
    //console.log('The id is: ' + this.$router.params.id);
    export default {
       name: "App",
      //  setup(){
      //   const route=useRoute()
      //   onMounted(()=>{
      //     const id= route.params.id
      //   })
      //  },
       data(){
        return{
          AnimeData: [],
          ADimageURL: '',
          //backgroundImage:AnimeData.image,
        }
      },
      computed:{
        ADimageURL(){
          console.log(this.AnimeData.image)
          return this.AnimeData.image;
        }
      },
      async mounted(){
        let option = {
          method: 'GET',
          url: 'https://anime-db.p.rapidapi.com/anime',
          params: {
            page: '1',
            size: '1',
            search: 'Bleach: Sennen Kessen-hen',
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
    };
    
  </script>
  
  <style>
  .toppage{
    height:200px;
    background-size:cover;
    background-position:center;
  }
  /* Page styles go here */
  </style>