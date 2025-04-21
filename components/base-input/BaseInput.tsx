import { forwardRef, InputHTMLAttributes } from "react";

type BaseInputTypes = {
  placeholder?: string;
  label?: string;
  error?: string;
  icon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const BaseInput = forwardRef<HTMLInputElement, BaseInputTypes>(
  ({ placeholder = "", label, error, icon, ...props }, ref) => {
    return (
      <div className="w-full">
        {label ? (
          <label htmlFor={label} className="font-medium">
            {label}
          </label>
        ) : null}
        <div className="relative">
          {icon}
          <input
            ref={ref}
            {...props}
            id={label}
            className={`${props.className} w-full bg-inputBg opacity-4 py-2.5 px-3 text-sm rounded-md mt-2`}
            placeholder={placeholder}
          />
        </div>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);

BaseInput.displayName = "BaseInput";

export default BaseInput;
