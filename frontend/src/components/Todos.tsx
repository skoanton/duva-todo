import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
type TodosProps = {};

export default function Todos({}: TodosProps) {
  return (
    <div className=" flex flex-col gap-5 mt-5 p-2">
      <TodoItems />
      <Dialog>
        <DialogTrigger>
          <Button className="w-full md:w-1/3">Skapa en ny task </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ny task</DialogTitle>
          </DialogHeader>
          <TodoForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
