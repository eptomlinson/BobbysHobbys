import React, {useState} from "react";
import "./style.css";
import favorite from "./favorite.png"
import redfavorite from "./redfavorite.png"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function FavoriteBtn(props) {
    const [isfavorite, toggleIsOn] = useState();
    // function changePicture()
    //  var favoriteBtn = document.querySelector("favorite-btn")
    //  favoriteBtn.setAttribute("className", "clicked")
    // }

   
  return (
    <>
    {/* {isfavorite ? favorite : redfavorite} */}
    <div onClick={toggleIsOn} className="favorite-btn" {...props} role="button" tabIndex="0">
      <img style={{height: 60}} src={favorite}></img>
    </div>
    </>
  );
}


// const [isfavorite, toggleIsOn] = useToggle();
// return (
//   <>
//     {isfavorite ? src={favorite} : src={redfavorite}}
//     <button onClick={toggleIsOn}>
//       Press me
//     </button>
//   </>
// )



export default FavoriteBtn;