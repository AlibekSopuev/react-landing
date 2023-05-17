import axios from 'axios';

const instance = axios.create({
  headers: { Accept: 'application/json' },
  baseURL: '/',
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  async function (error) {
    // Do something with request error
    return await Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // if (response.status === 301) {
    //   if (response.headers.location != null) {
    //     window.location.href = response.headers.location;
    //   }
    // }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return await Promise.reject(error);
  },
);

export default instance;
