import { useState } from "react";
import cl from './DropDown.module.scss'

const DropDown = () => {
const [visible, setVisible] = useState(false)
const rootClass = [cl.dropDown]

if(visible) {
    rootClass.push(cl.active)
    console.log(rootClass)
}

    const DropDownHandler = () => {
        if(visible){
            setVisible(false)
        } else {
            setVisible(true)
        }
    }

    return (
        <>
            <div className={rootClass.join(' ')}>
                <button className={cl.btn} onClick={DropDownHandler}>TON</button>
                <ul className={cl.dropDown_menu}>
                <li className={cl.dropDown_item} onClick={() => setVisible(false)}>TON</li>
                    <li className={cl.dropDown_item} onClick={() => setVisible(false)}>Jetton</li>
                    <li className={cl.dropDown_item} onClick={() => setVisible(false)}>USDT</li>
                </ul>
            </div>
        </>
    );
};

export default DropDown