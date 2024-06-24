import { UseAutocompleteRenderedOption } from "@mui/base";
import { AutoCompletePropsType } from "./types";

type Params = {
  option: AutoCompletePropsType["options"][number];
  index: number;
  getOptionProps: (
    renderedOption: UseAutocompleteRenderedOption<
      AutoCompletePropsType["options"][number]
    >
  ) => React.HTMLAttributes<HTMLLIElement>;
};

const OptionItem = ({ index, option, getOptionProps }: Params) => {
  const { onClick, ...optionProps } = getOptionProps({
    option,
    index,
  });
  return (
    <li
      {...optionProps}
      key={option.key}
      onClick={optionProps["aria-disabled"] ? undefined : onClick}
      className="rounded-md p-2 bg-neutral-700/60 hover:cursor-pointer hover:bg-orange-500/20 mb-2 aria-selected:border-orange-800 aria-selected:border-solid aria-selected:border aria-selected:bg-orange-900/30 aria-disabled:hover:cursor-default aria-disabled:hover:bg-neutral-700/20 aria-disabled:bg-neutral-700/20 aria-disabled:text-neutral-400"
    >
      {option.label}
    </li>
  );
};
export default OptionItem;
