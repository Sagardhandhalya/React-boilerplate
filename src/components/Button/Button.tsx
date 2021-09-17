import { IbuttonProps } from './Types'
import './Button.scss'
import { FC } from 'react'

const Button: FC<IbuttonProps> = ({ text, onClick, type }) => {
  return (
    <button
      className="primary_btn"
      type={type}
      onClick={() => onClick((p) => p + 1)}
      data-testid="button"
    >
      {text}
    </button>
  )
}

export default Button
