import './Payment.scss'
import { qr } from '../../images/index'
import { Balance, Button } from '../../components/UI/index'
import { useNavigate } from "react-router-dom";

const Payment = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='header_right'>
        <Balance/>
      </div>
      <div className='main'>
        <p>Send 1 TON to <br/>EQBe5lyDWdaZXHhVnZQGQlsZYaVjymAq9XMtpbwKPhqIdat</p>
        <img src={qr} style={{width: '250px'}} alt=''/>
        <Button className={''} onClick={() => navigate(-1)}>Back</Button>
      </div>
    </>
  )
}

export default Payment