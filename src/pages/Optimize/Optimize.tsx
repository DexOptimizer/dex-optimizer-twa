import './Optimize.scss'

import DropDown from "../../components/UI/DropDown/DropDown"
import Input from "../../components/UI/Input/Input"
import Balance from '../../components/UI/Balance/Balance'

import ton from '../../images/toncoin.png'

const Optimize = () => {
    return(
        <>
            <div className="header_optimize">
                <div className='left'>
                    <Input/>
                    <DropDown/>
                </div>
                <Balance/>
            </div>
            <div className='main'>
                <p>Best output:</p>
                <div className='main_output'>
                    <span>1023</span>
                    <DropDown/>
                </div>

                <div className='main_routes'>
                    <button className='routes-button'>View routes</button>
                    <p>for</p>
                    <span>2.1</span>
                    <img src={ton} style={{width: '3rem'}} />
                </div>

                <div className='wrapper'>
                    <button className='wrapper_button'>Buy more ST</button>
                </div>

                <div className='swaps'>
                    <h1 className='swaps_text'>The best single swap route:</h1>
                    <span className='swaps_num'>-21$</span>
                    <h1 className='swaps_text'>The worst single swap route:</h1>
                    <span className='swaps_num'>-78$</span>
                </div>

            </div>
        </>
    )
}
export default Optimize