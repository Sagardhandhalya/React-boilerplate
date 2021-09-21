export interface ISnackBarProps {
  type: 'error' | 'warning' | 'success'
  close: React.Dispatch<React.SetStateAction<boolean>>
  text: string
  position: 'bottom_left' | 'bottom_right'
  visible: boolean
}
