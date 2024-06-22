type OptionType = {
  label: string;
  value: string;
  key: string | number;
};

export type AutoCompletePropsType = {
  options: OptionType[];
  multiple: boolean;
  placeholder?: string;
};
