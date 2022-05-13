<template>
  <main class="main">
    <section class="container" v-if="people.length === 0">
      <p>Loading...</p>
    </section>
    <section class="container" v-else>
      <div class="person" v-for="person in people" v-bind:key="person.name">
        <article>
          <p>Name: {{ person.name }}</p>
          <p>Gender: {{ person.gender }}</p>
          <p>Species: {{ person.species }}</p>
          <p>Home World: {{ person.homeworld }}</p>
          <p>Starships: {{ person.starships }}</p>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
//import { ref } from "vue";
import axios from "axios";
import StarWarsAPI from "./services/StarWarsAPI";
//import Characters from "./components/Characters";

export default {
  data() {
    return {
      people: [],
      species: [],
      homeworld: [],
      starships: [],
    };
  },
  methods: {
    getPeople() {
      StarWarsAPI.getPeople().then((res) => {
        this.people = res.data.results;
      });
      StarWarsAPI.getSpecies().then((res) => {
        this.species = res.data.results;
      });
      StarWarsAPI.getHomeWorld().then((res) => {
        this.homeworld = res.data.results;
      });
      StarWarsAPI.getStarships().then((res) => {
        this.starships = res.data.results;
      });
    },
  },
  mounted() {
    this.getPeople();
  },
};
</script>

<style>
@import url("assets/style.css");
</style>
