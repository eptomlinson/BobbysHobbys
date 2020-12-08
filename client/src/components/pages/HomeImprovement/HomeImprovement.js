import React, { useState, useEffect } from "react";
import Card from "../../Card";
import Wrapper from "../../Wrapper/index";
import API from "../../../utils/API";

const HomeImprovement = () => {
  const [home, setHome] = useState([]);
  const [favoriteHobbies, setFavoriteHobbies] = useState([]);

  useEffect(() => {
    loadHome();
  }, []);

  function loadHome() {
    API.getHomeImprovement()
      .then((resHome) => {
        API.getUser()
          .then((resUser) => {
            setFavoriteHobbies(resUser.data.favoriteHobbies);
            setHome(resHome.data);
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
      <h1 style={{ color: "#fff", fontFamily: `'Bitter', serif` }}>
        Home Improvement
      </h1>
      <Wrapper>
        {home.map((hobby) => (
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

export default HomeImprovement;
