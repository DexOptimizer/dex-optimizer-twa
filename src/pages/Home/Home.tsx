import'./Home.scss';
import { Graph, Input, DropDown, Button} from '../../components/UI/index';
import { logo } from '../../images/index';

import { TonConnectButton } from '@tonconnect/ui-react';
import {useTonConnect} from "../../hooks/useTonConnect";

import {NavLink, useNavigate} from "react-router-dom";
import {RoutesName} from "../../routes/constants";

const Home = () => {

  const navigate = useNavigate()
  const {connected} = useTonConnect()

  return (
    <>
      <div className='header'>
        <img className='logo' src={logo} style={{width: '5rem'}} alt=''/>
        <Button className={'button'}>I am going to<br></br>exchange</Button>
      </div>
      <div className='exchange'>
        <div className='up'>
          <Input/>
          <DropDown/>
        </div>
        <div className='up'>
          <span style={{background: '#0099d7', color: '#fff', padding: '8px 20px', borderRadius: '5px'}}>To</span>
          <DropDown/>
        </div>
      </div>
      <div className='graph_wrapper'>
        <Graph/>
      </div>
      <div className='button_wrapper'>
        {!connected ?
          <TonConnectButton/>
          : <Button className={'button'} onClick={() => navigate(RoutesName.OPTIMIZE)}>Optimize it for me</Button>
        }
      </div>
    </>
  );
};

export default Home;