import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import "../styles/Movie.css";

function Movie({ id, poster, title, yearReleased, disabled }) {
  const [{ nomineeList, moviesList }, dispatch] = useStateValue();
  let [disable, setDisable] = useState();
  let [nominated, setNominated] = useState();

  useEffect(() => {
    setDisable(disabled);
  });

  const addToNominees = () => {
    if (nomineeList.length < 5) {
      dispatch({
        type: "ADD_TO_NOMINEES",
        item: {
          id: id,
          title: title,
          yearReleased: yearReleased,
          poster: poster,
        },
      });
      setNominated(true);
      window.location.reload(false);
    }
  };

  return (
    <div className="movie">
      <span className="movie__image">
        <img src={poster}></img>{" "}
      </span>

      <div>
        <span className="movie__title">
          <strong>{title}</strong>{" "}
        </span>
        <div className="movie__yearReleased">({yearReleased}) </div>
        <div className="movie__button">
          {nominated ? (
            <button onClick={addToNominees} disabled={nominated}>
              Nominate
            </button>
          ) : (
            <button onClick={addToNominees} disabled={disable}>
              Nominate
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Movie;
