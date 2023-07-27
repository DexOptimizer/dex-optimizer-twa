import { Balance, Button } from '../../components/UI';
import arrowReverse from '../../images/arrow-revers.png';
import box from '../../images/box.png';
import { toncoin } from '../../images';
import { useNavigate } from 'react-router-dom';
import { KEY_ROUTE_KEY } from '../../store/StorageKeys';
import { Input } from '../../components/new-ui/input';
import { cn } from '../../utils';
import { MoveLeft, MoveRight } from 'lucide-react';

const DexSwap = () => {
  const navigate = useNavigate();

  const route_raw = localStorage.getItem(KEY_ROUTE_KEY);
  if (!route_raw) {
    return (
      <Button className={'button'} onClick={() => navigate(-1)}>
        Back
      </Button>
    );
  }
  const route = JSON.parse(route_raw);
  console.log(route);

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

  return (
    <div className="p-4 h-screen flex flex-col gap-8">
      {/* <div>
        <pre>{JSON.stringify(route, undefined, ' ')}</pre>
      </div> */}

      <div className="flex justify-between">
        <Button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2"
        >
          <MoveLeft />
          Back
        </Button>
        <Balance />
      </div>

      <div>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-sm">Best output</span>
            <div className="flex gap-3">
              <div className="flex h-12 w-full rounded-2xl items-center bg-gray-900 px-2.5 py-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-semibold">
                    {formatValue(route['src_value'])}
                  </span>{' '}
                  <span className="text-sm">{route['src_token']}</span>
                </div>
              </div>

              <div className="flex h-12 w-full items-center rounded-2xl bg-gray-900 px-2.5 py-2">
                <div className="flex items-baseline gap-1">
                  <span className="font-semibold text-xl">
                    {formatValue(route['output'])}
                  </span>{' '}
                  <span className="text-sm">{route['dst_token']}</span>
                </div>
              </div>
              {/* <DropDown/> */}
            </div>
          </div>

          <div>
            {(route['steps'] as []).map((step, index) => (
              <div key={index} className="flex flex-col gap-1">
                <span className="text-sm">Step {index + 1}</span>
                <div className="flex flex-col gap-1 bg-gray-900/70 rounded-2xl p-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                      <img
                        src={`https://redoubt.online/share/tondata/icons/${step['platform']}.png`}
                        className="h-10 w-10 select-none rounded-full bg-white p-px"
                      />

                      <div className="flex justify-between items-center w-full">
                        <div>
                          <span className="text-sm">From</span>

                          <div>
                            <span className="text-xl font-semibold">
                              {formatValue(step['src_amount'])}{' '}
                            </span>

                            <span className="text-sm font-normal">
                              {step['src']}
                            </span>
                          </div>
                        </div>

                        <MoveRight className="w-16" />

                        <div>
                          <span className="text-sm">To</span>

                          <div>
                            <span className="text-xl font-semibold">
                              {formatValue(step['dst_amount'])}
                            </span>{' '}
                            <span className="text-sm font-normal">
                              {step['dst']}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      onClick={() => {
                        window.Telegram?.WebApp?.openLink(step['swap_url'], {
                          try_instant_view: true,
                        });
                      }}
                      target="_blank"
                      className="rounded-xl justify-center bg-sky-500 px-3.5 h-10 flex items-center font-medium"
                    >
                      Swap
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DexSwap;
