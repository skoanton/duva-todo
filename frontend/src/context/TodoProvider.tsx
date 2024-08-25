import { useReducer } from "react";
import { initialTodosState, todoReducer } from "./TodoReducer";
import { TodoContext } from "./TodoContext";

type TodoProviderProps = {
  children: React.ReactNode;
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, initialTodosState);

  return (
    <TodoContext.Provider value={{ todoState, todoDispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
