import { Graph, DropDown, Button } from '../../components/UI/index';
import { logo } from '../../images/index';

import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from '../../hooks/useTonConnect';

import { NavLink, useNavigate } from 'react-router-dom';
import { RoutesName } from '../../routes/constants';
import { useEffect, useState } from 'react';
import { API_URL } from '../../api/api';
import { TonConnectButtonV2 } from '../../components/new-ui/ton-connect';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/new-ui/select';
import { Input } from '../../components/new-ui/input';
import { cn } from '../../utils';

const Home = () => {
  const navigate = useNavigate();
  const { connected } = useTonConnect();
  const [src, setSrc] = useState('TON');
  const [authFinished, setAuthFinished] = useState(false);
  const [dst, setDst] = useState('jUSDT');
  const [value, setValue] = useState(0);

  const [userId, setUserId] = useState('');

  const KEY_USER_KEY = 'dex_optimiser_user_key';

  useEffect(() => {
    const userKey = localStorage.getItem(KEY_USER_KEY);
    if (userKey !== null) {
      setUserId(userKey);
      console.log('UserId is ', userKey);
    } else {
      fetch(API_URL + '/dexopt/api/v1/auth/payload', { method: 'POST' }).then(
        async (value) => {
          const response = await value.json();
          console.log(response);
          localStorage.setItem(KEY_USER_KEY, response['userId']);
          setUserId(response['userId']);
        }
      );
    }
  }, [userId]);

  const currency = ['jUSDT', 'jUSDC'];

  const ADDR_MAP: Record<string, string> = {
    jUSDT: 'EQBynBO23ywHy_CgarY9NK9FTz0yDsG82PtcbSTQgGoXwiuA',
    jUSDC: 'EQB-MPwrd1G6WKNkLz_VnV6WqBDd142KMQv-g1O-8QUA3728',
    jWBTC: 'EQDcBkGHmC4pTf34x3Gm05XvepO5w60DNxZ-XT4I6-UGG5L5',
  };

  function getPool(): string {
    if (src == 'TON') {
      return `dedust:EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c/${ADDR_MAP[dst]}`;
    }
    if (dst == 'TON') {
      return `dedust:EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c/${ADDR_MAP[src]}`;
    } else return '';
  }

  function handleOptimize(): void {
    if (!userId) {
      console.warn('User not authorized yet');
      return;
    }
    fetch(API_URL + '/dexopt/api/v1/optimize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        value: value,
        src: src,
        dst: dst,
        userId: userId,
      }),
    }).then(async (value) => {
      const response = await value.json();
      console.log(response);
      localStorage.setItem(
        'dex_optimiser_optimization',
        JSON.stringify(response)
      );
      navigate(RoutesName.OPTIMIZE);
    });
  }

  return (
    <div className="px-4 py-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <img src={logo} className="w-10 h-10" alt="re:doubt logo" />
        <TonConnectButtonV2
          payload={userId}
          finishAuth={(proof: string, address: string) => {
            if (authFinished) {
              return;
            }
            console.log('Finish auth');
            fetch(API_URL + '/dexopt/api/v1/auth/finish', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                proof: proof,
                address: address,
                user_id: 'TBD',
              }),
            }).then(async (value) => {
              const response = await value.json();
              console.log(response);
              if (response['auth'] === 'OK') {
                setAuthFinished(true);
              }
            });
          }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-2xl">I'm going to exchange...</h2>
        <div className="flex items-end gap-2">
          <div className="basis-2/3 flex flex-col gap-1">
            <label className="text-sm">Amount</label>
            <Input
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
              }}
            />
          </div>
          <div className="basis-1/3">
            <Select defaultValue="ton">
              <SelectTrigger className="h-12">
                <SelectValue placeholder="TON" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ton">TON</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-end gap-2">
          <div className="basis-2/3 flex flex-col gap-1">
            <label className="text-sm">To</label>

          </div>
          <div className="basis-1/3">
            <Select value={dst} onValueChange={(value) => { console.log("onValueChange", value); setDst(value); }}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="USDC" />
              </SelectTrigger>
              <SelectContent>
                {currency
                  .map((currency, index) => (<SelectItem key={index} value={currency}>{currency}</SelectItem>))
                }

              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl">
          {(import.meta.env.VITE_HIDE_GRAPH ?? 'false') === 'true' ? null : (
            <Graph pool={getPool()} />
          )}
        </div>

        <div>
          {!connected ? null : (
            <button
              className={cn(
                'rounded-2xl bg-sky-500 py-2.5 w-full font-medium transition duration-75 hover:bg-sky-400 focus:outline-none',
                (!authFinished || value <= 0) ? 'cursor-not-allowed opacity-50' : ''
              )}
              disabled={!authFinished || value <= 0}
              onClick={handleOptimize}
            >
              Optimize it for me
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
