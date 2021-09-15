import { IbuttonProps } from './Types'
import './Button.scss'

const Button = ({ text, onClick }: IbuttonProps) => {
  return (
    <button className="primary_btn" onClick={() => onClick((p) => p + 1)}>
      {text}
    </button>
  )
}

export default Button
