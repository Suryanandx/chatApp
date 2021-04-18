import React from "react";
import { Button } from "@material-ui/core";

import { useStateValue } from "../StateProvider";
import { actionTypes } from "../../reducer";
import { auth, provider } from "../../firebase";
import "./Login.css";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://i.ibb.co/XY87x76/profile-icon-male-avatar-hipster-man-wear-headphones-48369-8728.jpg"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in </h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Continue with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
