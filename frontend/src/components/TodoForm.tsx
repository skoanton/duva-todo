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
const formSchema = z.object({
  taskName: z.string().min(2, {
    message: "Du måste ha ett task namn.",
  }),
  taskDate: z.date(),
});

type TodoFormProps = {};

export default function TodoForm({}: TodoFormProps) {
  const { postData, loading, error, response } = usePost("/todos");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      taskName: "",
      taskDate: new Date(),
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const newTodo = {
      title: values.taskName,
      dueDate: values.taskDate.toISOString(),
    };
    console.log(newTodo);
    await postData(newTodo);
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
          <Button type="submit">Lägg till task</Button>
        </form>
      </Form>
    </>
  );
}
