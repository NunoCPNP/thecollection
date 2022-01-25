import axios from "axios";

const axiosAPI = axios.create({
  baseURL : "https://api.discogs.com"
});

const apiRequest = (method, url, request) => {
    const headers = {};
    
    return axiosAPI({
        method,
        url,
        data: request,
        headers
      }).then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
};

const get = (url, request) => apiRequest("get",url,request);

const API = { get };

export default API;