import { AutoCompletePropsType } from "./types";

export function setDefaults(
  props: AutoCompletePropsType
): AutoCompletePropsType {
  return {
    options: props.options ?? [],
    multiple: false,
  };
}
