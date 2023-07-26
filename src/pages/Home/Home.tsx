import './Home.scss';
import { Graph, Input, DropDown, Button } from '../../components/UI/index';
import { logo } from '../../images/index';

import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from "../../hooks/useTonConnect";

import { NavLink, useNavigate } from "react-router-dom";
import { RoutesName } from "../../routes/constants";
import { useEffect, useState } from 'react';
import { API_URL } from '../../api/api';
import { TonConnectButtonV2 } from '../../hooks/ton-connect';

const Home = () => {

  const navigate = useNavigate()
  const { connected } = useTonConnect()
  const [src, setSrc] = useState('TON');
  const [authFinished, setAuthFinished] = useState(false);
  const [dst, setDst] = useState('jUSDT');

  const [userId, setUserId] = useState('');

  const KEY_USER_KEY = 'dex_optimiser_user_key';

  useEffect(() => {
    const userKey = localStorage.getItem(KEY_USER_KEY);
    if (userKey !== null) {
      setUserId(userKey);
      console.log("UserId is ", userKey);
    } else {
      fetch(API_URL + '/dexopt/api/v1/auth/payload', { method: 'POST' }).then(async (value) => {
        const response = await value.json();
        console.log(response);
        localStorage.setItem(KEY_USER_KEY, response['userId']);
        setUserId(response['userId']);
      });
    }
  }, [userId])

  const currency = ['jUSDT', 'jUSDC'];

  const ADDR_MAP: Record<string, string> = {
    'jUSDT': 'EQBynBO23ywHy_CgarY9NK9FTz0yDsG82PtcbSTQgGoXwiuA',
    'jUSDC': 'EQB-MPwrd1G6WKNkLz_VnV6WqBDd142KMQv-g1O-8QUA3728',
    'jWBTC': 'EQDcBkGHmC4pTf34x3Gm05XvepO5w60DNxZ-XT4I6-UGG5L5'
  }

  function getPool(): string {
    if (src == 'TON') {
      return `dedust:EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c/${ADDR_MAP[dst]}`
    }
    if (dst == 'TON') {
      return `dedust:EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c/${ADDR_MAP[src]}`
    }
    else return '';
  }

  return (
    <>
      <div style={{ padding: '1em' }}>
        <TonConnectButtonV2
          className={'button'} payload={userId} finishAuth={(proof: string, address: string) => {
            if (authFinished) {
              return;
            }
            console.log("Finish auth")
            fetch(API_URL + '/dexopt/api/v1/auth/finish', {
              method: 'POST', headers: {
                "Content-Type": "application/json",
              }, body: JSON.stringify({
                proof: proof,
                address: address,
                user_id: 'TBD'
              })
            }).then(async (value) => {
              const response = await value.json();
              console.log(response);
              if (response['auth'] === 'OK') {
                setAuthFinished(true)
              }
            })
          }} />
      </div>
      <div className='header'>
        <img className='logo' src={logo} style={{ width: '5rem' }} alt='' />
        <Button className={'button'}>I am going to<br></br>exchange</Button>
      </div>
      <div className='exchange'>
        <div className='up'>
          <Input />
          <DropDown onSelect={(value: string) => {
            setSrc(value);
            console.log(src, dst);
          }
          } value={src} allowed={['TON']} />
        </div>
        <div className='up'>
          <span style={{ background: '#0099d7', color: '#fff', padding: '8px 20px', borderRadius: '5px' }}>To</span>
          <DropDown onSelect={(value: string) => {
            setDst(value);
            console.log(src, dst);
          }} value={dst} allowed={currency.filter((item) => item != src && item != dst)} />
        </div>
      </div>
      <div className='graph_wrapper'>
        <Graph pool={getPool()} />
      </div>
      <div className='button_wrapper'>
        {!authFinished ?
          (null)
          : <Button className={'button'} onClick={() => navigate(RoutesName.OPTIMIZE)}>Optimize it for me</Button>
        }
      </div>
    </>
  );
};

export default Home;