import './DexSwap.scss'
import { Balance, Button } from '../../components/UI'
import arrowReverse from '../../images/arrow-revers.png'
import box from '../../images/box.png'
import { toncoin } from '../../images'
import { useNavigate } from 'react-router-dom'
import { KEY_ROUTE_KEY } from '../../store/StorageKeys'
import { Input } from '../../components/new-ui/input'
import { cn } from '../../utils'

const DexSwap = () => {

    const navigate = useNavigate()

    const route_raw = localStorage.getItem(KEY_ROUTE_KEY);
    if (!route_raw) {
        return (<Button className={'button'} onClick={() => navigate(-1)}>Back</Button>)
    }
    const route = JSON.parse(route_raw)
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
            useGrouping: false
        })
    }

    return (
        <>
            {/* <div>
                <pre>
                    {JSON.stringify(route, undefined, " ")}
                </pre>
            </div> */}
            <div className="header_optimize">
                <div className='left'>
                </div>
                <Balance />
            </div>
            <div className='main'>
                <span style={{ fontSize: '20px' }}>Best output:</span>
                <div className='main_output'>
                    <span style={{ backgroundColor: '', padding: '10px 10px 10px 10px' }}
                        className={cn(
                            'flex h-10 w-full rounded-xl border border-gray-800 bg-gray-900 px-2.5 py-2 text-sm outline-none focus:ring-1 focus:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-50')}
                    >{formatValue(route['src_value'])}&nbsp;{route['src_token']}</span>
                    =&gt;&nbsp;
                    <span style={{ backgroundColor: '', padding: '10px 10px 10px 10px' }}
                        className={cn(
                            'flex h-10 w-full rounded-xl border border-gray-800 bg-gray-900 px-2.5 py-2 text-sm outline-none focus:ring-1 focus:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-50')}
                    >{formatValue(route['output'])}&nbsp;{route['dst_token']}</span>
                    {/* <DropDown/> */}
                </div>
                {
                    (route['steps'] as []).map((step, index) => (
                        <div className='step' key={index}>
                            <div style={{ marginTop: '20px' }}>Steps {index + 1}</div>
                            <img src={`https://redoubt.online/share/tondata/icons/${step['platform']}.png`}
                                className={cn(
                                    'h-10 w-10 select-none rounded-full bg-white p-px'
                                )} />
                            <div className={cn('flex w-full h-10')}>
                                <span style={{ backgroundColor: '', padding: '10px 10px 10px 10px' }}
                                    className={cn(
                                        'flex h-10 w-full rounded-xl border border-gray-800 bg-gray-900 px-2.5 py-2 text-sm outline-none focus:ring-1 focus:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-50')}
                                >{formatValue(step['src_amount'])}&nbsp;{step['src']}</span>=&gt;&nbsp;
                                <span style={{ backgroundColor: '', padding: '10px 10px 10px 10px' }}
                                    className={cn(
                                        'flex h-10 w-full rounded-xl border border-gray-800 bg-gray-900 px-2.5 py-2 text-sm outline-none focus:ring-1 focus:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-50')}
                                >{formatValue(step['dst_amount'])}&nbsp;{step['dst']}</span>
                                <a
                                    href={route['swap_url']}
                                    target="_blank"
                                    className="float-right rounded-xl bg-sky-500 px-3.5 py-2 font-medium"
                                >
                                    Swap
                                </a>
                                {/* <Button className={'button'}>Swap</Button> */}
                            </div>

                        </div>
                    ))
                }


                <Button className={'button'} onClick={() => navigate(-1)}>Back</Button>
            </div>
        </>
    )
}

export default DexSwap
