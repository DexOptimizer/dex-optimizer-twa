import './Optimize.scss'
import { toncoin } from '../../images/index'
import { Button, Balance, Input, DropDown } from "../../components/UI/index";
import {useNavigate} from "react-router-dom";
import { RoutesName } from "../../routes/constants";

const Optimize = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="header_optimize">
        <div className='left'>
          <Input/>
          <DropDown/>
        </div>
        <Balance/>
      </div>
      <div className='main'>
        <span style={{fontSize: '20px'}}>Best output:</span>
        <div className='main_output'>
          <span>1023</span>
          <DropDown/>
        </div>

        <div className='main_routes'>
          <Button className={'button'} onClick={() => navigate(RoutesName.DEXSWAP)} ><p style={{color:'#fff'}}>View routes</p></Button>
          <span>for</span>
          <span>2.1</span>
          <img src={toncoin} style={{width: '3rem'}} alt=''/>
        </div>

        <div className='wrapper'>
          <Button className={'button'} onClick={() => navigate(RoutesName.PAYFORTOKENS)}><span style={{color:'#fff'}}>Buy more ST</span></Button>
        </div>

        <div className='swaps'>
          <h1 className='swaps_text'>The best single swap route:</h1>
          <span className='swaps_num'>-21$</span>
          <h1 className='swaps_text'>The worst single swap route:</h1>
          <span className='swaps_num'>-78$</span>
        </div>
        
        <Button className={'button'} onClick={() => navigate(-1)}>Back</Button>
      </div>
    </>
  )
}
export default Optimize