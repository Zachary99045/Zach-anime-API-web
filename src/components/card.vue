<template>
    <router-link class="card" :to="`/Intro/`+title">
        <img :src="imagelink" alt="Avatar" style="width:100%">
        <div class="container">
            <h4><b>{{title}}</b></h4>
            <p>{{ranking}}</p>
        </div>
    </router-link>
</template>

<script>
export default {
    props:{
        imagelink: String,
        title: String,
        alternativeTitles: String,
        ranking: String,
    },

};

</script>

<style>
.card {
/* Add shadows to create the "card" effect */
text-decoration: none;
width: 400px;
height: 450px;
overflow: hidden;
box-shadow: 0px 0px 15px -5px;
margin:2em;
}

/* On mouse-over, add a deeper shadow */


.card img{
    object-fit: cover;
    overflow: hidden;
    height: 300px;
    width: 400px;
}
/* Add some padding inside the card container */
.container {
padding: 2px 16px;
}
</style>
