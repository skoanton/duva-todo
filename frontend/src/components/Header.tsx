import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <header className="flex flex-col items-center gap-5">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl">God morgon,Duva!</h1>
        <p className="font-thin">Today, Wed, 6 Juli, 2023</p>
      </div>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Idag" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="today">Idag</SelectItem>
          <SelectItem value="this-week">Denna vecka</SelectItem>
          <SelectItem value="next-week">Nästa vecka</SelectItem>
          <SelectItem value="this-month">Denna månad</SelectItem>
          <SelectItem value="next-month">Nästa månad</SelectItem>
        </SelectContent>
      </Select>
    </header>
  );
}
