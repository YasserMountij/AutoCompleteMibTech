import { AutoCompletePropsType } from "../types";
import { type setDefaults } from "../utils";

type Params = {
  getInputProps: () => React.HTMLAttributes<HTMLInputElement>;
  placeholder: ReturnType<typeof setDefaults>["placeholder"];
  isDisabled: ReturnType<typeof setDefaults>["isDisabled"];
  isReadOnly: ReturnType<typeof setDefaults>["isReadOnly"];
  multiple: ReturnType<typeof setDefaults>["multiple"];
  value:
    | AutoCompletePropsType["options"]
    | AutoCompletePropsType["options"][number]
    | null;
};

const Input = ({
  getInputProps,
  isDisabled,
  isReadOnly,
  placeholder,
  multiple,
  value,
}: Params) => {
  return (
    <input
      {...getInputProps()}
      className="bg-transparent w-full outline-0 border-0 text-white py-3 px-2"
      placeholder={placeholder}
      disabled={isDisabled}
      readOnly={isReadOnly}
      {...(() => {
        if (multiple === true) {
          return {
            value:
              value !== undefined
                ? (value as AutoCompletePropsType["options"])
                    .map((item) => item.label)
                    .join(", ")
                : "",
          };
        }
      })()}
    />
  );
};

export default Input;
