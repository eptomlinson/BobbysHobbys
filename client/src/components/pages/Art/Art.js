import React, { Component } from "react";
import Card from "../../Card"
import Wrapper from "../../Wrapper";
import art from "./art.json"

class Art extends Component {

  state = {
    art
  };

  render() {
return (
    <div>
      <h1>Art</h1>
      {art.map(hobby=> (
        <Card
          id={hobby.id}
          key={hobby.id}
          name={hobby.name}
          image={hobby.image}
          cost={hobby.cost}
          description={hobby.description}
        />
      ))}
    </div>

) }
      }
    


export default Art;
