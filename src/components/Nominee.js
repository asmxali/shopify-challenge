import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import "../styles/Nominee.css";

function Nominee({ id, poster, title, yearReleased }) {
  const [{}, dispatch] = useStateValue();

  const refresh = () => {
    window.location.reload(false);
  };

  const removeFromNominees = () => {
    //dispatch item into data layer - push to state.nomineesList

    dispatch({
      type: "REMOVE_FROM_NOMINEES",
      item: {
        id: id,
        title: title,
        yearReleased: yearReleased,
        poster: poster,
      },
    });
    refresh();
  };

  return (
    <div className="nominee">
      <span className="nominee__image">
        <img src={poster}></img>{" "}
      </span>

      <div>
        <span className="nominee__title">
          <strong>{title}</strong>{" "}
        </span>
        <div className="nominee__yearReleased">({yearReleased}) </div>
        <div className="nominee__button">
          <button onClick={removeFromNominees}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default Nominee;
