import React from "react";
import BaseInput from "../base-input/BaseInput";
import { useMask } from "@react-input/mask";
import { DateIcon } from "../icons/icons";

const DateInput = ({
  placeholder,
  label,
  error,
  value,
  onChange,
  ...props
}: {
  placeholder: string;
  label: string;
  error?: string;
} & React.ComponentProps<typeof BaseInput>) => {
  const inputRef = useMask({ mask: "__/__/____", replacement: { _: /\d/ } });

  return (
    <div className="w-full">
      <BaseInput
        {...props}
        value={value}
        onChange={onChange}
        ref={inputRef}
        error={error}
        className="pl-10"
        label={label}
        placeholder={placeholder}
        icon={
          <DateIcon className="absolute top-[27px] left-3 -translate-y-1/2" />
        }
      />
    </div>
  );
};

export default DateInput;
