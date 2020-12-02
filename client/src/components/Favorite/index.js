import React, {useState} from "react";
import "./style.css";
import favorite from "./favorite.png"
import redfavorite from "./redfavorite.png"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function FavoriteBtn(props) {
    const [state, setState] = useState(true);

    function toggle() {
      setState(!state);
    }

   
  return (
    <div onClick={toggle} className="favorite-btn" {...props} role="button" tabIndex="0">
     {state ? <img style={{height: 60}} src={favorite}></img> : <img style={{height: 60}} src={redfavorite}></img>}
    </div>
    
  );
}



export default FavoriteBtn;