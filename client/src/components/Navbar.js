import React, {useState}from "react";
import PostModal from "./MakeAPost";
import API from "../utils/API";
import {handleLogoutUser} from "../components/Login/Login"

function Navbar(props) {
const [formObject, setFormObject] = useState({})

function handleInputChange(event) {
  const { name, value } = event.target;
  setFormObject({...formObject, [name]: value})
};

function handleFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.stringify(formObject));

    API.saveHobby({
      name: formObject.name,
      image: formObject.image,
      cost: formObject.cost,
      description: formObject.description,
      category: formObject.category
    })
      .catch(err => console.log(err));

  console.log("saveHobby went through")
};

return (
<div className="pos-f-t">
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-dark p-4">
      <h4 className="text-white">Bobby's Hobbies</h4>
      <span className="text-muted">Your Leisure Liaison</span>
      <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="/">Login</a>
      <a className="nav-item nav-link" href="#">About</a>
      <a className="nav-item nav-link" href="#">Contact Us</a>
      <a className="nav-item nav-link" href="#">Logout</a>
    </div>
  </div>
  <nav className="navbar navbar-dark bg-dark">
  <button onClick={handleLogoutUser} type="button" class="btn btn-outline-primary">Logout</button>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <PostModal onChange={handleInputChange} submitPost={handleFormSubmit}/>
  </nav>
  <h1 style={{fontFamily: "Monaco", fontSize: "100px"}}>BOBBY'S HOBBIES</h1>
</div>
)
}
export default Navbar;