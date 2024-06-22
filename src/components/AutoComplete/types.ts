import { PopperOwnProps } from "@mui/base";
import { ReactNode } from "react";

type OptionType = {
  label: string;
  value: string;
  key: string | number;
};

export type AutoCompletePropsType = {
  options: OptionType[];
  multiple: boolean;
  placeholder?: string;
  isDisabled?: boolean;
  isClearable?: boolean;
  isLoading?: boolean;
  loadingText?: ReactNode;
  placement?: PopperOwnProps["placement"];
};
