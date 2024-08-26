type TodoItemProps = {
  todoItem: Todos;
};
import { Checkbox } from "@/components/ui/checkbox";
import Todos from "@/types/todos";
import { useDelete } from "@/hooks/useDelete";
import { useContext, useState } from "react";
import { TodoContext } from "@/context/TodoContext";
import { TODO_ACTIONS } from "@/context/TodoReducer";
import DeleteDialog from "./DeleteDialog";

import EditDialog from "./EditDialog";

export default function TodoItem({ todoItem }: TodoItemProps) {
  const { deleteData } = useDelete(`/todos/${todoItem.id}`);
  const [checked, setChecked] = useState(false);
  const { todoDispatch } = useContext(TodoContext);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCheckedChange = async (checked: boolean) => {
    setChecked(checked);
    setIsAnimating(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    await deleteData();
    todoDispatch({ type: TODO_ACTIONS.REMOVE, payload: todoItem });
  };

  return (
    <>
      <li
        className={`bg-white p-3 flex items-center justify-between rounded-xl transition-transform duration-300 ${
          isAnimating ? "transform scale-95 opacity-50" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          <Checkbox onCheckedChange={handleCheckedChange} checked={checked} />
          <span className="font-semibold"> {todoItem.title}</span>
        </div>
        <div>
          <EditDialog todoItem={todoItem} />
          <DeleteDialog todoItem={todoItem} />
        </div>
      </li>
    </>
  );
}
