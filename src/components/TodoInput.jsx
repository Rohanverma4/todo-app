import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { store } from '../redux/store'
import axios from 'axios'
import { v4 as uuid } from 'uuid'

import {
    addTodoLoading,
    addTodoSuccess,
} from '../redux/action';

import './TodoInput.css'
export const TodoInput = ({ getTodos }) => {
    const { loading} = useSelector((store) => store.todos, 
      function equalityFn(prev,curr){
          if (prev.error === curr.error && prev.loading === curr.loading){
              return true;
          }
          return false;
      })

      const dispatch = useDispatch()
    const [task, setTask] = useState("")

    const handleAddTodo = (task) =>{
        if (task.length !== 0){
                dispatch(addTodoLoading())
                axios.post("http://localhost:8880/todos",{
                    title: task,
                    status: false,
                    id: uuid(),
                })
                .then((data) => {
                    dispatch(addTodoSuccess())
                    getTodos()
                    setTask("")
                })
                .catch(() =>{
                    //error
                })
            }
        }

    return loading ? (
        "Loading...."
      ) : (
      <div className = "mainDiv">
          <input 
                type="text" onChange={(e) => setTask(e.target.value)}
                placeholder='todo details'/>
          <button 
                onClick={() => handleAddTodo(task)}>Add Todo</button>
      </div>
    )
}