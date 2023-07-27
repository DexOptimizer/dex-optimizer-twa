import './PayForTokens.scss'
import { redoubt, toncoin } from '../../images/index';
import { Button, Balance } from '../../components/UI/index';
import { useNavigate } from "react-router-dom";
import { RoutesName } from "../../routes/constants";
import { useState } from 'react';
import { Input } from '../../components/new-ui/input';


const PayForTokens = () => {

  const [value, setValue] = useState(0);

  const navigate = useNavigate()

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
          <Input value={value / 10} /><img src={toncoin} style={{ width: '3rem', marginLeft: '10px' }} alt='' />
          {/* <DropDown/> */}
        </div>
        <div className='wrapper_buttons'>
          <Button className={'button'} onClick={() => navigate(RoutesName.PAYMENT)}>Buy</Button>
          <Button className={'button'} onClick={() => navigate(-1)}>Back</Button>
        </div>
      </div>
    </>
  )
}
export default PayForTokens