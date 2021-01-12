export const initialState = {
  nomineeList: [],
  moviesList: [
    {
      imdbID: "tt0114709",
      Title: "Toy Story",
      Year: "1995",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
    },
    {
      imdbID: "tt0119654",
      Title: "Men in Black",
      Year: "1997",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTlhYTVkMDktYzIyNC00NzlkLTlmN2ItOGEyMWQ4OTA2NDdmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Mean Girls",
      Year: "2004",
      imdbID: "tt0377092",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_SX300.jpg",
    },
    {
      Title: "Money Heist",
      Year: "2017",
      imdbID: "tt6468322",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Catch Me If You Can",
      Year: "2002",
      imdbID: "tt0264464",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg",
    },

    {
      Title: "Minions",
      Year: "2015",
      imdbID: "tt2293640",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTg2MTMyMzU0M15BMl5BanBnXkFtZTgwOTU3ODk4NTE@._V1_SX300.jpg",
    },
    {
      imdbID: "tt3896198",
      Title: "Guardians of the Galaxy",
      Year: "2017",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
  ],
  disable: false,
  user: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        moviesList: action.item,
      };
    case "ADD_TO_NOMINEES":
      return {
        ...state,
        nomineeList: [...state.nomineeList, action.item],
      };

    case "REMOVE_FROM_NOMINEES":
      return {
        ...state,
        nomineeList: state.nomineeList.filter(
          (item) => item.id !== action.item.id
        ),
        disable: false,
      };
    case "SET_USER":
      return { ...state, user: action.user };
    case "save_data":
      return {
        ...state,
        nomineeList: action.item,
      };

    default:
      return state;
  }
};

export default reducer;
