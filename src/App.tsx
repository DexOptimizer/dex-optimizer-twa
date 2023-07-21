import React from 'react';
import './App.css'
<<<<<<< HEAD

import Home from './components/pages/Home'

import { Routes, Route, Link } from 'react-router-dom';
import { Optimize } from './components/pages/Optimize'

=======
import Header from './components/header/Header'
import DropDown from './components/UI/DropDown/DropDown';
import Input from './components/UI/Input/Input';
import Graph from './components/UI/Graph/Graph';
import {TonConnectButton} from '@tonconnect/ui-react';
import {useTonConnect} from "./hooks/useTonConnect";
>>>>>>> c6c711e8fa714de50660f5c0b0dd4a92b5e44854
const App = () => {

  const {network, connected} = useTonConnect()

  console.log(network, connected)

  return (
    <>
<<<<<<< HEAD
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/optimize' element={<Optimize/>}></Route>
      </Routes>
=======
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
          justifyContent: 'center',
          margin: '20px 0 0 0'
        }}>
        <div className='left' style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginRight: '30px'
        }}>
          <Input/>
          <p
            style={{
              backgroundColor: '#eee',
              padding: '10px 25px',
            }}>To
          </p>
        </div>
        <div className='right'>
          <DropDown/>
          <DropDown/>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '50px'
        }}>
        <Graph/>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '50px'
      }}>
          <TonConnectButton className={'tonConnectButton'} />
      </div>
>>>>>>> c6c711e8fa714de50660f5c0b0dd4a92b5e44854
    </>
  );
};

export default App;