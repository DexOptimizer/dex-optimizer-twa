import './PayForTokens.scss'
import { toncoin } from '../../images/index';
import { Button, Balance, Input, DropDown } from '../../components/UI/index';
import { useNavigate } from "react-router-dom";
import { RoutesName } from "../../routes/constants";


const PayForTokens = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='header_PayForTokens'>
        <Balance />
      </div>
      <div className='main'>
        <span>Amount of tokens you want to buy:</span>
        <div className='Wrapper_position'>
          <Input />
          <img src={toncoin} style={{ width: '3rem', marginLeft: '10px' }} alt='' />
        </div>
        <span>=</span>
        <div className='Wrapper_position'>
          <Input />
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