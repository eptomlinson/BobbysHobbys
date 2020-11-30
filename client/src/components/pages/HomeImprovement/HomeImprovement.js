import React, { useState, useEffect } from "react";
import Card from "../../Card"
import Wrapper from "../../Wrapper/index";
import API from "../../../utils/API";

const HomeImprovement = () => {
  const [home, setHome] = useState([])

  useEffect(() => {
    loadHome()
  },[])

  function loadHome() {
    API.getHomeImprovement()
      .then(res => 
        setHome(res.data)
      )
      .catch(err => console.log(err));

      console.log(home)
  };
  
  return (
    <div>
      <h1>Home Improvement</h1>
      <Wrapper>
        {home.map(hobby => (
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

export default HomeImprovement;
