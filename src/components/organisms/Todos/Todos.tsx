import { useState } from 'react'
import { useDataContext } from '../../../context/DataContext'
import { useFeedbackContext } from '../../../context/FeedbackContext'
import { ITodo } from '../../../context/Types'
import { makeRequest } from '../../../services/Fetch'
import Button from '../../atoms/Button/Button'
import delete_icon from './../../../assets/delete-button.svg'
import './Todos.scss'

const Todos = () => {
  const { todos, updateTodo } = useDataContext()
  const { setIsSnackVisible, setSnackProps, setIsLoaderVisible } =
    useFeedbackContext()
  const [todoText, setTodoText] = useState('')

  const addNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (todoText.length > 0) {
      setIsLoaderVisible(true)
      makeRequest({
        method: 'POST',
        url: '/todos',
        data: {
          title: todoText,
          userId: 1,
          completed: false,
        },
      })
        .then((res) => {
          updateTodo?.([...todos, res.data])
          setTodoText('')
          setIsLoaderVisible(false)
          setIsSnackVisible(true)
          setSnackProps({
            type: 'success',
            msg: 'todo added successfuly',
            position: 'bottom_left',
          })
        })
        .catch((err) => {
          setIsSnackVisible(true)
          setSnackProps({
            type: 'error',
            msg: err.message,
            position: 'bottom_right',
          })
          setIsLoaderVisible(false)
        })
    }
  }

  const deleteTodo = (todo: ITodo) => {
    setIsLoaderVisible(true)
    makeRequest({
      method: 'DELETE',
      url: `/todos/${todo.id}`,
      data: {
        completed: !todo.completed,
      },
    })
      .then(() => {
        setIsLoaderVisible(false)
        updateTodo?.(todos.filter((t) => t.id !== todo.id))
        setIsSnackVisible(true)
        setSnackProps({
          type: 'success',
          msg: 'todo Deleted successfuly',
          position: 'bottom_left',
        })
      })
      .catch((err) => {
        setIsSnackVisible(true)
        setSnackProps({
          type: 'error',
          msg: err.message,
          position: 'bottom_right',
        })
        setIsLoaderVisible(false)
      })
  }

  const toggleCompleted = (todo: ITodo) => {
    setIsLoaderVisible(true)
    makeRequest({
      method: 'PATCH',
      url: `/todos/${todo.id}`,
      data: {
        title: todo.title,
        completed: !todo.completed,
        userId: 1,
      },
    })
      .then((res) => {
        updateTodo?.(
          todos.map((todos) => (todos.id === todo.id ? res.data : todos))
        )
        setIsLoaderVisible(false)
      })
      .catch((err) => {
        setIsSnackVisible(true)
        setSnackProps({
          type: 'error',
          msg: err.message,
          position: 'bottom_right',
        })
        setIsLoaderVisible(false)
      })
  }

  return (
    <div className="main__todo_container">
      <form className="form__container" onSubmit={(e) => addNewTodo(e)}>
        <input
          type="text"
          className="addinput"
          name="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="make coffee"
        />

        <Button text="+ Add Todo" type="submit" onClick={() => addNewTodo} />
      </form>
      <div className="todo__container">
        {todos.length > 0 ? (
          todos.map((todo, idx) => (
            <div className="todo" key={idx}>
              <span>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCompleted(todo)}
                />
                <span className={todo.completed ? 'completed' : ''}>
                  {todo.title}
                </span>
              </span>

              <span>
                <button onClick={() => deleteTodo(todo)}>
                  <img
                    alt="delete icon"
                    src={delete_icon}
                    width={30}
                    height={30}
                    color="red"
                  />
                </button>
              </span>
            </div>
          ))
        ) : (
          <div className="todo_notfound">No todo to show</div>
        )}
      </div>
    </div>
  )
}

export default Todos
