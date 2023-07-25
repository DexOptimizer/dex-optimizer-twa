import './DexSwap.scss'
import { Input, DropDown, Balance, Button } from '../../components/UI'
import arrowReverse from '../../images/arrow-revers.png'
import box from '../../images/box.png'
import { toncoin } from '../../images'
import { useNavigate } from 'react-router-dom'

const DexSwap = () => {

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
                    <span style={{backgroundColor: '#80ff97', padding: '10px 10px 10px 10px'}}>1023</span>
                    <DropDown/>
                </div>
                <span style={{marginTop: '20px'}}>Steps 1</span>
                <div className='step'>
                    <div className='main_output'>
                        <span>750</span>
                        <DropDown/>
                    </div>
                    <div className='icons'>
                        <img style={{width: '65px'}} src={arrowReverse}/>
                        <img style={{width: '65px'}} src={toncoin}/>
                    </div>
                    <div className='main_output'>
                        <span style={{backgroundColor: '#80ff97', padding: '10px 10px 10px 10px'}}>510</span>
                        <DropDown/>
                    </div>
                </div>
                <hr style={{backgroundColor: '#ddd', height: '1px', width: '100%'}}/>
                <span style={{marginTop: '20px'}}>Steps 2</span>
                <div className='step'>
                    <div className='main_output'>
                        <span>750</span>
                        <DropDown/>
                    </div>
                    <div className='icons'>
                        <img style={{width: '65px'}} src={arrowReverse}/>
                        <img style={{width: '65px'}} src={box}/>
                    </div>
                    <div className='main_output'>
                        <span style={{backgroundColor: '#80ff97', padding: '10px 10px 10px 10px'}}>513</span>
                        <DropDown/>
                    </div>
                </div>

                <Button className={'button'} onClick={() => navigate(-1)}>Back</Button>
            </div>
        </>
    )
}

export default DexSwap
