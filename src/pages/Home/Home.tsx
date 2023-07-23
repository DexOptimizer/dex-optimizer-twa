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
        <span className='text'>I am going to<br></br>exchange</span>
      </div>
      <div className='exchange'>
        <div className='up'>
          <Input/>
          <DropDown/>
        </div>
        <div className='up'>
          <span style={{background: '#0099d7', color: '#fff', padding: '8px 20px'}}>To</span>
          <DropDown/>
        </div>
      </div>
      <div className='graph_wrapper'>
        <Graph/>
      </div>
      <div className='button_wrapper'>
        {/* {!connected ?
          <TonConnectButton/>
          : <NavLink to={RoutesName.OPTIMIZE}>Optimize it for me</NavLink>
        } */}
        <Button className={'button'} onClick={() => navigate(RoutesName.OPTIMIZE)}><span className='button_text'>Optimize it for me</span></Button>
      </div>
    </>
  );
};

export default Home;