import { toncoin } from '../../images/index';
import { redoubt } from '../../images/index';
import { Button, Balance, Input, DropDown } from '../../components/UI/index';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../routes/constants';
import { useEffect, useState } from 'react';
import { API_URL } from '../../api/api';
import { KEY_ROUTE_KEY, KEY_USER_KEY } from '../../store/StorageKeys';
import { MoveLeft, Plus } from 'lucide-react';

function formatValue(v: number) {
  if (!v) {
    return '0';
  }
  return v.toLocaleString('en-US', {
    // minimumIntegerDigits: 3,
    // minimumFractionDigits: 2,
    // maximumSignificantDigits: 2,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    useGrouping: false,
  });
}

const Optimize = () => {
  const [balance, setBalance] = useState(0);

  const userId = localStorage.getItem(KEY_USER_KEY);

  const optimization_raw = localStorage.getItem('dex_optimiser_optimization');
  if (!optimization_raw) {
    return <Button onClick={() => navigate(-1)}>Back</Button>;
  }
  const optimization = JSON.parse(optimization_raw);
  console.log(optimization);

  const navigate = useNavigate();

  function handleViewRoutes(): void {
    () => navigate(RoutesName.DEXSWAP);
    fetch(API_URL + '/dexopt/api/v1/view', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reportId: optimization['response_id'],
        userId: userId,
      }),
    })
      .then(async (value) => {
        const response = await value.json();
        console.log(response);
        localStorage.setItem(KEY_ROUTE_KEY, JSON.stringify(response));
        navigate(RoutesName.DEXSWAP);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  return (
    <div className="p-4 h-screen max-h-screen">
      <div className="flex h-10 items-center justify-between">
        <Button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2"
        >
          <MoveLeft />
          Back
        </Button>

        <div className="flex items-center gap-2">
          <Balance />
          <button
            className="flex h-10 items-center rounded-2xl bg-sky-500 pl-3.5 pr-2"
            onClick={() => navigate(RoutesName.PAYFORTOKENS)}
          >
            <span className="font-medium">Buy more</span>
            <Plus className="mt-px h-4 stroke-[3]" />
          </button>
        </div>
      </div>

      <div className="flex h-[80%] flex-col justify-center">
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-xl font-semibold">
              {optimization['start_value']}{' '}
            </span>
            <span className="text-sm">{optimization['src_token']}</span>
          </div>

          <div className="bg-gray-800/70 rounded-2xl p-3 flex justify-between items-center">
            <span className="text-sm">Best output</span>
            <div className="max-w-fit rounded-2xl">
              <span className="text-xl font-semibold">
                {formatValue(optimization['best_output'])}
              </span>{' '}
              <span className="text-sm">{optimization['dst_token']}</span>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex gap-1 flex-col">
              <h2 className="text-sm">The best single swap route</h2>
              <span className="bg-red-500 max-w-fit px-3 rounded-xl py-1.5">
                -{formatValue(optimization['best_single_swap_delta'])}$
              </span>
            </div>
            <div className="flex gap-1 flex-col">
              <h2 className="text-sm">The worst single swap route:</h2>
              <span className="bg-red-500 max-w-fit px-3 rounded-xl py-1.5">
                -{formatValue(optimization['worst_single_swap_delta'])}$
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="rounded-2xl bg-sky-500 py-2.5 w-full font-medium transition duration-75 hover:bg-sky-400 focus:outline-none"
              onClick={handleViewRoutes}
            >
              View routes
            </button>
            <div className="flex items-baseline gap-1">
              <span>for </span>
              <div className="flex items-center gap-0.5">
                <span>{optimization['price_tokens']}</span>
                <img src={redoubt} className="h-8" alt="re:doubt logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Optimize;
