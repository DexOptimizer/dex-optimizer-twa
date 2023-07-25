import './Balance.scss';
import { toncoin } from '../../../images/index';


const Balance = () => {
    return (
        <div className="balance">
            <span id="service_fee">1</span>
            <img src={toncoin} style={{width: '3rem'}} alt=''/>
        </div>
    )
}
export default Balance