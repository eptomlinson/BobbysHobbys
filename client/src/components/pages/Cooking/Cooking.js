import React, { useState, useEffect } from "react";
import Card from "../../Card"
import Wrapper from "../../Wrapper/index";
import API from "../../../utils/API";

const Cooking = () => {
  const [cooking, setCooking] = useState([])


  useEffect(() => {
    loadCooking()
  },[])

  function loadCooking() {
    API.getCooking()
      .then(res => 
        setCooking(res.data)
      )
      .catch(err => console.log(err));
  };
  

  return (
    <div>
      <h1>Cooking</h1>
      <Wrapper>
        {cooking.map(hobby => (
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


export default Cooking;