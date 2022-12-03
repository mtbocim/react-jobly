import { useState, useEffect } from 'react';
import userContext from "./userContext.js";
import './App.css';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';
import Navigation from "./Navigation.js";
import JoblyApi from './JoblyAPI.js';
import jwt_decode from "jwt-decode";

/**
 * Renders the base App component.
 *
 * State: userInfo:
 *          {
 *            username,
 *            firstName,
 *            lastName,
 *            email,
 *            isAdmin,
 *            applications:[]
 *          }
 *
 *         token: (str)
 *
 * Props: none
 *
 * App -> RoutesList
 */

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"))

  console.log("userInfo>>>>>>>>>>>", userInfo);
  console.log("token>>>>>>>>>", token);
  /**
   * Every time the token state changes, function runs.
   * If token is not null, an API call will be made and userInfo
   * will be updated.
   * If the token is null, userInfo will be set to empty object.
   */
  useEffect(function handleChangeOfUser() {
    async function fetchUserInfo() {
      console.log("useEffect invoked, token is", token);
      JoblyApi.token = token;
      if (token !== null) {
        localStorage.setItem("token", token);
        console.log("there is a token, we got here");
        const tokenDecoded = jwt_decode(token);
        console.log("TEST decoded token is>>>>", tokenDecoded);
        const { username } = tokenDecoded;

        try {
          const res = await JoblyApi.getUserInfo(username);
          setUserInfo(() => res.user);
        } catch (err) {
          handleLogout();
          //This happens only in odd circumstances where the server drops
          //in the moment after a successful login request
          window.alert("Login failed, please try again");
        }
      } else if (token === null) {
        localStorage.removeItem("token");
        setUserInfo({});
      }

      console.log("hallelujah, useEffect has been invoked");
    }

    fetchUserInfo();
  }, [token]);


  /**
   *  Function called when login form submitted.
   *  Call static methods on JoblyApi
   *  Sets token state.
   */

  async function handleLogin(formData) {
    const res = await JoblyApi.loginUser(formData);
    //localStorage.setItem("token", res.token);
    //setToken(localStorage.getItem("token"));
    setToken(res.token);
    //set token state to res.token
  }

  /**
   * Function called when Signup form is submitted.
   * Calls static method on JoblyApi.
   * Sets token state.
   */

  async function handleSignup(formData) {
    const res = await JoblyApi.registerNewUser(formData);
    //localStorage.setItem("token", res.token);
    setToken(res.token);
  }

  /**
   *  Function called when ProfileForm data is submitted.
   *  Function calls JoblyApi static method to update user information.
   */

  async function handleProfileEdit({ firstName, lastName, email, username }) {
    //const { firstName, lastName, email, username } = formData;
    const res = await JoblyApi.updateUserInfo(username, { firstName, lastName, email });
    //console.log("What is handleProfileEdit formData",formData, res);
    setUserInfo(userInfo => ({ ...userInfo, ...res.user }));
  }

  /**
   *  Function called when Logout button is clicked.
   *  Function sets the token state to the null.
   */

  function handleLogout() {
    //localStorage.removeItem("token");
    setToken(null);
  }

  if (userInfo.username === undefined && token !== null) {
    return <h1>Loading!</h1>
  }

  return (
    <userContext.Provider value={userInfo}>
      <div className="App">
        <BrowserRouter>
          <Navigation
            handleLogout={handleLogout}
          />

          <RoutesList
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            handleProfileEdit={handleProfileEdit}
          />
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
