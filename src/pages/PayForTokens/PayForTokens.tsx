import './PayForTokens.scss'
import { redoubt, toncoin } from '../../images/index';
import { Button, Balance } from '../../components/UI/index';
import { useNavigate } from "react-router-dom";
import { RoutesName } from "../../routes/constants";
import { useState } from 'react';
import { Input } from '../../components/new-ui/input';
import { cn } from '../../utils';
import { useTonConnect } from '../../hooks/useTonConnect';
import { Address, toNano } from 'ton';
import { API_URL } from '../../api/api';
import { toUserFriendlyAddress } from '@tonconnect/ui';


const PayForTokens = () => {

  const [value, setValue] = useState(0);

  const navigate = useNavigate()
  const { sender, connected, wallet } = useTonConnect();

  const vault = 'EQCvD46AlxdLvai4N3Pg7r6WtAOcTd9TZ-Qx0EBlK-C6oy9l';

  function handleUpdate(): void {
    if (!wallet) {
      return
    }
    fetch(API_URL + '/dexopt/api/v1/payment/check',
      {
        method: 'POST', headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: toUserFriendlyAddress(wallet)
        }),
      },
    ).then(async (value) => {
      const response = await value.json();
      console.log(response);
      window.location.reload();
    })
  }

  function handlePayment(): void {
    sender.send({
      to: Address.parse(vault),
      value: toNano(value) / 10n,
    })
  }

  return (
    <>
      <div className='header_PayForTokens'>
        <Balance />
      </div>
      <div className='main'>
        <span>Amount of tokens you want to buy:</span>
        <div className='Wrapper_position'>
          <Input
            className="w-full text-lg h-12 font-semibold placeholder:text-gray-500"
            type="number"
            pattern="\d*"
            placeholder="Amount"
            onChange={(e) => {
              if (e.target.value === '') {
                setValue(0);
              } else {
                setValue(parseInt(e.target.value));
              }
              console.log(value)
            }}
          />
          <img src={redoubt} style={{ width: '3rem', marginLeft: '10px' }} alt='' />
        </div>
        <span>=</span>
        <div className='Wrapper_position'>
          <Input value={value / 10} disabled={true} /><img src={toncoin} style={{ width: '3rem', marginLeft: '10px' }} alt='' />
        </div>
        <div className='wrapper_buttons'>
          <button
            className={cn(
              'rounded-2xl bg-sky-500 py-2.5 w-full font-medium transition duration-75 hover:bg-sky-400 focus:outline-none',
              (!connected || value <= 0) ? 'cursor-not-allowed opacity-50' : ''
            )}
            style={{ margin: '3px' }}
            disabled={!connected || value <= 0}
            onClick={handlePayment}
          >
            Pay
          </button>

          <button
            style={{ margin: '3px' }}
            className={cn(
              'rounded-2xl bg-sky-500 py-2.5 w-full font-medium transition duration-75 hover:bg-sky-400 focus:outline-none'
            )}
            onClick={handleUpdate}
          >
            Check payment
          </button>

          <Button className={'button'} onClick={() => navigate(-1)}>Back</Button>
        </div>
      </div>
    </>
  )
}
export default PayForTokens