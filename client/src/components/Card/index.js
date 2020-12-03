import React from "react";
import Wrapper from "../Wrapper";
import FavoriteBtn from "../Favorite"
import "./style.css";

function Card(props) {

// function favoriteHobby(id){
//   API.saveHobbyToFavorite(id)

//   //change the color of the favoriteBTN to red.

// }


  return (
      <Wrapper>
    <div className="card">
      <div className="img-container">
       
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Cost:</strong> {props.cost}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
       
          < FavoriteBtn hobbyId={props.id} />
         
        </ul>
       
      </div>
    </div>
    </Wrapper>
  );
}

export default Card;