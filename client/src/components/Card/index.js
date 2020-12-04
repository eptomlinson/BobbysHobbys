import React from "react";
import Wrapper from "../Wrapper";
import FavoriteBtn from "../Favorite-Btn"
import "./style.css";

function Card(props) {

//   function addToFavorites {

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
       
          < FavoriteBtn hobbyId={props.id} favorited={props.favorited} />
         
        </ul>
       
      </div>
    </div>
    </Wrapper>
  );
}

export default Card;