import { useState } from 'react'

export const useSnackBar = (): [
  ISnackSpecs,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  React.Dispatch<React.SetStateAction<ISnackSpecs>>
] => {
  const [snackSpecs, setSnackSpecs] = useState<ISnackSpecs>({
    type: 'error',
    msg: 'Demo error',
    position: 'bottom_right',
  })
  const [isSnakOpen, setIsSnakOpen] = useState(false)

  return [snackSpecs, isSnakOpen, setIsSnakOpen, setSnackSpecs]
}

interface ISnackSpecs {
  type: 'error' | 'warning' | 'success'
  msg: string
  position: 'bottom_right' | 'bottom_left'
}
