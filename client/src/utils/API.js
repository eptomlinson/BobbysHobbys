import axios from "axios";

const API = {
  // Gets all books
  getHobbies: function() {
    return axios.get("/api/hobbies");
  },
  getArt: function() {
    return axios.get("/api/hobbies?category=art");
  },
  getCooking: function() {
    return axios.get("/api/hobbies?category=cooking");
  },
  getEntertainment: function() {
    return axios.get("/api/hobbies?category=entertainment");
  },
  getExercise: function() {
    return axios.get("/api/hobbies?category=exercise");
  },
  getGames: function() {
    return axios.get("/api/hobbies?category=games");
  },
  getHomeImprovement: function() {
    return axios.get("/api/hobbies?category=homeimprovement");
  },
  getMusic: function() {
    return axios.get("/api/hobbies?category=music");
  },
  getOutdoors: function() {
    return axios.get("/api/hobbies?category=outdoors");
  },
  getThrillSeeking: function() {
    return axios.get("/api/hobbies?category=thrillseeking");
  },
  // Gets the book with the given id
  getHobby: function(id) {
    return axios.get("/api/hobbies/" + id);
  },
  // Deletes the book with the given id
  deleteHobby: function(id) {
    return axios.delete("/api/hobbies/" + id);
  },
  // Saves a book to the database
  saveHobby: function(hobbyData) {
    console.log(hobbyData);
    return axios.post("/api/hobbies", hobbyData);
  }
};


export default API;