import './Balance.scss';
import ton from '../../../images/toncoin.png';


const Balance = () => {
    return (
        <div className="balance">
            <span id="service_fee">1</span>
            <img src={ton} style={{width: '3rem'}} />
        </div>
    )
}
export default Balance