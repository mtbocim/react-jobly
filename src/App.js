import {useContext, useState} from 'react';
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
    
  console.log("what is token")
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
