type EditDialogProps = {
  todoItem: Todos;
};
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "@/types/todos";

export default function EditDialog({ todoItem }: EditDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
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
          <TodoForm update={true} todoItem={todoItem} onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
}
