type TodoItemsProps = {};
import { ScrollArea } from "@/components/ui/scroll-area";
import TodoItem from "./TodoItem";
import { useFetch } from "@/hooks/useFetch";
export default function TodoItems({}: TodoItemsProps) {
  const { data, error, loading } = useFetch("/todos");

  return (
    <>
      <ScrollArea className="bg-gray-100 h-[600px] w-full rounded-md border p-4 md:w-1/3 md:self-center">
        <ul className="flex flex-col gap-2">
          {data &&
            data.map((todo) => <TodoItem key={todo.id} todoItem={todo} />)}
        </ul>
      </ScrollArea>
    </>
  );
}
