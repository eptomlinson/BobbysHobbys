import React, { useState, useEffect } from "react";
import Card from "../../Card";
import Wrapper from "../../Wrapper/index";
import API from "../../../utils/API";

const Cooking = () => {
  const [cooking, setCooking] = useState([]);
  const [favoriteHobbies, setFavoriteHobbies] = useState([]);

  useEffect(() => {
    loadCooking();
  }, []);

  function loadCooking() {
    API.getCooking()
      .then((resCooking) => {
        API.getUser()
          .then((resUser) => {
            setFavoriteHobbies(resUser.data.favoriteHobbies);
            setCooking(resCooking.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  const isHobbyInFavorites = (hobby) => {
    return favoriteHobbies.find((favHobby) => hobby._id === favHobby._id);
  };

  return (
    <div>
      <h1 style={{ color: "#fff", fontFamily: `'Bitter', serif` }}>Cooking</h1>
      <Wrapper>
        {cooking.map((hobby) => (
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
  );
};

export default Cooking;
