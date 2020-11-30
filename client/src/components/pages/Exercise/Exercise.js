import React, { useState, useEffect } from "react";
import Card from "../../Card"
import Wrapper from "../../Wrapper/index";
import API from "../../../utils/API";

const Exercise = () => {
  const [exercise, setExercise] = useState([])


  useEffect(() => {
    loadExercise()
  },[])

  function loadExercise() {
    API.getExercise()
      .then(res => 
        setExercise(res.data)
      )
      .catch(err => console.log(err));
  };
  

  return (
    <div>
      <h1>Exercise</h1>
      <Wrapper>
        {exercise.map(hobby => (
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


export default Exercise;