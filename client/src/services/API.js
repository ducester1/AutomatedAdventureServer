import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `http://localhost:3000/` // the url of our server
    //baseURL: `https://automated-adventure.herokuapp.com/#/`
  });
};
