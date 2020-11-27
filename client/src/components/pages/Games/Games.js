import React, { useState, useEffect } from "react";
import Card from "../../Card"
import Wrapper from "../../Wrapper/index";
import API from "../../../utils/API";

const Games = () => {
  const [games, setGames] = useState([])
  
  function loadHobbies() {
    API.getHobbies()
      .then(res => 
        setGames(res.data)
      )
      .catch(err => console.log(err));

      console.log(games)
  };


  useEffect(() => {loadHobbies()}, [])

  


  return (
    <div>
      <h1>Games</h1>
      <Wrapper>
        {games.map(hobby => (
          <Card
            id={hobby}
            key={hobby.id}
            name={hobby.name}
            image={hobby.image}
            cost={hobby.cost}
            description={hobby.description}
          />
        ))}

      </Wrapper>
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