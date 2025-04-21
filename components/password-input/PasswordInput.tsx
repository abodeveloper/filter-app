"use client";

import { useState } from "react";
import BaseInput from "../base-input/BaseInput";
import { Eye, EyeClosed } from "lucide-react";

const PasswordInput = ({
  error,
  ...props
}: {
  error?: string;
} & React.ComponentProps<typeof BaseInput>) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <div className="relative">
        <BaseInput
          {...props}
          label="Password"
          placeholder="Enter password"
          type={isVisible ? "text" : "password"}
          className="pr-8 relative"
        />
        <button
          type="button"
          className="absolute top-10  right-3"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {isVisible ? (
            <Eye width={18} color="#0A0A0A73" />
          ) : (
            <EyeClosed width={18} color="#0A0A0A73" />
          )}
        </button>
      </div>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default PasswordInput;
