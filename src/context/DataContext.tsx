import { createContext, useContext, useEffect, useState } from 'react'
import { makeRequest } from '../services/Fetch'
import { useFeedbackContext } from './FeedbackContext'
import { ContextProps, IDataContextValue, ITodo } from './Types'
const initialState = {
  todos: [],
}
const dataContext = createContext<IDataContextValue>(initialState)

const DataContext = ({ children }: ContextProps) => {
  const [todos, setTodos] = useState<Array<ITodo>>(initialState.todos)
  const { setIsSnackVisible, setSnackProps, setIsLoaderVisible } =
    useFeedbackContext()
  useEffect(() => {
    setIsLoaderVisible(true)
    makeRequest({
      method: 'GET',
      url: '/todos?_start=10&_limit=5',
    })
      .then((res) => {
        setTodos(res.data)
        setIsLoaderVisible(false)
      })
      .catch((err) => {
        setIsLoaderVisible(false)
        setIsSnackVisible(true)
        setSnackProps({
          type: 'error',
          msg: err.message as string,
          position: 'bottom_right',
        })
      })
  }, [setIsLoaderVisible, setIsSnackVisible, setSnackProps])
  return (
    <dataContext.Provider value={{ todos: todos, updateTodo: setTodos }}>
      {children}
    </dataContext.Provider>
  )
}

export const useDataContext = () => useContext(dataContext)

export default DataContext
