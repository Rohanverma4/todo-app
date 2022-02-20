import { useEffect } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './todoList.css'

export const TodoList = ( { getTodos,toggleStatus,deleteTodo } ) =>{
    const navigate = useNavigate();
    const { data } = useSelector((store) => store.todos); 
    useEffect(() => {
       getTodos()
    },[])
    return (
    <div className="itemsDiv" >
        {data.map((e) => {
            return <ListItems 
                        id = {e.id} 
                        title = {e.title} 
                        status = {e.status} 
                        toggleStatus={toggleStatus} 
                        deleteTodo={deleteTodo}
                        navigate= {navigate} 
                        />
                   })} 
    </div>
    )
}

function ListItems({id,title,status,toggleStatus,deleteTodo,navigate}){
    return (
        <div className="listItemDiv">
            <h4
               onClick={() => navigate(`/todos/${id}`)}>{title}</h4>
            <button
                 className="status"
                 onClick={() => toggleStatus(status,title,id)}>{status ? "Done" : "Todo"}</button>
            <button
                 className="edit"
                 onClick={() => navigate(`/todos/${id}/edit`)}
                 >Edit</button>
            <button 
                 className="delete"
                 onClick={() => deleteTodo(id)}>Delete</button>
        </div>
    )
}