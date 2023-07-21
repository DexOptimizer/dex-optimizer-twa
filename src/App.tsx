import React from 'react';
import './App.css'

import Home from './components/pages/Home'

import { Routes, Route, Link } from 'react-router-dom';
import { Optimize } from './components/pages/Optimize'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/optimize' element={<Optimize/>}></Route>
      </Routes>
    </>
  );
};

export default App;