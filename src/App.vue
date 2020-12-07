<template>
  <div id="app">
    
    <div id="nav" class="wrapper">
      <router-link to="/">Home | </router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <Home/>
  </div>
</template>



<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/* add more styles */
#nav {
  padding: 30px;
  text-align: center;
}
router-link-exact-active{
  color: green;
}
</style>
