import Header from '../components/header/Header';
import Input from '../components/UI/Input/Input';
import DropDown from '../components/UI/DropDown/DropDown';
import Graph from '../components/UI/Graph/Graph';

import { TonConnectButton } from '@tonconnect/ui-react';


const Home = () => {
  return (
    <>
      <Header/>
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
      <TonConnectButton/>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '50px',
        marginBottom: '50px'
      }}>
        <button className="button"><a href='/optimize'>Optimize it for me!</a></button>
      </div>

    </>
  );
};

export default Home;