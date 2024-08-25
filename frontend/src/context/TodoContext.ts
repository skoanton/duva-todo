


import { createContext } from "react";
import { TodoState, TODO_ACTIONS,initialTodosState} from "./TodoReducer";
import Todos from "@/types/todos";

export type TodoActions = 
    { type: TODO_ACTIONS.ADD | TODO_ACTIONS.REMOVE | TODO_ACTIONS.UPDATE;
    payload: Todos 
};
    



export const TodoContext = createContext(<{
    todoState: TodoState;
    todoDispatch: React.Dispatch<TodoActions>;
    }>{
    todoState: initialTodosState,
    todoDispatch: () => null,
});

