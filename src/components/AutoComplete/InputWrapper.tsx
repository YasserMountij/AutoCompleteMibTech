import React from "react";
import { type setDefaults } from "./utils";

type Params = {
  children: React.ReactNode;
  focused: boolean;
  isDisabled: ReturnType<typeof setDefaults>["isDisabled"];
};

const InputWrapper = React.forwardRef<HTMLDivElement, Params>(
  ({ children, focused, isDisabled }, ref) => (
    <div
      ref={ref}
      className={`flex gap-2 px-2 justify-center items-center bg-neutral-800 w-80 rounded-lg  ${
        !isDisabled &&
        "border-orange-700 shadow-orange-700 border border-solid-[1px]"
      }   ${focused && "shadow-sm "} `}
    >
      {children}
    </div>
  )
);

export default InputWrapper;
