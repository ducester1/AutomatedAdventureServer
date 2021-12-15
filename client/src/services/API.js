import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `https://automated-adventure.herokuapp.com/` // the url of our server
  });
};
