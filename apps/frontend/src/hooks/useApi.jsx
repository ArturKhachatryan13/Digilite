import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030",
  headers: {
    "Content-Type": "application/json",
  },
});

export const useApi = () => {
  const get = async (url, config = {}) => {
    const { query = {}, ...rest } = config;
    const response = await api.get(url, {
      ...rest,
      params: query,
    });
    return response.data;
  };

  const post = async (url, data, config = {}) => {
    const response = await api.post(url, data, config);
    return response.data;
  };

  const put = async (url, data, config = {}) => {
    const response = await api.put(url, data, config);
    return response.data;
  };

  const del = async (url, config = {}) => {
    const response = await api.delete(url, config);
    return response.data;
  };
  const patch = async (url, config = {}) => {
    const response = await api.patch(url, config);
    return response.data;
  };
  return { get, post, put, del, patch };
};
