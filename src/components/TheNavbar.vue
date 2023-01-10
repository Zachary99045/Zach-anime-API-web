<template>
    <nav>
      <router-link to="/Now">Now</router-link>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  nav a {
    color: #333;
    text-decoration: none;
  }
  </style>