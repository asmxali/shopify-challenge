import React from "react";
import "../styles/Search.css";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "../StateProvider";
import axios from "axios";
import { useState, useEffect } from "react";
const apiURL = "https://www.omdbapi.com/?i=tt3896198&apikey=a59247e6";

function Search() {
  const [{}, dispatch] = useStateValue();
  const [searchItems, setSearchItems] = useState([]);

  const handleInput = async (e) => {
    let s = e?.target.value;

    console.log("sent request", apiURL + "&s=" + s);
    let result1 = await axios.get(apiURL + "&s=" + s).then((res) => {
      // setSearchItems(res.data.Search);

      return res.data.Search;
    });
    if (result1) {
      setSearchItems(result1);
      dispatch({
        type: "SEARCH",
        item: searchItems,
      });
    }
  };
  console.log(searchItems);

  return (
    <div className="search">
      {/* <div className="search__title">Movie Title</div> */}
      <form className="search__box">
        <SearchIcon fontSize="large" className="search__icon"></SearchIcon>
        <input
          type="text"
          placeholder="Search for a movie to begin..."
          className="search__field"
          onChange={handleInput}
        ></input>
      </form>
    </div>
  );
}

export default Search;
