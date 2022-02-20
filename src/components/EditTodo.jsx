import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './EditTodo.css'

export const EditTodo = () => {
    const [inputValue, setInputValue] = useState("Title")
    const [givenStatus, setGivenStatus] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()
    // console.log(editTodoData)

    useEffect(() => {
        getSingleData()
    },[])
 
    const getSingleData = () => {
         axios.get(`http://localhost:8880/todos/${id}`).
         then(resp => {
             var data = resp.data;
            //  setEditTodoData(data);
             setInputValue(data.title)
             setGivenStatus(data.status)
         })
         .catch(error => {
             console.log(error);
         })
    }

    const handleUpdate = () => {
        if(inputValue){
            axios.put(`http://localhost:8880/todos/${id}/`, {
                title: inputValue,
                status: givenStatus,
            }).then(resp => {
                console.log(resp.data);
                navigate('/')
            }).catch(error => {
                console.log(error);
            });
        }
    }
    return (
        <>
          <button
                className="back" 
                onClick={() => navigate('/')}>Back</button>
            <div className="editDiv">
                <input 
                value = {inputValue}
                onChange={(e) => setInputValue(e.target.value)} />
                <button
                    className="update" 
                    onClick={() => handleUpdate()}>Update</button>
            </div>
        </>
        )
}