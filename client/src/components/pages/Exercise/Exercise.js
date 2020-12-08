import React, { useState, useEffect } from "react";
import Card from "../../Card";
import Wrapper from "../../Wrapper/index";
import API from "../../../utils/API";

const Exercise = () => {
  const [exercise, setExercise] = useState([]);
  const [favoriteHobbies, setFavoriteHobbies] = useState([]);

  useEffect(() => {
    loadExercise();
  }, []);

  function loadExercise() {
    API.getExercise()
      .then((resExercise) => {
        API.getUser()
          .then((resUser) => {
            setFavoriteHobbies(resUser.data.favoriteHobbies);
            setExercise(resExercise.data);
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
      <h1 style={{ color: "#fff", fontFamily: `'Bitter', serif` }}>Exercise</h1>
      <Wrapper>
        {exercise.map((hobby) => (
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

export default Exercise;
