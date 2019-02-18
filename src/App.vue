<template>
  <div id="app">
    <div id="nav">
      <router-link tag="a" to="/showWeather" class="ui button olive">
        Show Weather</router-link
      >
      <router-link tag="a" to="/about" class="ui button olive"
        >About</router-link
      >
      <router-link tag="a" to="/contact" class="ui button olive"
        >Contact</router-link
      >
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
  padding: 10px;
  border-radius: 5px;
}
</style>
