<template v-on:load="showWeather();">
  <div>
    <div id="weather">
      <h1 id="description">{{ description }}</h1>
      <h1 id="temp">{{ temp }}</h1>
      <button
        id="cel-button"
        class="ui button green"
        v-on:click="changeTemp(temp);"
      >
        C
      </button>
      <button
        id="faren-button"
        class="ui button blue"
        v-on:click="changeTemp(temp);"
      >
        F
      </button>
      <h3 id="location">{{ location }} {{ country }}</h3>
    </div>
    <div id="zip">
      <h2>Zip Code:</h2>
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
      zip: "",
      temp: ""
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
      const appid = "8bd333d4762ef5d6f7d19be0325fc401";
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${appid}`
      )
        .then(response => response.json())
        .then(data => {
          // Here's a list of repos!
          this.location = data.name;
          this.country = data.sys.country;
          this.description = data.weather[0].description.toUpperCase();
          // (K − 273.15) × 9/5 + 32 = °F
          this.temp = (((data.main.temp - 273.15) * 9) / 5 + 32).toFixed();
        });
    },
    changeTemp: temp => {
      var status = true;
      if (status) {
      }
      console.log(temp);
    }
  }
};
</script>

<style scoped>
#weather {
  background: #fff2ce;
  margin: 10px 100px;
  padding: 30px 10px;
  border: 4px solid #fce39f;
  border-radius: 25px;
}
</style>
