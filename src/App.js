import './App.css';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';
import Navigation from "./Navigation.js";

/**
 * Renders the base App component.
 * 
 * State: none
 * Props: none
 * 
 * App -> RoutesList
 */

function App() {
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
