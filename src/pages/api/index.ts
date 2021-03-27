import axios from "axios";

const api = axios.create({
  baseURL: "http://hp-api.herokuapp.com/api/",
});

export default api;

//http://hp-api.herokuapp.com/api/characters/students
//http://hp-api.herokuapp.com/api/characters/staff
//http://hp-api.herokuapp.com/api/characters/house/:house
