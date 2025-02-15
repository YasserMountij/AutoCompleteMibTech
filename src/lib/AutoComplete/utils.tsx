import {
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoCloseOutline,
  IoSyncOutline,
} from "react-icons/io5";
import { AutoCompletePropsType } from "./types";

export function setDefaults(props: AutoCompletePropsType): Required<
  Omit<
    AutoCompletePropsType,
    "inputValue" | "filterResults" | "onChangeWithMultiple" | "onChange"
  >
> & {
  filterResults: AutoCompletePropsType["filterResults"];
  inputValue: AutoCompletePropsType["inputValue"];
  onChange: AutoCompletePropsType["onChange"];
  onChangeWithMultiple: AutoCompletePropsType["onChangeWithMultiple"];
} {
  return {
    options: props.options ?? [],
    placeholder: props.placeholder ?? "Insert a placeholder ...",
    isDisabled: props.isDisabled ?? false,
    isClearable: props.isClearable ?? true,
    isLoading: props.isLoading ?? false,
    isReadOnly: props.isReadOnly ?? false,
    loadingText: props.loadingText ?? "Loading...",
    placement: props.placement ?? "bottom",
    onInputChange: props.onInputChange ?? (() => {}),
    inputValue: props.inputValue,
    onClose: props.onClose ?? (() => {}),
    shouldCloseOnSelect: props.shouldCloseOnSelect ?? true,
    renderClearIcon: props.renderClearIcon ?? (
      <IoCloseOutline className="size-5" />
    ),
    renderLoadingIcon: props.renderLoadingIcon ?? (
      <IoSyncOutline className="animate-spin size-5" />
    ),
    renderOpenedPopupIcon: props.renderOpenedPopupIcon ?? (
      <IoChevronUpOutline className="size-5" />
    ),
    renderClosedPopupIcon: props.renderClosedPopupIcon ?? (
      <IoChevronDownOutline className="size-5" />
    ),
    renderOnEmptyOptions: props.renderOnEmptyOptions ?? (
      <div className="rounded-md p-2 text-center cursor-default ">
        No results
      </div>
    ),
    disableOptions: props.disableOptions ?? (() => false),
    filterResults: props.filterResults,
    multiple: props.multiple,
    onChange: props.onChange,
    onChangeWithMultiple: props.onChangeWithMultiple,
  };
}
