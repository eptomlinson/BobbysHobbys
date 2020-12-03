import React, {useState} from "react";
import "./style.css";
import favorite from "./favorite.png"
import redfavorite from "./redfavorite.png"
import API from "../../utils/API";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function FavoriteBtn(props) {
    const [state, setState] = useState(true);

    function toggle(event) {
        API.saveHobbyToFavorites({hobby_id: props.hobbyId})
        .then(resp => {
          console.log(resp)
            setState(!state);
          
        })
        .catch(error => {
          console.log(error);
        })
    }

   
  return (
    <div onClick={toggle} className="favorite-btn" {...props} role="button" tabIndex="0">
     {state ? <img style={{height: 60}} src={favorite}></img> : <img style={{height: 60}} src={redfavorite}></img>}
    </div>
    
  );
}



export default FavoriteBtn;