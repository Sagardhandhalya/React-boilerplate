export interface ISnackBar {
  type: 'error' | 'warning' | 'success'
  close: React.Dispatch<React.SetStateAction<boolean>>
  msg: string
  position: 'bottom_left' | 'bottom_right'
}

export interface ISnackBarProps {
  snackSpecs: ISnackBar
  visible: boolean
}
