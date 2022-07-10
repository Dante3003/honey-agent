import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://135.181.35.61:2112",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios;
