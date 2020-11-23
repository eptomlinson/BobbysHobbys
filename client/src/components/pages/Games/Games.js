import React from "react";
import Card from "../../Card"
import Wrapper from "../../Wrapper";
import games from "./games.json"

// const Games = () => (
//   <div>
//     <h1>Board and Tabletop Games</h1>
//     <p>
// different board games, chess, checkers, etc
//     </p>
//   </div>
// );



class Art extends Component {

  state = {
    games
  };

  render() {
return (
    <div>
      <h1>Games</h1>
      {games.map(hobby=> (
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

export default Games;