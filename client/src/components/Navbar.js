import React, {useState}from "react";
import PostModal from "./MakeAPost";
import API from "../utils/API";
import {handleLogoutUser} from "../components/Login/Login"

function Navbar(props) {
const [formObject, setFormObject] = useState({})

function handleInputChange(event) {
  const { name, value } = event.target;
  // console.log(name, value);
  setFormObject({...formObject, [name]: value})

};



function handleFormSubmit(event, image) {
  event.preventDefault();
  console.log(formObject, image);


    API.saveHobby({
      name: formObject.name,
      image: image,
      cost: formObject.cost,
      description: formObject.description,
      category: formObject.category
    })
      .catch(err => console.log(err));

    alert("Your post has been posted!");
    window.location.reload();
  
};

function handleClick(event){
  event.preventDefault();
  props.toggle();
  handleLogoutUser()
}
return (
<div className="pos-f-t">
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-dark p-4">
      <h4 className="text-white">Bobby's Hobbies</h4>
      <span className="text-muted">Your Leisure Liaison</span>
      <a className="nav-item nav-link active" href="/home">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="/">Login</a>
      <a className="nav-item nav-link" href="#">About</a>
      <a className="nav-item nav-link" href="#">Contact Us</a>
      <a className="nav-item nav-link" href="#">Logout</a>
    </div>
  </div>
  <nav className="navbar navbar-dark bg-dark">
  <button onClick={handleClick} type="button" class="btn btn-outline-primary">Logout</button>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="row">
    <a href="/favorites"><button style={{color:"red", size: 10}} className="btn">Favorites</button></a>
    <PostModal onChange={handleInputChange} submitPost={handleFormSubmit} />
    </div>
  </nav>
  <h1 style={{fontFamily: "Monaco", fontSize: "100px"}}>BOBBY'S HOBBIES</h1>
</div>
)
}
export default Navbar;