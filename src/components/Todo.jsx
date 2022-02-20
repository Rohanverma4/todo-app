import { useDispatch, useSelector } from "react-redux";
import { TodoInput } from "./TodoInput"
import { TodoList } from "./TodoList"

import {
    getTodoLoading,
    getTodoSuccess
} from '../redux/action';
import axios from "axios";


export const Todo = () => {
    const { loading, data, error} = useSelector((store) => store.todos,
        function equalityFn(prev,curr){
            if (prev.error === curr.error && prev.loading === curr.loading){
                return true;
            }
            return false;
        })
      const dispatch = useDispatch()
      const getTodos = () => {
        dispatch(getTodoLoading());
        axios.get("http://localhost:8880/todos").then(({ data }) => {
          dispatch(getTodoSuccess(data));
        });
      };

      const toggleStatus = (status,title,id) => {
            axios.put(`http://localhost:8880/todos/${id}/`, {
                title: title,
                status: !status,
            }).then(resp => {
                getTodos()
            }).catch(error => {
                console.log(error);
            });
      }

      const deleteTodo = (id) => {
        axios.delete(`http://localhost:8880/todos/${id}/`).then(resp => {
            getTodos()
        }).catch(error => {
            console.log(error);
        });
     }
    return (
        <div>
            <TodoInput getTodos= {getTodos}/>
            <TodoList getTodos= {getTodos} toggleStatus = {toggleStatus} deleteTodo = {deleteTodo} />
        </div>
    )
}