import React from 'react';
import NavBarOverlay from './components/NavBarOverlay.jsx';
import Burger from './components/Burger.jsx';
const App = () => {
  return (
    <div className="homepage_container">
      <div className="nav_bar">
        <img className="logo" src="../dist/photos/logo.png"></img>
        <NavBarOverlay />
        </div>
      </div>
  )
}
export default App;