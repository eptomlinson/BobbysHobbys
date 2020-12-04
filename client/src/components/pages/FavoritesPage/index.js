import React, { useState, useEffect } from "react";
import Card from "../../Card"
import Wrapper from "../../Wrapper/index";
import API from "../../../utils/API";

const UserFavorites = () => {
// use the hobby id in the array to search for the hobbies in an API call
// do a map of all of them and find all 

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    loadFavorites()
  },[])

  function loadFavorites() {
    API.getUser()
      .then(res => {
        console.log(res);
        setFavorites(res.data.favoriteHobbies);
        // this will probably not be res.data...
      })
      .catch(err => console.log(err));
        console.log(favorites)
  };
  
  return (
    <div>
      <h1 style={{color: "#fff"}}>Your Favorites</h1>
      <Wrapper>
        {favorites.map(hobby => (
          <Card
            id={hobby._id}
            key={hobby._id}
            name={hobby.name}
            image={hobby.image}
            cost={hobby.cost}
            description={hobby.description}
            favorited={true}
          />
        ))}

      </Wrapper>
    </div>
  )
};

export default UserFavorites;