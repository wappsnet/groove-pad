import axios from 'axios';

export const MKApi = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

MKApi.interceptors.request.use(
  async (config) => config,
  (error) => {
    throw error;
  },
);

MKApi.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  },
);
