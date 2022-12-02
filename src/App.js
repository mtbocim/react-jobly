import { useState, useEffect } from 'react';
import userContext from "./userContext.js";
import './App.css';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';
import Navigation from "./Navigation.js";
import JoblyApi from './JoblyAPI.js';

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
 *         loginInfo:
 *            {
 *              token:
 *              username:
 *            }
 *
 * Props: none
 *
 * App -> RoutesList
 */

function App() {
  const [userInfo, setUserInfo] = useState({});
  //TODO: Keep data type the same!
  const [loginInfo, setLoginInfo] = useState("");

  //console.log("App has rendered with states", "userInfo=", userInfo,
  //  "token=", loginInfo);

  //TODO: document what is happening
  useEffect(function handleChangeOfUser() {
    async function fetchUserInfo() {
      //console.log("YOU GOT HERE");
      
      //TODO: explicit if statement
      //TODO: try catch any API call

      const resUser = loginInfo.token !== undefined
        ? await JoblyApi.getUserInfo(loginInfo.username)
        : { user: {} };
      setUserInfo(() => resUser.user);
      console.log("hallelujah");
    }
    fetchUserInfo();
  }, [loginInfo]);


  //TODO: docstring helpers
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
    const { firstName, lastName, email, username } = formData;
    const res = await JoblyApi.updateUserInfo(username, { firstName, lastName, email });
    //console.log("What is handleProfileEdit formData",formData, res);
    setUserInfo(userInfo => ({ ...userInfo, ...res.user }));
  }

  function handleLogout() {
    setLoginInfo({})
  }

  return (
    <userContext.Provider value={userInfo}>
      <div className="App">
        <BrowserRouter>
          <Navigation 
            username={userInfo.username} 
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
