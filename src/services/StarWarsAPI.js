import API from "./API";

export default {
  getAll() {
    return API().get("https://swapi.dev/api/");
  },
  getPeople() {
    return API().get("https://swapi.dev/api/people");
  },
  getSpecies() {
    return API().get("https://swapi.dev/api/species");
  },
  getHomeWorld() {
    return API().get("https://swapi.dev/api/planets");
  },
  getStarships() {
    return API().get("https://swapi.dev/api/starships");
  },
  
};
