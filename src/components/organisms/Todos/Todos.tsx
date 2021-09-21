import { useState } from 'react'
import { useDataContext } from '../../../context/DataContext'
import { ITodo } from '../../../context/Types'
import { useSnackBar } from '../../../helper/hooks/UseSnackBar'
import { makeRequest } from '../../../services/Fetch'
import Button from '../../atoms/Button/Button'
import Loader from '../../atoms/Loader/Loader'
import SnackBar from '../../molecules/SnackBar/SnackBar'
import delete_icon from './../../../assets/delete-button.svg'
import './Todos.scss'

const Todos = () => {
  const { todos, updateTodo } = useDataContext()
  const [loading, setLoading] = useState(false)
  const [snack, open, setOpen, setSnack] = useSnackBar()
  const [todoText, setTodoText] = useState('')

  const addNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (todoText.length > 0) {
      setLoading(true)
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
          setLoading(false)
          setOpen(true)
          setSnack({
            type: 'success',
            msg: 'todo added successfuly',
            position: 'bottom_left',
          })
        })
        .catch((err) => {
          setOpen(true)
          setSnack({
            type: 'error',
            msg: err.message,
            position: 'bottom_right',
          })
          setLoading(false)
        })
    }
  }

  const deleteTodo = (todo: ITodo) => {
    setLoading(true)
    makeRequest({
      method: 'DELETE',
      url: `/todos/${todo.id}`,
      data: {
        completed: !todo.completed,
      },
    })
      .then(() => {
        setLoading(false)
        updateTodo?.(todos.filter((t) => t.id !== todo.id))
        setOpen(true)
        setSnack({
          type: 'success',
          msg: 'todo Deleted successfuly',
          position: 'bottom_left',
        })
      })
      .catch((err) => {
        setOpen(true)
        setSnack({
          type: 'error',
          msg: err.message,
          position: 'bottom_right',
        })
        setLoading(false)
      })
  }

  const toggleCompleted = (todo: ITodo) => {
    setLoading(true)
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
        setLoading(false)
      })
      .catch((err) => {
        setOpen(true)
        setSnack({
          type: 'error',
          msg: err.message,
          position: 'bottom_right',
        })
        setLoading(false)
      })
  }

  return (
    <div className="main__todo_container">
      <Loader visible={loading} />

      <SnackBar
        text={snack.msg}
        type={snack.type}
        close={setOpen}
        position={snack.position}
        visible={open}
      />

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
