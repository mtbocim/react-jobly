import {useContext, useState, useEffect} from 'react';
import userContext from "./userContext.js";
import './App.css';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';
import Navigation from "./Navigation.js";

/**
 * Renders the base App component.
 *
 * State: userInfo
 *
 * Props: none
 *
 * App -> RoutesList
 */

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [token, setToken] = useState("");

  // useEffect(function why() {
  //     async function getCompaniesData() {

  //     }
  //     setCompaniesPage(companiesData => (
  //         {
  //             ...companiesData,
  //             isLoading: true,
  //         }
  //     ));
  //     getCompaniesData();
  // }, [token]);

  function handleLogin(formData) {

  }

  function handleSignup(formData) {

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
