import { useMask } from "@react-input/mask";
import React from "react";
import BaseInput from "../base-input/BaseInput";

const PhoneInput = ({
  error,
  value,
  onChange,
}: {
  error?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.ComponentProps<typeof BaseInput>) => {
  const inputRef = useMask({
    mask: "(__)-___-__-__",
    replacement: { _: /\d/ },
  });

  return (
    <div className="relative">
      <span className="absolute top-10 left-3 -translate-y-4/8 pr-2 border-r border-r-gray-400">
        +998
      </span>
      <BaseInput
        error={error}
        className="pl-16"
        ref={inputRef}
        label="Phone number"
        placeholder="Phone number"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PhoneInput;
