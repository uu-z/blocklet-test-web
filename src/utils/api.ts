import { axios } from "./axios";
export const api = {
  async search({ query }) {
    const res = await axios.request({
      url: "/forge/search",
      params: {
        query,
      },
    });
    return res.data;
  },
};
