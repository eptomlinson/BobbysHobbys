import React, { Component } from "react";
import Card from "../../Card"
import Wrapper from "../../Wrapper/index";
import games from "./games.json"

const Games = () => {
  const [gamesState, setGamesState] = React.useState(games)
  return (
  <div>
    <h1>Board and Tabletop Games</h1>
    <p>
different board games, chess, checkers, etc
    </p>
  </div>
  )
  };



// class Games extends Component {

//   state = {
//     games
//   };

//   render() {
// return (
//   <div>
//      <h1>Games</h1>
//     <Wrapper>
//       {games.map(hobby=> (
//         <Card
//           id={hobby.id}
//           key={hobby.id}
//           name={hobby.name}
//           image={hobby.image}
//           cost={hobby.cost}
//           description={hobby.description}
//         />
//         ))}
   
//         </Wrapper>
//         </div>
//     ) }
//           }

export default Games;