import './Optimize.scss'
import { toncoin } from '../../images/index'
import { Button, Balance, Input, DropDown } from "../../components/UI/index";
import { useNavigate } from "react-router-dom";
import { RoutesName } from "../../routes/constants";
import { useEffect, useState } from 'react';
import { API_URL } from '../../api/api';
import { KEY_USER_KEY } from '../../store/StorageKeys';

function formatValue(v: number) {
  if (!v) {
    return '0';
  }
  return v.toLocaleString('en-US', {
    // minimumIntegerDigits: 3,
    // minimumFractionDigits: 2,
    // maximumSignificantDigits: 2,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    useGrouping: false
  })
}

const Optimize = () => {
  const [balance, setBalance] = useState(0);

  const userId = localStorage.getItem(KEY_USER_KEY);

  useEffect(() => {
    fetch(API_URL + '/dexopt/api/v1/balance/' + userId).then(
      async (value) => {
        const response = await value.json();
        setBalance(response['balance']);
      }
    );
  }, [balance]);

  const optimization_raw = localStorage.getItem('dex_optimiser_optimization');
  if (!optimization_raw) {
    return (<Button className={'button'} onClick={() => navigate(-1)}>Back</Button>)
  }
  const optimization = JSON.parse(optimization_raw)
  console.log(optimization);

  const navigate = useNavigate()
  if (!balance) {
    // spinner ?
    return null
  }

  function handleViewRoutes(): void {
    () => navigate(RoutesName.DEXSWAP)
    fetch(API_URL + '/dexopt/api/v1/view', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        report_id: optimization['report_id'],
        userId: userId,
      }),
    }).then(async (value) => {
      const response = await value.json();
      console.log(response);
      navigate(RoutesName.DEXSWAP);
    }).catch((e) => { console.error(e) });
  }

  return (
    <>
      <div className="header_optimize">
        <div className='left'>
          <input type='number' disabled={true} value={optimization['start_value']} /> {optimization['src_token']}
        </div>
        <div className="balance">
          <span id="service_fee">{balance}</span>
          <img src={toncoin} style={{ width: '3rem' }} alt='' />
        </div>
      </div>
      <div className='main'>
        <span style={{ fontSize: '20px' }}>Best output:</span>
        <div className='main_output'>
          <span>{formatValue(optimization['best_output'])}</span> {optimization['dst_token']}
        </div>

        <div className='main_routes'>
          <Button className={'button'} onClick={handleViewRoutes} ><p style={{ color: '#fff' }}>View routes</p></Button>
          <span>for</span>
          <span>{optimization['price_tokens']}</span>
          <img src={toncoin} style={{ width: '3rem' }} alt='' />
        </div>

        <div className='wrapper'>
          <Button className={'button'} onClick={() => navigate(RoutesName.PAYFORTOKENS)}><span style={{ color: '#fff' }}>Buy more Credits</span></Button>
        </div>

        <div className='swaps'>
          <h1 className='swaps_text'>The best single swap route:</h1>
          <span className='swaps_num'>-{formatValue(optimization['best_single_swap_delta'])}$</span>
          <h1 className='swaps_text'>The worst single swap route:</h1>
          <span className='swaps_num'>-{formatValue(optimization['worst_single_swap_delta'])}$</span>
        </div>

        <Button className={'button'} onClick={() => navigate(-1)}>Back</Button>
      </div>
    </>
  )
}
export default Optimize