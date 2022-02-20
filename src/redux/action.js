
import {
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
} from './actionTypes';

export const addTodoLoading = () =>{
    return {
        type: ADD_TODO_LOADING
    }
}

export const addTodoSuccess = (payload) =>{
    return {
        type: ADD_TODO_SUCCESS,
        payload,
    }
}

export const getTodoLoading = () =>{
    return {
        type: GET_TODO_LOADING
    }
}

export const getTodoSuccess = (payload) =>{
    return {
        type: GET_TODO_SUCCESS,
        payload,
    }
}