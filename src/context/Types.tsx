import { Dispatch, ReactChild, ReactChildren } from 'react'

export interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface IDataContextValue {
  todos: Array<ITodo>
  updateTodo?: Dispatch<React.SetStateAction<ITodo[]>>
}

export interface ISnackSpecs {
  type: 'error' | 'warning' | 'success'
  msg: string
  position: 'bottom_right' | 'bottom_left'
}

export interface IFeedbackContextValue {
  snackProps: ISnackSpecs
  isSnackVisible: boolean
  setIsSnackVisible: React.Dispatch<React.SetStateAction<boolean>>
  setSnackProps: React.Dispatch<React.SetStateAction<ISnackSpecs>>
  isLoaderVisible: boolean
  setIsLoaderVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ContextProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[]
}
