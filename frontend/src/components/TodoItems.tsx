type TodoItemsProps = {};
import { ScrollArea } from "@/components/ui/scroll-area";
import TodoItem from "./TodoItem";
export default function TodoItems({}: TodoItemsProps) {
  return (
    <>
      <ScrollArea className="bg-gray-100 h-[600px] w-full rounded-md border p-4 md:w-1/3 md:self-center">
        <ul className="flex flex-col gap-2">
          <TodoItem todoName="Sopa hemma" />
          <TodoItem todoName="Sopa hemma" />
          <TodoItem todoName="Sopa hemma" />
          <TodoItem todoName="Sopa hemma" />
          <TodoItem todoName="Sopa hemma" />
          <TodoItem todoName="Sopa hemma" />
          <TodoItem todoName="Sopa hemma" />
          <TodoItem todoName="Sopa hemma" />
          <TodoItem todoName="Sopa hemma" />
          <TodoItem todoName="Sopa hemma" />
          <TodoItem todoName="Sopa hemma" />
          <TodoItem todoName="Sopa hemma" />
          <TodoItem todoName="Sopa hemma" />
          <TodoItem todoName="Sopa hemma" />
        </ul>
      </ScrollArea>
    </>
  );
}
