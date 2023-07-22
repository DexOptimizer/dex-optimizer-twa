import './Button.scss'
import React from "react";

interface IButtonProps {
  onClick?: () => void,
  children: React.ReactNode | string,
  className?: string
}

const Button: React.FC<IButtonProps> = ({onClick, children, className}) => {
    return (
        <>
            <button className={className} onClick={onClick}>
              {children}
            </button>
        </>
    )
}

export default Button