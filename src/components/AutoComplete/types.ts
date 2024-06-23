import { PopperOwnProps } from "@mui/base";
import { ReactNode } from "react";

type OptionType = {
  label: string;
  value: string;
  key: number;
};

export type AutoCompletePropsType = {
  options: OptionType[];
  multiple: boolean;
  placeholder?: string;
  isDisabled?: boolean;
  isClearable?: boolean;
  isLoading?: boolean;
  isReadOnly?: boolean;
  loadingText?: ReactNode;
  shouldCloseOnSelect?: boolean;
  placement?: PopperOwnProps["placement"];
  onInputChange?: (value: string) => void;
  inputValue?: string;
  onClose?: () => void;
  onChange?: (option: OptionType | null) => void;

  renderClearIcon?: React.ReactNode;
  renderLoadingIcon?: React.ReactNode;
  renderOpenedPopupIcon?: React.ReactNode;
  renderClosedPopupIcon?: React.ReactNode;

  renderOnEmptyOptions?: ReactNode;

  disableOptions?: (option: OptionType) => boolean;
  filterResults?: (options: OptionType[]) => OptionType[];
};
