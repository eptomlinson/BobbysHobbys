import React from "react";
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

class Art extends Component {

  state = {
    music
  };

  render() {
return (
    <div>
      <h1>Music</h1>
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
    </div>

) }
      }

export default Music;
