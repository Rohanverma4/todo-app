import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import './SingleTodo.css'
import { useNavigate } from "react-router-dom";

export const SingleTodo = () => {
   const {id} = useParams();
   const [singleTodoData,setSingleTodoData] = useState([]);
   const navigate = useNavigate()

   useEffect(() => {
       getSingleData()
   },[])

   const getSingleData = () => {
        axios.get(`http://localhost:8880/todos/${id}`).
        then(resp => {
            var data = resp.data;
            setSingleTodoData(data);
        })
        .catch(error => {
            console.log(error);
        })
   }

   
    return (
        <div className="singleTodoDiv">
            <h4>{singleTodoData.title}</h4>
            <button
               onClick={() => navigate('/')}>Back</button>
        </div>
    )
}