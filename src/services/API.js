import axios from "axios";
export default (url = "https://swapi.dev/api") => {
  return axios.create({
    base: url,
  });
};
