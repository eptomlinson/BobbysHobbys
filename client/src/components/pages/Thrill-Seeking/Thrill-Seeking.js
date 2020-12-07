import React, { useState, useEffect } from "react";
import Card from "../../Card"
import Wrapper from "../../Wrapper/index";
import API from "../../../utils/API";

const ThrillSeeking = () => {
  const [thrillSeeking, setThrillSeeking] = useState([])
  const [favoriteHobbies,  setFavoriteHobbies] = useState([])


  useEffect(() => {
    loadThrillSeeking()
  },[])

  function loadThrillSeeking() {
    API.getThrillSeeking()
      .then(resThrill => {
        API.getUser()
        .then(resUser => {
          setFavoriteHobbies(resUser.data.favoriteHobbies)
          setThrillSeeking(resThrill.data)
        })
        .catch(err => console.log(err));
  })
      .catch(err => console.log(err));
  };
  
 const isHobbyInFavorites = (hobby) =>  {
   return favoriteHobbies.find((favHobby) => hobby._id === favHobby._id ); 
 }

  return (
    <div>
      <h1 style={{color: "#fff"}}>Thrill Seeking</h1>
      <Wrapper>
        {thrillSeeking.map(hobby => (
          <Card
          favorited={isHobbyInFavorites(hobby)}
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


export default ThrillSeeking;