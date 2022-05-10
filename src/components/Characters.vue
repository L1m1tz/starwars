<template>
  <div class="container">
    
  </div>
</template>

<script>
//import axios from "axios";
import { ref } from "vue";

//import StarWarsAPI from "./services/StarWarsAPI";

export default {
  setup() {
    const quote = ref("");

    const loadQuote = async () => {
      const response = await StarWarsAPI.getData();
      quote.value = response;
    };
    loadQuote();
    return {
      quote
    };
  },
 
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
