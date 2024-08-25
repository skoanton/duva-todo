import Todos from "@/types/todos"
import { TodoActions } from "./TodoContext"

export enum TODO_ACTIONS{
    ADD = "ADD",
    REMOVE = "REMOVE",
    UPDATE = "UPDATE",
}

export type TodoState = {
    todo: Todos[]
}

export const initialTodosState: TodoState = {
    todo: []
}

export const todoReducer = (todoState: TodoState,action: TodoActions):TodoState => {
    switch(action.type){
        case TODO_ACTIONS.ADD: {

            return {...todoState, todo: [...todoState.todo, action.payload]};
        }

        case TODO_ACTIONS.REMOVE: {
            return {...todoState, todo: todoState.todo.filter(todo => todo.id !== action.payload.id)};
        }

        case TODO_ACTIONS.UPDATE: { 
            return {
                ...todoState, 
                todo: todoState.todo.map(todo => 
                    todo.id === action.payload.id 
                        ? { ...todo, ...action.payload } 
                        : todo
                )
            };
        }
        default:
            return todoState;
    }
}