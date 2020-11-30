import React, { useState, useEffect } from "react";
import Card from "../../Card"
import Wrapper from "../../Wrapper/index";
import API from "../../../utils/API";

const Art = () => {
  const [art, setArt] = useState([])


  useEffect(() => {
    loadArt()
  },[])

  function loadArt() {
    API.getArt()
      .then(res => 
        setArt(res.data)
      )
      .catch(err => console.log(err));
  };
  

  return (
    <div>
      <h1>Art</h1>
      <Wrapper>
        {art.map(hobby => (
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


export default Art;