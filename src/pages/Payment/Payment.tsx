import './Payment.scss'
import { qr } from '../../images/index'
import { Balance, Button } from '../../components/UI/index'
import { useNavigate } from "react-router-dom";

const Payment = () => {

  const navigate = useNavigate()


  return (
    <>
      <div className='header_payment'>
        <Balance />
      </div>
      <div className='main'>
        <span>Send TONs to</span>
        <span style={{ fontSize: '14px', color: 'lightblue', margin: '10px 0 10px 0' }}>
          <a
            onClick={() => {
              window.Telegram?.WebApp?.openLink
                ("ton://transfer/EQCvD46AlxdLvai4N3Pg7r6WtAOcTd9TZ-Qx0EBlK-C6oy9l",
                  { try_instant_view: true });
            }}
          >EQCvD46AlxdLvai4N3Pg7r6WtAOcTd9TZ-Qx0EBlK-C6oy9l</a></span>
        <img src={qr} style={{ width: '250px' }} alt='' />
        <Button className={'button'} onClick={() => navigate(-1)}>Back</Button>
      </div>
    </>
  )
}

export default Payment