import React, { useState, useEffect } from "react";
import Card from "../../Card"
import Wrapper from "../../Wrapper/index";
import API from "../../../utils/API";

const Art = () => {
  const [art, setArt] = useState([])
  const [favoriteHobbies, setFavoriteHobbies] = useState([]);

  useEffect(() => {
    loadArt()
  }, [])

  // note: if you are running this locally, it loads quite slowly
  function loadArt() {
    API.getArt()
      .then(resArt => {
        API.getUser()
          .then(resUser => {
            setFavoriteHobbies(resUser.data.favoriteHobbies);
            setArt(resArt.data) // cause render
          })
          .catch(err => console.log(err));
        })
      .catch (err => console.log(err));
  };


  /**
   * Returns true if hobby is in favoriteHobbies, undefined othwerwise.
   * @param {*} hobby 
   */
  const isHobbyInFavorites = (hobby) =>  {
    return favoriteHobbies.find((favHobby) => hobby._id === favHobby._id ); 
  }


return (
  <div>
    <h1 style={{ color: "#fff", fontFamily: `'Bitter', serif`}}>Art </h1>
    <Wrapper>
      {art.map(hobby => (
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


export default Art;