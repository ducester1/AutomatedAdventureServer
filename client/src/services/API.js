import axios from "axios";

export default () => {
  return axios.create({
    //baseURL: `http://localhost:3000/` // the url of our server
    baseURL: process.env.API_URL
  });
};
