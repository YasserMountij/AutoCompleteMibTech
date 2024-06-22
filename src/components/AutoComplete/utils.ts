import { AutoCompletePropsType } from "./types";

export function setDefaults(
  props: AutoCompletePropsType
): Required<AutoCompletePropsType> {
  return {
    options: props.options ?? [],
    multiple: props.multiple ?? false,
    placeholder: props.placeholder ?? "Insert a placeholder ...",
  };
}
