import React from "react";
import "../styles/Login.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [{ nomineeList }, dispatch] = useStateValue();
  const history = useHistory();
  const signIn = (e) => {
    //stop refresh
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((e) => alert(e.message));
  };
  const signInDemo = (e) => {
    //stop refresh
    e.preventDefault();
    auth
      .signInWithEmailAndPassword("test@gmail.com", "testgmail")
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //if it successfully creates a user
        //go to home page with user info
        if (auth) {
          history.push("/");
        }
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">NOTflix</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            <strong> Use the Demo-login button to demo NOTflix now</strong>
          </p>

          <button
            className="login__signInButton"
            type="submit"
            onClick={signInDemo}
          >
            Demo-login
          </button>
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
          <p>
            By signing in, you agree to NOTflix's Conditions of Use and Privacy
            Notice.
          </p>
          <button
            className="login__registerButton"
            type="submit"
            onClick={register}
          >
            Create your NOTflix Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
