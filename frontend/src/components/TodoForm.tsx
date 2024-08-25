"use client";
import { date, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import DatePicker from "./DatePicker";
import { usePost } from "@/hooks/usePost";
import Todos from "@/types/todos";
import { useUpdate } from "@/hooks/useUpdate";
import { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";
import { TODO_ACTIONS } from "@/context/TodoReducer";

const formSchema = z.object({
  taskName: z.string().min(2, {
    message: "Du måste ha ett task namn.",
  }),
  taskDate: z.date({
    required_error: "Du måste ha ett datum.",
  }),
});

type TodoFormProps = {
  update: boolean;
  todoItem?: Todos;
  onClose?: () => void;
};

export default function TodoForm({ update, todoItem, onClose }: TodoFormProps) {
  const { todoState, todoDispatch } = useContext(TodoContext);
  const { postData, loading } = usePost("/todos");
  const { updateData } = useUpdate(`/todos/${todoItem ? todoItem.id : ""}`);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      taskName: update ? todoItem!.title : "",
      taskDate: update ? todoItem?.due_date : new Date(),
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const newTodo = {
      title: values.taskName,
      dueDate: values.taskDate.toISOString(),
    };
    console.log(newTodo);
    let savedTodo: Todos;
    if (update) {
      savedTodo = await updateData(newTodo);
      console.log("Uppdaterar");
      todoDispatch({ type: TODO_ACTIONS.UPDATE, payload: savedTodo });
    } else {
      savedTodo = await postData(newTodo);
      console.log(savedTodo);
      console.log("Skapar ny");
      todoDispatch({ type: TODO_ACTIONS.ADD, payload: savedTodo });
    }
    if (onClose) onClose();
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="taskName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Task</FormLabel>
                <FormControl>
                  <Input placeholder="Köpa blommor" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="taskDate"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <DatePicker value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            {update ? "Uppdatera" : "Lägg till task"}
          </Button>
        </form>
      </Form>
    </>
  );
}
