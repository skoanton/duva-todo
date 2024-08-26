type DeleteDialogProps = {
  todoItem: Todos;
};
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Todos from "@/types/todos";
import { Button } from "./ui/button";
import { useDelete } from "@/hooks/useDelete";
import { TODO_ACTIONS } from "@/context/TodoReducer";
import { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";
export default function DeleteDialog({ todoItem }: DeleteDialogProps) {
  const { deleteData, loading } = useDelete(`/todos/${todoItem.id}`);
  const { todoDispatch } = useContext(TodoContext);

  const handleDeleteTask = async () => {
    console.log("Deleted todo");
    await deleteData();
    todoDispatch({ type: TODO_ACTIONS.REMOVE, payload: todoItem });
  };
  return (
    <>
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
            <Button
              disabled={loading}
              onClick={handleDeleteTask}
              variant={"destructive"}
            >
              Ja
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button disabled={loading} variant={"outline"}>
              Nej
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}
