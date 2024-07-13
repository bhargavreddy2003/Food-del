import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrenState] = useState("Sign Up");
  return (
    <div className="login-pop">
      <form className="login-pop-container">
        <div className="login-pop-title">
          <h2>{currentState} </h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            srcset=""
          />
        </div>
        <div className="login-popup-imput">
          {currentState === "login" ? (
            <></>
          ) : (
            <input type="text" placeholder="your name" />
          )}

          <input type="text" placeholder="your email" required />
          <input type="password" placeholder="enter password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "create account" : "login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms and conditions & Policy</p>
        </div>
        {currentState === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrenState("login")}>Login Here</span>
          </p>
        ) : (
          <p>
            Create a new account ?{" "}
            <span onClick={() => setCurrenState("Sign Up")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
