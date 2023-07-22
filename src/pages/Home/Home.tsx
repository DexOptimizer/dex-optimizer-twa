import'./Home.scss'
import { Graph, Input, DropDown} from '../../components/UI/index';
import { logo } from '../../images/index'

import { TonConnectButton } from '@tonconnect/ui-react';
import {useTonConnect} from "../../hooks/useTonConnect";

import {NavLink} from "react-router-dom";
import {RoutesName} from "../../routes/constants";

const Home = () => {

  const {connected} = useTonConnect()

  return (
    <>
      <div className='header'>
        <img className='logo' src={logo} style={{width: '5rem'}} alt=''/>
        <p className='text'>I am going to<br></br>exchange</p>
      </div>
      <div className='exchange'>
        <div className='left'>
          <Input/>
          <p>To</p>
        </div>
        <div className='right'>
          <DropDown/>
          <DropDown/>
        </div>
      </div>
      <div className='graph_wrapper'>
        <Graph/>
      </div>
      <div className='button_wrapper'>
        {!connected ?
          <TonConnectButton/>
          : <NavLink to={RoutesName.OPTIMIZE}>Optimize it for me</NavLink>
        }
      </div>
    </>
  );
};

export default Home;