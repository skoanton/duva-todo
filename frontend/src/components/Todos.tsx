import TodoItems from "./TodoItems";
import { Button } from "./ui/button";

type TodosProps = {};

export default function Todos({}: TodosProps) {
  return (
    <div className="flex flex-col mt-5 h-full w-full p-2">
      <TodoItems />
      <Button className="mb-auto">Skapa en by task </Button>
    </div>
  );
}
