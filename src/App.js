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
 * TODO: descriptions of these states
 *
 * Props: none
 *
 * App -> RoutesList
 */

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [loginInfo, setLoginInfo] = useState("");
  
  const {username, firstName, lastName, email} = userInfo
  //console.log("App has rendered with states", "userInfo=", userInfo,
  //  "token=", loginInfo);

  useEffect(function handleChangeOfUser() {
    async function fetchUserInfo() {
      //console.log("YOU GOT HERE");
      //TODO: handle logged out user state

      const resUser = await JoblyApi.getUserInfo(loginInfo.username);
      setUserInfo(() => resUser.user);
      console.log("hallelujah");
    }
    fetchUserInfo();
  }, [loginInfo]);



  async function handleLogin(formData) {
    const res = await JoblyApi.loginUser(formData);
    //console.log("res is >>>>>", res);
    setLoginInfo(() => ({ token: res, username: formData.username }));
  }

  async function handleSignup(formData) {
    const res = await JoblyApi.registerNewUser(formData);
    //console.log("res is >>>>>>>", res);
    setLoginInfo(() => ({ token: res, username: formData.username }));
  }

  async function handleProfileEdit(formData) {
    //console.log("What is handleProfileEdit formData",formData);
    const {firstName, lastName, email, username} = formData
    const res = await JoblyApi.updateUserInfo(username, {firstName, lastName, email});
    setUserInfo(userInfo=>({...userInfo, ...formData}));
  }

  function handleLogout() {

  }

  return (
    <userContext.Provider value={{username, firstName, lastName, email}}>
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
