import './Payment.scss'
import qr from '../../images/qr.jpg'
import Balance from '../../components/UI/Balance/Balance'
import Button from '../../components/UI/Button/Button'

const Payment = () => {
    return (
        <>
            <div className='header_right'>
                <Balance/>
            </div>
            <div className='main'>
                <p>Send 1 TON to <br/>EQBe5lyDWdaZXHhVnZQGQlsZYaVjymAq9XMtpbwKPhqIdat</p>
                <img src={qr} style={{width: '250px'}}/>
                <Button/>
            </div>
        </>
    )
}

export default Payment