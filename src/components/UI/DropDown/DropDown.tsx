import React, { useState } from "react";
import cl from './DropDown.module.scss'
import arrow from '../../../images/arrow-down.png'

interface IDropDownProps {
  onSelect: (value: string) => void,
  value: string,
  allowed: string[]
}

const DropDown: React.FC<IDropDownProps> = ({ onSelect, value, allowed }) => {
  const [dropDownTitle, setDropDownTitle] = useState(value);
  const [visible, setVisible] = useState(false);
  const rootClass = [cl.dropDown];

  if (visible) {
    rootClass.push(cl.active);
  }

  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    setVisible(false);
    setDropDownTitle(event.currentTarget.textContent || '')
    onSelect(event.currentTarget.textContent || '');
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
        <button className={cl.btn} onClick={DropDownHandler}>{dropDownTitle}<img className={cl.arrowDown} src={arrow} alt='' /></button>
        <ul className={cl.dropDown_menu}>
          {allowed.map((item, index) =>
            <li id={index.toString()} key={item} className={cl.dropDown_item} onClick={onClickHandler}>{item}</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default DropDown