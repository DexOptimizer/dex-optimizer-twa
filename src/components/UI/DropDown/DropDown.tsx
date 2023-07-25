import React, {useState} from "react";
import cl from './DropDown.module.scss'
import arrow from '../../../images/arrow-down.png'

const DropDown = () => {
  const [dropDownTitle, setDropDownTitle] = useState('TON');
  const [currency, setCurrency] = useState([
    {id: 1, name: 'TON', value: 'ton'},
    {id: 2, name: 'Jetton', value: 'jetton'},
    {id: 3, name: 'USDT', value: 'usdt'},
  ]);
  const [visible, setVisible] = useState(false);
  const rootClass = [cl.dropDown];

  if (visible) {
    rootClass.push(cl.active);
  }

  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    setVisible(false);
    setDropDownTitle(event.currentTarget.textContent || '')
  }
  const DropDownHandler = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  return (
    <>
      <div className={rootClass.join(' ')}>
        <button className={cl.btn} onClick={DropDownHandler}>{dropDownTitle}<img className={cl.arrowDown} src={arrow} alt=''/></button>
        <ul className={cl.dropDown_menu}>
          {currency.map(item =>
            <li id={item.value} key={item.id} className={cl.dropDown_item} onClick={onClickHandler}>{item.name}</li>
          )}
          {/*<li className={cl.dropDown_item} onClick={() => setVisible(false)}>TON</li>*/}
          {/*<li className={cl.dropDown_item} onClick={() => setVisible(false)}>Jetton</li>*/}
          {/*<li className={cl.dropDown_item} onClick={() => setVisible(false)}>USDT</li>*/}
        </ul>
      </div>
    </>
  );
};

export default DropDown