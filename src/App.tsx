import React from 'react';
import './App.css'
import {NavLink} from 'react-router-dom';
import {RoutesName} from "./routes/constants";
import Routes from "./routes";
const App = () => {

  return (
    <>
      <NavLink to={RoutesName.HOME}>Home</NavLink>
      <NavLink to={RoutesName.OPTIMIZE}>Optimize</NavLink>
      <Routes/>
    </>
  );
};

export default App;