<template>
    <nav>
      <router-link to="/">Favorite</router-link>
      <router-link to="/Popular">Popular</router-link>
    </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
nav {
  background-color:rgb(105, 105, 105);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

nav  a {
  color: rgb(255, 255, 255);
  text-decoration: none;
}
</style>