import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import {
  useTonAddress,
  useTonConnectUI,
  TonConnectUI,
  toUserFriendlyAddress,
} from '@tonconnect/ui-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDown, Loader2 } from 'lucide-react';
import { KEY_AUTH_FINISHED, KEY_USER_KEY } from '../../store/StorageKeys';

type TonConnectButtonProps = {
  payload: string;
  finishAuth: (proof: string, address: string) => void;
} & HTMLAttributes<HTMLButtonElement>;

export function TonConnectButtonV2(props: TonConnectButtonProps) {
  const [tonConnectUI] = useTonConnectUI();
  const address = useTonAddress();
  const connected = localStorage.getItem('ton-connect-ui_wallet-info');

  const connect = async () => {
    tonConnectUI.setConnectRequestParameters({ state: 'loading' });

    if (props.payload) {
      tonConnectUI.setConnectRequestParameters({
        state: 'ready',
        value: { tonProof: props.payload },
      });
    } else {
      tonConnectUI.setConnectRequestParameters(null);
    }

    tonConnectUI.connectWallet();
  };

  tonConnectUI.onStatusChange((wallet) => {
    console.log(wallet);
    const cached = localStorage.getItem('ton-proof');
    if (wallet && cached !== null) {
      props.finishAuth(cached, toUserFriendlyAddress(wallet.account.address));
    }
    if (wallet?.connectItems?.tonProof) {
      props.finishAuth(
        JSON.stringify(wallet.connectItems.tonProof, null, 0),
        toUserFriendlyAddress(wallet.account.address)
      );
      localStorage.setItem(
        'ton-proof',
        JSON.stringify(wallet.connectItems.tonProof, null, 0)
      );
    }
  });

  return (
    <>
      {!connected ? (
        <button onClick={connect} {...props}>
          <div className="rounded-2xl bg-sky-500 py-2.5 px-4 font-medium transition duration-75 hover:bg-sky-400 focus:outline-none text-white">
            Connect Wallet
          </div>
        </button>
      ) : (
        <Dropdown
          address={address}
          tonConnectUI={tonConnectUI}
          fullWidth={false}
        />
      )}
    </>
  );
}

type DropdownProps = {
  address: string;
  tonConnectUI: TonConnectUI;
  fullWidth?: boolean;
} & HTMLAttributes<HTMLDivElement>;

function Dropdown({ address, tonConnectUI, fullWidth }: DropdownProps) {
  const slicedAddress = address.slice(0, 4) + '...' + address?.slice(-4);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [triggerWidth, setTriggerWidth] = useState<number>(0);

  useEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, [address]);

  const disconnect = () => {
    console.log("Remove saved session")
    tonConnectUI.disconnect();
    localStorage.removeItem('ton-proof');
    localStorage.removeItem(KEY_AUTH_FINISHED);
    localStorage.removeItem(KEY_USER_KEY);
    location.reload()
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger ref={triggerRef}>
        <div className="relative flex items-center rounded-2xl bg-gray-900 py-2.5 px-3 hover:bg-gray-800 justify-between gap-2">
          <div className="px-1">
            {address ? (
              slicedAddress
            ) : (
              <Loader2 strokeWidth={1.5} className="animate-spin" />
            )}
          </div>

          <ChevronDown strokeWidth={1.5} className="relative top-px h-4 w-4" />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={10}
          className="z-50 flex flex-col rounded-2xl bg-gray-900 p-2"
        >
          <DropdownMenu.Item>
            <button
              className="w-full rounded-xl px-5 py-3 button text-left bg-gray-900 hover:bg-gray-800 focus:outline-none"
              onClick={() => navigator.clipboard.writeText(address)}
            >
              Copy address
            </button>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <button
              className="w-full rounded-xl px-5 py-3 button text-left bg-gray-900 hover:bg-gray-800"
              onClick={disconnect}
            >
              Disconnect
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
