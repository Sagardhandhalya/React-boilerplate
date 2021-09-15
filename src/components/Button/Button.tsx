import { IbuttonProps } from './Types'
import './Button.scss'
import { FC } from 'react'

const Button: FC<IbuttonProps> = ({ text, onClick }) => {
  return (
    <button className="primary_btn" onClick={() => onClick((p) => p + 1)}>
      {text}
    </button>
  )
}

export default Button
