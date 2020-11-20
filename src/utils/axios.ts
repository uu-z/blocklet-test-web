import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "https://blocklet-example-server.herokuapp.com" : "http://localhost:3000",
});
