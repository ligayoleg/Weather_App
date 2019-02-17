<template v-on:load="showWeather();">
  <div>
    <div id="weather">
      <h1>{{ description }}</h1>
      <p>{{ location }} {{ country }}</p>
    </div>
    <div id="zip">
      <h3>Zip Code:</h3>
      <div class="ui input" id="zip-div">
        <input
          type="text"
          placeholder="Zip code"
          id="zip-input"
          v-model="zip"
        />

        <button
          class="ui button teal"
          id="submit-button"
          v-on:click="fetchData(zip);"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowWeather",
  data() {
    return {
      location: "",
      country: "",
      description: "",
      zip: ""
    };
  },
  methods: {
    //function to accept zip and show proper weather
    showWeather: function(zip) {
      console.log(zip);
    },
    // Show weather from API
    fetchData: function(zip) {
      //console.log("fetched!");
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?zip=" +
          zip +
          ",us&appid=8bd333d4762ef5d6f7d19be0325fc401"
      )
        .then(response => response.json())
        .then(data => {
          // Here's a list of repos!
          this.location = data.name;
          this.country = data.sys.country;
          this.description = data.weather[0].description;
          console.log(this.description);
        });
    }
  }
};
</script>

<style scoped>
#weather {
  margin: 10px;
  border: 1px solid #333;
}
</style>
