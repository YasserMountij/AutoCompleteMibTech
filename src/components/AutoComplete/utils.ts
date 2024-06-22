import { AutoCompletePropsType } from "./types";

export function setDefaults(props: AutoCompletePropsType): Required<
  Omit<AutoCompletePropsType, "inputValue">
> & {
  inputValue: AutoCompletePropsType["inputValue"];
} {
  return {
    options: props.options ?? [],
    multiple: props.multiple ?? false,
    placeholder: props.placeholder ?? "Insert a placeholder ...",
    isDisabled: props.isDisabled ?? false,
    isClearable: props.isClearable ?? true,
    isLoading: props.isLoading ?? false,
    loadingText: props.loadingText ?? "Loading...",
    placement: props.placement ?? "bottom",
    onInputChange: props.onInputChange ?? (() => {}),
    inputValue: props.inputValue,
    onClose: props.onClose ?? (() => {}),
  };
}
