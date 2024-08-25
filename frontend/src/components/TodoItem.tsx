type TodoItemProps = {
  todoItem: Todos;
};
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TodoForm from "./TodoForm";
import Todos from "@/types/todos";
import { useDelete } from "@/hooks/useDelete";
import { useContext, useRef, useState } from "react";
import { TodoContext } from "@/context/TodoContext";
import { TODO_ACTIONS } from "@/context/TodoReducer";

export default function TodoItem({ todoItem }: TodoItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteData, loading } = useDelete(`/todos/${todoItem.id}`);
  const [checked, setChecked] = useState(false);

  const { todoDispatch } = useContext(TodoContext);
  const handleDeleteTask = async () => {
    console.log("Deleted todo");
    await deleteData();
    todoDispatch({ type: TODO_ACTIONS.REMOVE, payload: todoItem });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCheckedChange = async (checked: boolean) => {
    setChecked(checked);
    await deleteData();
    todoDispatch({ type: TODO_ACTIONS.REMOVE, payload: todoItem });
  };
  console.log("current name:", todoItem.title);
  return (
    <>
      <li className="bg-white p-3 flex items-center justify-between rounded-xl">
        <div className="flex items-center gap-2">
          <Checkbox onCheckedChange={handleCheckedChange} checked={checked} />
          <span className="font-semibold"> {todoItem.title}</span>
        </div>

        <div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z"
                />
              </svg>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{todoItem.title}</DialogTitle>
              </DialogHeader>
              <TodoForm
                update={true}
                todoItem={todoItem}
                onClose={handleClose}
              />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  fill="red"
                  d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
                />
              </svg>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Är du säker?</DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-center">
                Du är på väg att radera {todoItem.title}
              </DialogDescription>
              <DialogClose asChild>
                <Button onClick={handleDeleteTask} variant={"destructive"}>
                  Ja
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant={"outline"}>Nej</Button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </div>
      </li>
    </>
  );
}
