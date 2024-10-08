import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
type TodosProps = {};

export default function Todos({}: TodosProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className=" flex flex-col gap-5 mt-5 p-2">
      <TodoItems />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger className="bg-primary text-primary-foreground rounded-md p-4 w-full md:w-1/3 md:self-center">
          Skapa en ny task
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ny task</DialogTitle>
          </DialogHeader>
          <TodoForm update={false} onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
