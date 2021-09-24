import { FC, useEffect } from 'react'
import './SnackBar.scss'
import { ISnackBarProps } from './Types'

const SnackBar: FC<ISnackBarProps> = ({ snackSpecs, visible }) => {
  console.log(snackSpecs)

  useEffect(() => {
    setTimeout(() => {
      snackSpecs.close?.(false)
    }, 5000)
  }, [visible, snackSpecs])
  return visible ? (
    <div
      className={`snackbar__container ${snackSpecs.type} ${snackSpecs.position}`}
    >
      <div>
        {snackSpecs.msg}
        <button onClick={() => snackSpecs.close?.(false)}>&#x2715;</button>
      </div>
    </div>
  ) : (
    <div></div>
  )
}

export default SnackBar
