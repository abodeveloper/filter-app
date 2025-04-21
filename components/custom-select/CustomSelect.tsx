"use client";
import { useEffect, useState } from "react";
import Select from "react-select";
import { StylesConfig } from "react-select";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customStyles: StylesConfig<any, false> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#0A0A0A0A", // Corrected background color
    borderColor: "#FFFFFF", // White border
    color: "#FFFFFF", // Text color
    padding: "2px",
    marginTop: "2px",
  }),
};

interface SelectOption {
  value: string;
  label: string;
}

const CustomSelect = ({
  label,
  options,
  value,
  onChange,
  error,
}: {
  label?: string;
  options: SelectOption[];
  value: SelectOption;
  onChange: (value: SelectOption) => void;
  error?: string;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col">
      {label && <label className="font-medium mb-1">{label}</label>}
      <Select
        styles={customStyles}
        value={value}
        options={options}
        onChange={onChange}
        placeholder="Select a language"
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default CustomSelect;
