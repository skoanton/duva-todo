type TodoItemsProps = {};
import { ScrollArea } from "@/components/ui/scroll-area";
import TodoItem from "./TodoItem";
import { useFetch } from "@/hooks/useFetch";
import { useContext, useEffect } from "react";
import { TodoContext } from "@/context/TodoContext";
import { TODO_ACTIONS } from "@/context/TodoReducer";
export default function TodoItems({}: TodoItemsProps) {
  const { data, loading } = useFetch("/todos");

  const { todoState, todoDispatch } = useContext(TodoContext);

  useEffect(() => {
    if (data) {
      data.forEach((todo) => {
        todoDispatch({ type: TODO_ACTIONS.ADD, payload: todo });
      });
    }
  }, [data]);

  return (
    <>
      <ScrollArea className="bg-gray-100 h-[600px] w-full rounded-md border p-4 md:w-1/3 md:self-center">
        <ul className="flex flex-col gap-2">
          {todoState &&
            todoState.todo.map((todo) => (
              <TodoItem key={todo.id} todoItem={todo} />
            ))}
        </ul>
      </ScrollArea>
    </>
  );
}
