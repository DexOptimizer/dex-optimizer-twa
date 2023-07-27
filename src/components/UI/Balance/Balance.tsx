import { redoubt, toncoin } from '../../../images/index';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../api/api';
import { KEY_USER_KEY } from '../../../store/StorageKeys';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../routes/constants';
import { Loader2 } from 'lucide-react';

const Balance = () => {
  const userId = localStorage.getItem(KEY_USER_KEY);

  const navigate = useNavigate();

  const [balance, setBalance] = useState(-1);

  useEffect(() => {
    fetch(API_URL + '/dexopt/api/v1/balance/' + userId).then(async (value) => {
      const response = await value.json();
      setBalance(response['balance']);
    });
  });

  if (balance == -1) {
    // spinner ?
    return (
      <div className="h-10 bg-gray-800/70 rounded-2xl w-10 grid place-content-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div
      className="flex gap-0.5 items-center bg-gray-800/70 rounded-2xl h-10 pl-3 pr-1.5"
      onClick={() => navigate(RoutesName.PAYFORTOKENS)}
    >
      <span id="service_fee" className="text-xl font-semibold">
        {balance}
      </span>
      <img src={redoubt} className="h-8" alt="re:doubt logo" />
    </div>
  );
};
export default Balance;
