<template>
  <div class="container">
    <div v-if="people.length === 0">
      <p>Loading...</p>
    </div>
    <div v-else>

        <div style="margin: 5px;" v-for="person in people">
          {{ person.name }}
          {{ person.homeworld }}
        </div>

    </div>
  </div>
</template>

<script>
//import { ref } from "vue";
import axios from "axios";
// import StarWarsAPI from "./services/StarWarsAPI";
//import Characters from "./components/Characters";

export default {
  data() {
    return {
      people: [],
    };
  },
  methods: {
    getPeople() {
      console.log('about to request');
      axios.get("https://swapi.dev/api/people").then((res) => {
        console.log('response received');
        console.log(res);
        this.people = res.data.results
        });
        console.log('finished making request');
    },
  },
  mounted() {
    console.log("setup starting");
    this.getPeople();
    console.log("setup done");
  },
  //setup() {
  //   const quote = ref("");

  //   StarWarsAPI.getName()
  //     .then((response) => {
  //       // handle response
  //       quote.value = response.data.results;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   return {
  //     quote,
  //   };
  // },

  // components: {
  //   Header,
  //   Profiles,
  //   Characters,
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
