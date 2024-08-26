import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <header className="flex flex-col items-center gap-5 mt-5">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl">God morgon,Duva!</h1>
        <p className="font-thin">{formattedDate}</p>
      </div>
    </header>
  );
}
