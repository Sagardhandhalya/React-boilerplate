import { FC, useEffect } from 'react'
import './SnackBar.scss'
import { ISnackBarProps } from './Types'

const SnackBar: FC<ISnackBarProps> = ({
  text,
  type,
  close,
  position,
  visible,
}) => {
  useEffect(() => {
    setTimeout(() => {
      close(false)
    }, 2000)
  }, [close])
  return visible ? (
    <div className={`snackbar__container ${type} ${position}`}>
      <div>
        {text}
        <button onClick={() => close(false)}>&#x2715;</button>
      </div>
    </div>
  ) : (
    <div></div>
  )
}

export default SnackBar
