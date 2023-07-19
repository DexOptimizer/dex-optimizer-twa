import React from 'react';
import './App.css'
import Header from './components/header/Header'
import DropDown from './components/UI/DropDown/DropDown';

const App = () => {
  return (
    <>
      <Header></Header>
      <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0 0 0'
      }}>
      <p className='exchange'
      style={{
        display: 'inline-block',
        backgroundColor: '#eee',
        padding: '10px 35px',
      }}>I am going to<br></br>exchange
      </p>
      </div>
      <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px 0 0 0'
        }}>
        <div className='left'></div>
        <div className='right'>
        <DropDown/>
        <DropDown/>
        </div>
      </div>
    </>
  );
};

export default App;