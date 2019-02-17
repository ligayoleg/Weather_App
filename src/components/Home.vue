<template>
  <div class="hello">
    <h1>{{ getDate() }}</h1>
    <div class="ui input focus"></div>
  </div>
</template>

<script>
export default {
  name: "home",

  data() {
    return {
      msg: ""
    };
  },

  methods: {
    // function to get a date and create a greeting!
    getDate() {
      const today = new Date();
      let time;
      if (today.getHours() >= 0 && today.getHours() < 5) {
        time = "Good Night!";
      } else if (today.getHours() >= 5 && today.getHours() < 12) {
        time = "Good morning";
      } else if (today.getHours() >= 12 && today.getHours() < 17) {
        time = "Good afternoon";
      } else if (today.getHours() >= 17 && today.getHours() < 22) {
        time = "Good evening";
      } else {
        time = "Good night!";
      }
      return time;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#button {
  margin: 5px;
}
</style>
