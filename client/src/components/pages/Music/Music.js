import React, { useState, useEffect } from "react";
import Card from "../../Card"
import Wrapper from "../../Wrapper/index";
import API from "../../../utils/API";

const Music = () => {
  const [music, setMusic] = useState([])

  useEffect(() => {
    loadMusic()
  },[])

  function loadMusic() {
    API.getMusic()
      .then(res => 
        setMusic(res.data)
      )
      .catch(err => console.log(err));

      console.log(music)
  };
  
  return (
    <div>
      <h1 style={{color: "#fff"}}>Music</h1>
      <Wrapper>
        {music.map(hobby => (
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

export default Music;