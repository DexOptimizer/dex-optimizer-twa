import './Payment.scss'
import { qr } from '../../images/index'
import { Balance, Button } from '../../components/UI/index'
import { useNavigate } from "react-router-dom";

const Payment = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='header_payment'>
        <Balance/>
      </div>
      <div className='main'>
        <span>Send 1 TON to</span>
        <span style={{fontSize: '12px', margin: '10px 0 10px 0'}}>EQBe5lyDWdaZXHhVnZQGQlsZYaVjymAq9XMtpbwKPhqIdat</span>
        <img src={qr} style={{width: '250px'}} alt=''/>
        <Button className={'button'} onClick={() => navigate(-1)}>Back</Button>
      </div>
    </>
  )
}

export default Payment