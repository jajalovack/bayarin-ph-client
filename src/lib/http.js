import axios from "axios";

function http(options = {}) {
  const http = axios.create({
    baseURL: import.meta.env.VITE_API,
    headers: {
      ...options,
    },
  });
  return http;
}

export default http;
