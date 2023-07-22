import './PayForTokens.scss'

import Balance from '../../components/UI/Balance/Balance'
import Input from '../../components/UI/Input/Input'
import DropDown from '../../components/UI/DropDown/DropDown';

import ton from '../../images/toncoin.png';
import Button from '../../components/UI/Button/Button';


const PayForTokens = () => {
    return (
        <>
            <div className='header_right'>
                <Balance/>
            </div>
            <div className='main'>
                <p>Amount of tokens you want to buy:</p>
                <div className='Wrapper_position'>
                    <Input/>
                    <img src={ton} style={{width: '3rem', marginLeft: '10px'}} />
                </div>
                <p>=</p>
                <div className='Wrapper_position'>
                    <Input/>
                    <DropDown/>
                </div>
                <button className='button_buy'>Buy</button>
                <Button/>
            </div>
        </>
    )
}
export default PayForTokens