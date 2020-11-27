import axios from "axios";

const API = {
  // Gets all books
  getHobbies: function() {
    return axios.get("/api/hobbies");
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
    return axios.post("/api/hobbies", hobbyData);
  }
};


export default API;