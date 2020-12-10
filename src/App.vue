<template>
  <div id="app">
    <!-- TODO: add store's name -->
    <div id="nav" class="wrapper">
      <router-link to="/">Home | </router-link>
      <router-link to="/cart">Cart
        <!-- badge shown after cart link -->
        <!-- :count: pass data to the prop in CounterBadge.vue -->
        <!-- : -> count passes the return value of computed cartCount() -->
      </router-link>
      <counter-badge :count="cartCount"></counter-badge>
    </div>
    <router-view/>
    <Home/>
  </div>
</template>

<script>
// import the CounterBadge component 
import CounterBadge from '@/components/CounterBadge';
export default {  
  name: 'app',
  // register it to be use in template 
  components: {CounterBadge},
  // cartCount(): returns the length of cart array in store.js
  computed: {
    cartCount() {
      return this.$store.state.cart.length
    }
  }
}
</script>


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

button {
  background-color: black;
  border-radius: 5px;
  padding: 5px;
  border: none;
  color: white;
  font-weight: bold;
}
li {
  list-style-type: none;
}
select {
  border-radius: 5px;
  border: 1px dotted black;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
a:active{
  color: #42b983;
}

</style>
