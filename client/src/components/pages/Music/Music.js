import React, { Component } from "react";
import Card from "../../Card"
import Wrapper from "../../Wrapper";
import music from "./music.json"

// const Music = () => (
//   <div>
//     <h1>Music</h1>
//     <p>
// Guitar, Write a song, concerts, music history and theory
//     </p>
//   </div>
// );

class Music extends Component {

  state = {
    music
  };

  render() {
return (
  <div>
  <h1>Music</h1>
    <Wrapper>
      {music.map(hobby=> (
        <Card
          id={hobby.id}
          key={hobby.id}
          name={hobby.name}
          image={hobby.image}
          cost={hobby.cost}
          description={hobby.description}
        />
        ))}
   
        </Wrapper>
        </div>
    ) }
          }

export default Music;
