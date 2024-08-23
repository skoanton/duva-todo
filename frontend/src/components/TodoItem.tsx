type TodoItemProps = {
  todoName: string;
};
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
export default function TodoItem({ todoName }: TodoItemProps) {
  return (
    <>
      <li className="bg-white p-3 flex items-center justify-between rounded-xl">
        <div className="flex items-center gap-2">
          <Checkbox />
          <span className="font-semibold"> {todoName}</span>
        </div>

        <div className="flex gap-2 items-center">
          <Button variant="default" className="bg-gray-200 rounded-md h-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z"
              />
            </svg>
            <p className="ml-2 text-secondary-foreground">06:00 - 07:00</p>
          </Button>
          <Button variant={"outline"} className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <circle cx="8" cy="2.5" r=".75" />
                <circle cx="8" cy="8" r=".75" />
                <circle cx="8" cy="13.5" r=".75" />
              </g>
            </svg>
          </Button>
        </div>
      </li>
    </>
  );
}
