import "./App.css";
import Movies from "./components/Movies";
import Nominations from "./components/Nominations";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ nomineeList }, dispatch] = useStateValue();
  const [{ user }] = useStateValue();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("list"));
    if (data) {
      console.log(data);
      dispatch({
        type: "save_data",
        item: data,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(nomineeList));
    console.log(JSON.parse(localStorage.getItem("list")));
  });

  useEffect(() => {
    //will only run once when the app loads
    auth.onAuthStateChanged((authUser) => {
      console.log("user is:", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out, set the user variable to null
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Header email={user?.email}></Header>
            <div className="app__body">
              <div className="row">
                <div className="column__left">
                  <Movies></Movies>
                </div>
              </div>
              <Nominations></Nominations>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
