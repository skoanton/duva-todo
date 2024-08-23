type TodoItemsProps = {};
import TodoItem from "./TodoItem";
export default function TodoItems({}: TodoItemsProps) {
  return (
    <>
      <ul className="flex flex-col gap-2">
        <TodoItem todoName="Sopa hemma" />
        <TodoItem todoName="Sopa hemma" />
        <TodoItem todoName="Sopa hemma" />
        <TodoItem todoName="Sopa hemma" />
      </ul>
    </>
  );
}
