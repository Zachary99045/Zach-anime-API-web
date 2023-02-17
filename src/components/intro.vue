<template>
    <div class="introcontainer">
        <img class="image" v-bind:src="ADimageURL" alt="Avatar"/>
        <!-- <div>{{$route.params.id}}</div> -->
        <!-- Page content goes here -->
        <h2>{{ADtitle}}</h2>
        <div class="link"><p>Link for the website: </p><a :href="ADlink">{{ADlink}}</a></div>
        <p>Categories: {{ADgenres}}</p>
        <p>Type:{{ADtype}}</p>
    </div>
  </template>
  
  <script>
    import axios from 'axios';
    import {useRoute} from 'vue-router'
    //console.log('The id is: ' + this.$router.params.id);
    export default {
       name: "App",
       data(){
        return{
          AnimeData: [],
          ADimageURL: null,
          ADtitle: null,
          ADlink: null,
          ADtype: null,
          ADgenres: null,
          //backgroundImage:AnimeData.image,
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
            'X-RapidAPI-Key': '3fa5e9f395mshfac36136d5bcdbdp1d354ajsn1d0398f07409',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
          }
        }
        try{
          const resData = await axios.get('https://anime-db.p.rapidapi.com/anime',option);

          console.log(resData.data.data)

          this.AnimeData = await resData.data.data
          this.ADimageURL = await resData.data.data[0].image
          this.ADtitle = await resData.data.data[0].title
          this.ADlink= await resData.data.data[0].link
          this.ADtype= await resData.data.data[0].type
          this.ADgenres= await resData.data.data[0].genres
        } catch(error){
          console.error(error);
        }
      },
      setup(){
        const route=useRoute()
        console.log('router data:',route)
       },
    };
    
  </script>
  
  <style>
  .introcontainer{
      text-align: center;
      width: 100%;
      justify-content: center;
  }
  .image{
    height:200px;
    background-size:cover;
    background-position:center;
  }
  .link{
    display: flex;
    justify-content: center;
  }
  /* Page styles go here */
  </style>