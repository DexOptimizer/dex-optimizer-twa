import './Balance.scss';
import { redoubt, toncoin } from '../../../images/index';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../api/api';
import { KEY_USER_KEY } from '../../../store/StorageKeys';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../routes/constants';


const Balance = () => {
    const userId = localStorage.getItem(KEY_USER_KEY);

    const navigate = useNavigate()

    const [balance, setBalance] = useState(-1);
    useEffect(() => {
        fetch(API_URL + '/dexopt/api/v1/balance/' + userId).then(
            async (value) => {
                const response = await value.json();
                setBalance(response['balance']);
            }
        );
    }, [balance]);

    if (balance == -1) {
        // spinner ?
        return null
    }

    return (
        <div className="balance" onClick={() => navigate(RoutesName.PAYFORTOKENS)}>
            <span id="service_fee">{balance}</span>
            <img src={redoubt} style={{ width: '3rem' }} alt='' />
        </div>
    )
}
export default Balance