import React, { useState, useEffect } from "react";
import Card from "../../Card"
import Wrapper from "../../Wrapper/index";
import API from "../../../utils/API";

const Outdoors = () => {
  const [outdoors, setOutdoors] = useState([])

  useEffect(() => {
    loadOutdoors()
  },[])

  function loadOutdoors() {
    API.getOutdoors()
      .then(res => 
        setOutdoors(res.data)
      )
      .catch(err => console.log(err));
  };
  
  return (
    <div>
      <h1>Outdoors</h1>
      <Wrapper>
        {outdoors.map(hobby => (
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

export default Outdoors;