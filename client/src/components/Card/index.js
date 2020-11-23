import React from "react";
import Wrapper from "../Wrapper";
import "./style.css";

function Card(props) {
    console.log(props)
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
        </ul>
      </div>
    </div>
    </Wrapper>
  );
}

export default Card;