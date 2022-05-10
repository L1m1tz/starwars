<template>
  <div class="container">
    <i>{{ quote }}</i>
  </div>
  <!-- <h1>People</h1> -->
  <!-- <div v-for="quot in quote" :key="quote.id" class="quote">hello</div>
    <router-link :to="{ name: 'Jobdetails', params: { id: quote.id } }">
      <h2>{{ Job.title }}</h2>
    </router-link>
  </div> -->
</template>

<script>
//import axios from "axios";
import { ref } from "vue";
import Header from "./components/Header";
import StarWarsAPI from "./services/StarWarsAPI";
import Characters from "./components/Characters";

export default {
  setup() {
    const quote = ref("");

    const loadQuote = async () => {
      try {
        const response = await StarWarsAPI.getName();
        quote.value = response.data.results;
      } catch (err) {
        console.log(err);
      }
    };

    loadQuote();
    return {
      quote,
    };
  },
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
