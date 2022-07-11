import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://135.181.35.61:2112",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE2NTc1MDc4NTEsImV4cCI6MTY1ODExMjY1MX0.ayXhQ0QrQkmn0wZxbNBX9RqmD_VZ8GoclBYjPlbQMmI",
  },
});

export default axios;
