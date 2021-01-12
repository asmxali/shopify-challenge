import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import "../styles/Movies.css";
import Movie from "./Movie";
import Carousel from "react-elastic-carousel";
import Item from "react-elastic-carousel";
import Search from "./Search";

function Movies() {
  const [{ nomineesList, moviesList }] = useStateValue();
  // const [disabled, setDisabled] = useState();
  const [currentNominees, setCurrentNominees] = useState();

  useEffect(() => {
    // setDisabled(false);
    setCurrentNominees(JSON.parse(localStorage.getItem("list")));
  }, [nomineesList]);

  const checkDisabledValue = (imdbID) => {
    if (currentNominees) {
      for (let nominee of currentNominees) {
        // console.log("movie component id:", imdbID);
        // console.log("nominee component id:", nominee.id);
        if (imdbID === nominee.id) {
          // console.log(nominee.title, "found match");
          return true;
        }
      }
    }
    return false;
  };

  return (
    <div className="movies">
      {/* <h3 className="movies__title">Movies</h3> */}
      <Search></Search>
      <div className="movies__container">
        {moviesList.length > 0 && (
          <Carousel itemsToShow={6}>
            {
              // if the moviesList id has the same id value as nomineesList then set nominated to true

              moviesList?.map(({ imdbID, Title, Year, Poster }) => {
                return (
                  <Movie
                    id={imdbID}
                    title={Title}
                    yearReleased={Year}
                    poster={Poster}
                    disabled={checkDisabledValue(imdbID)}
                  ></Movie>
                );
              })
            }
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default Movies;
