import { Dispatch, ReactChild, ReactChildren } from 'react'

export interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface IContextValue {
  todos: Array<ITodo>
  updateTodo?: Dispatch<React.SetStateAction<ITodo[]>>
}

export interface ContextProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[]
}
