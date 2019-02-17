<template>
  <div id="app">
    <div id="nav">
      <router-link tag="a" to="/">Home</router-link>
      <router-link tag="a" to="/showWeather"> Show Weather</router-link>
      <router-link tag="a" to="/about">About</router-link>
      <router-link tag="a" to="/contact">Contact</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  margin-bottom: 20px;
}

#nav a {
  margin: 3px;
  padding: 5px 10px;
  border: 1px solid #333;
  border-radius: 10px;
}
</style>
