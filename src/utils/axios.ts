import Axios from "axios";

Axios.defaults.timeout = 200000;

Axios.interceptors.request.use((config) => {
  //@ts-ignore
  const prefix = window.blocklet ? window.blocklet.prefix : window.env.apiPrefix;
  config.baseURL = prefix || '';

  return config;
});

export const axios = Axios.create();
