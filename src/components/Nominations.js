import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import "../styles/Nominations.css";
import Movie from "./Movie";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { db } from "../firebase";
import Nominee from "./Nominee";
function Nominations() {
  const [{ nomineeList }, dispatch] = useStateValue();

  const nomineeTitleOptions = () => {
    if (nomineeList.length == 0)
      return <span>Looks like you don't have any nominations yet 😅</span>;
    if (nomineeList.length > 1)
      return `You have ${nomineeList.length} Nominations`;
    else return `You have ${nomineeList.length} Nomination`;
  };
  return (
    <div className="nominations">
      {nomineeList.length >= 5 && (
        <div className="nominations__notification">
          <div className="nominations_errorIcon">
            <ErrorOutlineIcon fontSize="large"></ErrorOutlineIcon>
          </div>
          <span className="nominations_errorMessage">
            <strong>Maximum Limit of 5 Nominations Reached</strong>
            <small>
              {" "}
              (please remove a movie from your nominations before continuing to
              nominate)
            </small>
          </span>
        </div>
      )}
      <h3 className="nominations__title">{nomineeTitleOptions()}</h3>
      <div className="nominations__container">
        {nomineeList?.map(({ id, title, yearReleased, poster }) => (
          <Nominee
            id={id}
            title={title}
            yearReleased={yearReleased}
            poster={poster}
          ></Nominee>
        ))}
      </div>
    </div>
  );
}

export default Nominations;
