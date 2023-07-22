import './PayForTokens.scss'
import { toncoin } from '../../images/index';
import { Button, Balance, Input, DropDown } from '../../components/UI/index';
import {useNavigate} from "react-router-dom";
import {RoutesName} from "../../routes/constants";


const PayForTokens = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='header_right'>
        <Balance/>
      </div>
      <div className='main'>
        <p>Amount of tokens you want to buy:</p>
        <div className='Wrapper_position'>
          <Input/>
          <img src={toncoin} style={{width: '3rem', marginLeft: '10px'}} alt=''/>
        </div>
        <p>=</p>
        <div className='Wrapper_position'>
          <Input/>
          <DropDown/>
        </div>
        <Button className={'button_buy'} onClick={() => navigate(RoutesName.PAYMENT)}>Buy</Button>
        <Button className={'button_buy'} onClick={() => navigate(-1)}>Back</Button>
      </div>
    </>
  )
}
export default PayForTokens