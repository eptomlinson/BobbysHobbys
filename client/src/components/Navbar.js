import React, {useState}from "react";
import PostModal from "./MakeAPost";
import API from "../utils/API";
import {handleLogoutUser} from "../components/Login/Login"
import transparentBobby from "./transparentbobby.PNG"
import transparentOrange from "./transparentorange.PNG"

function Navbar(props) {
const styles = {backgroundColor: "#403F4C"}
const buttonStyle = {backgroundColor: "#D9D4D5"}

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
  <button onClick={handleClick} type="button" class="btn btn-outline-primary">Logout</button>
    <button style={buttonStyle} align="center" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
    <img style={{ alignSelf: 'center' }} style={{height:50}} src={transparentOrange}></img>
      <span className="navbar-toggler-icon"><div style={{fontSize:20}}>Navbar</div></span>
    </button>
    <div className="row">
    <a href="/favorites"><button style={{color:"red", size: 10}} className="btn">Favorites</button></a>
    <PostModal onChange={handleInputChange} submitPost={handleFormSubmit} />
    </div>
  </nav>

  <img style={{height:400}} src={transparentBobby}></img>

</div>
)
}
export default Navbar;