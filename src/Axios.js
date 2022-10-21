import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://api.quotable.io",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default axios;
