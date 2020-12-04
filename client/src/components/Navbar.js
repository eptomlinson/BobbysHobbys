import React, {useState}from "react";
import PostModal from "./MakeAPost";
import API from "../utils/API";
import {handleLogoutUser} from "../components/Login/Login"
import transparentBobby from "./transparentbobby.PNG"
import transparentOrange from "./transparentorange.PNG"
import whiteorangetransparent from "./whiteorangetransparent.PNG"
import bobbyround from "./bobbyround.PNG"


function Navbar(props) {
const styles = {backgroundColor: "#141414", boxShadow:" 0px 0px 10px 0px #000"}
const buttonStyle = {backgroundColor: "#141414"}


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

    // alert("Your post has been posted!");
    // window.location.reload();
  
};

function handleClick(event){
  event.preventDefault();
  props.toggle();
  handleLogoutUser()
}
return (
<div className="pos-f-t">
  <div className="collapse" id="navbarToggleExternalContent">
    <div style={styles} className="p-4">
      <h4 className="text-white">Bobby's Hobbies</h4>
      <span className="text-muted">Your Leisure Liaison</span>
      <a className="nav-item nav-link active" href="/home">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="/">Login</a>
    </div>
  </div>
  <nav style={styles} className="navbar">
    <button style={buttonStyle} align="center" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
    <img style={{ alignSelf: 'center' }} style={{height:50}} src={whiteorangetransparent}></img>
      <span className="navbar-toggler-icon"><div style={{fontSize:20}}>^</div></span>
    </button>
    <div className="row">
    <a href="/favorites"><button style={{color:"red", size: 10}} className="btn">Favorites</button></a>
    <PostModal onChange={handleInputChange} submitPost={handleFormSubmit} />
    <button onClick={handleClick} type="button" class="btn btn-outline-light btn-space" >Logout</button>
    </div>
  </nav>

  <img style={{height:400}} src={bobbyround}></img>

</div>
)
}
export default Navbar;