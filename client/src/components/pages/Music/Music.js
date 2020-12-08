import React, { useState, useEffect } from "react";
import Card from "../../Card";
import Wrapper from "../../Wrapper/index";
import API from "../../../utils/API";

const Music = () => {
  const [music, setMusic] = useState([]);
  const [favoriteHobbies, setFavoriteHobbies] = useState([]);

  useEffect(() => {
    loadMusic();
  }, []);

  function loadMusic() {
    API.getMusic()
      .then((resMusic) => {
        API.getUser()
          .then((resUser) => {
            setFavoriteHobbies(resUser.data.favoriteHobbies);
            setMusic(resMusic.data);
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
      <h1 style={{ color: "#fff", fontFamily: `'Bitter', serif` }}>Music</h1>
      <Wrapper>
        {music.map((hobby) => (
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

export default Music;
