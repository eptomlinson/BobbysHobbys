import React, { useState, useEffect } from "react";
import Card from "../../Card"
import Wrapper from "../../Wrapper/index";
import API from "../../../utils/API";

const Entertainment = () => {
  const [entertainment, setEntertainment] = useState([])


  useEffect(() => {
    loadEntertainment()
  },[])

  function loadEntertainment() {
    API.getEntertainment()
      .then(res => 
        setEntertainment(res.data)
      )
      .catch(err => console.log(err));
  };
  

  return (
    <div>
      <h1>Entertainment</h1>
      <Wrapper>
        {entertainment.map(hobby => (
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


export default Entertainment;