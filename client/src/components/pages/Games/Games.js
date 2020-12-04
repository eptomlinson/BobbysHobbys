import React, { useState, useEffect } from "react";
import Card from "../../Card"
import Wrapper from "../../Wrapper/index";
import API from "../../../utils/API";

const Games = () => {
  const [games, setGames] = useState([])


  useEffect(() => {
    loadGames()
  },[])

  function loadGames() {
    API.getGames()
      .then(res => 
        setGames(res.data)
      )
      .catch(err => console.log(err));

      console.log(games)
  };
  

  return (
    <div>
      <h1 style={{color: "#fff"}}>Games</h1>
      <Wrapper>
        {games.map(hobby => (
          <Card
            id={hobby._id}
            key={hobby._id}
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


export default Games;