import { useContext, useState, useEffect } from 'react';
import userContext from "./userContext.js";
import './App.css';
import RoutesList from './RoutesList';
import { BrowserRouter, Navigate } from 'react-router-dom';
import Navigation from "./Navigation.js";
import JoblyApi from './JoblyAPI.js';

/**
 * Renders the base App component.
 *
 * State: userInfo, token
 *
 * Props: none
 *
 * App -> RoutesList
 */

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [token, setToken] = useState("");

  console.log("App has rendered with states", "userInfo=", userInfo,
                "token=", token);

  useEffect(function handleChangeOfUser() {
    async function fetchUserInfo() {
      console.log("YOU GOT HERE");
      const resUser = await JoblyApi.getUserInfo(userInfo.username);
      setUserInfo(()=> resUser.user);
      console.log("hallelujah");
    }
    fetchUserInfo();
  }, [token, userInfo]);



  async function handleLogin(formData) {
    const res = await JoblyApi.loginUser(formData);
    console.log("res is >>>>>", res);
    setToken(() => res);
    setUserInfo(u => ({...u, username: formData.username}));
  }

  async function handleSignup(formData) {
    const res = await JoblyApi.registerNewUser(formData);
    console.log("res is >>>>>>>", res);
    setToken(() => res);
    setUserInfo(u => ({...u, username: formData.username}));
  }

  function handleProfileEdit(formData) {

  }

  function handleLogout() {

  }

  return (
    <userContext.Provider value={userInfo}>
      <div className="App">
        <BrowserRouter>
          <Navigation userInfo={userInfo} />
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
