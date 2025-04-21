"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BaseSelect = ({
  label,
  options,
  placeholder = "Select an option",
  value,
  onValueChange,
}: {
  label?: string;
  placeholder?: string;
  options: {
    name: string;
    value: string;
  }[];
  value?: string;
  onValueChange: (value: string) => void;
}) => {
  return (
    <div className="w-full">
      {label && <label className="font-medium">{label}</label>}
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger
          className={`w-full ${label && "mt-2"} bg-inputBg border-none`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, index) => (
            <SelectItem key={index} value={option.value}>
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default BaseSelect;
