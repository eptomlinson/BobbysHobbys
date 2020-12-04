import React, { useState, useEffect } from "react";
import Card from "../../Card"
import Wrapper from "../../Wrapper/index";
import API from "../../../utils/API";
import Navbar from "../../Navbar";
const UserFavorites = (props) => {
// use the hobby id in the array to search for the hobbies in an API call
// do a map of all of them and find all 
console.log(props.isLoggedIn);

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

//   function componentRedirect(){
//   if(props.isLoggedIn){
//     props.toggle(props.isLoggedIn)
//   }
// }

  return (
    <>
    <Navbar toggle={props.toggle} isLoggedIn={true} />
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
    </>
  )
};

export default UserFavorites;