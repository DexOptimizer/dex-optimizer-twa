import { redoubt, toncoin } from '../../images/index';
import { Button, Balance } from '../../components/UI/index';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../routes/constants';
import { useCallback, useState } from 'react';
import { Input } from '../../components/new-ui/input';
import { cn } from '../../utils';
import { useTonConnect } from '../../hooks/useTonConnect';
import { Address, toNano } from 'ton';
import { API_URL } from '../../api/api';
import { toUserFriendlyAddress } from '@tonconnect/ui';
import { MoveLeft } from 'lucide-react';

const PayForTokens = () => {
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  const [value, setValue] = useState(0);

  const navigate = useNavigate();
  const { sender, connected, wallet } = useTonConnect();

  const vault = 'EQCvD46AlxdLvai4N3Pg7r6WtAOcTd9TZ-Qx0EBlK-C6oy9l';

  function handleUpdate(): void {
    if (!wallet) {
      return;
    }
    fetch(API_URL + '/dexopt/api/v1/payment/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: toUserFriendlyAddress(wallet),
      }),
    }).then(async (value) => {
      const response = await value.json();
      console.log(response);
      forceUpdate();
    });
  }

  function handlePayment(): void {
    sender.send({
      to: Address.parse(vault),
      value: toNano(value) / 10n,
    });
  }

  return (
    <div className="p-4 h-screen">
      <div className="flex justify-between">
        <Button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2"
        >
          <MoveLeft />
          Back
        </Button>{' '}
        <Balance />
      </div>

      <div className="h-[80%] flex flex-col justify-center gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="amount">Amount of tokens you want to buy</label>
          <div className="flex items-center relative">
            <Input
              id="amount"
              className="w-full text-lg h-12 font-semibold placeholder:text-gray-500"
              type="number"
              pattern="\d*"
              placeholder="Amount"
              onChange={(e) => {
                if (e.target.value === '') {
                  setValue(0);
                } else {
                  setValue(parseInt(e.target.value));
                }
                console.log(value);
              }}
            />
            <img
              src={redoubt}
              className="h-8 absolute right-2"
              alt="re:doubt logo"
            />
          </div>
        </div>

        <div className="flex relative items-center gap-1.5">
          <Input
            className="h-12 text-lg font-semibold border-none disabled:opacity-100"
            value={value / 10}
            disabled={true}
          />
          <img
            src={toncoin}
            className="h-7 absolute right-2.5"
            alt="TON logo"
          />
        </div>

        <button
          className={cn(
            'rounded-2xl bg-sky-500 py-2.5 w-full font-medium transition duration-75 hover:bg-sky-400 focus:outline-none',
            !connected || value <= 0 ? 'cursor-not-allowed opacity-50' : ''
          )}
          disabled={!connected || value <= 0}
          onClick={handlePayment}
        >
          Pay
        </button>

        <button
          className={cn(
            'rounded-2xl bg-sky-500 py-2.5 w-full font-medium transition duration-75 hover:bg-sky-400 focus:outline-none'
          )}
          onClick={handleUpdate}
        >
          Check payment
        </button>
      </div>
    </div>
  );
};
export default PayForTokens;
