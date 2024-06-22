import { useAutocomplete } from "@mui/base";
import React from "react";
import { unstable_useForkRef as useForkRef } from "@mui/utils";
import { Button } from "@mui/base/Button";
import { Popper } from "@mui/base/Popper";
import {
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { AutoCompletePropsType } from "./types";
import { setDefaults } from "./utils";

const AutoComplete = React.forwardRef(function AutoComplete(
  props: AutoCompletePropsType,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  /** set default value for undefined properties */
  const updatedProps = setDefaults(props);

  /** hooks */
  const {
    expanded,
    focusedTag,
    getInputLabelProps,
    getTagProps,
    inputValue,
    value,
    getRootProps,
    getInputProps,
    getPopupIndicatorProps,
    getClearProps,
    getListboxProps,
    getOptionProps,
    dirty,
    id,
    popupOpen,
    focused,
    anchorEl,
    setAnchorEl,
    groupedOptions,
  } = useAutocomplete({
    options: updatedProps.options,
  });

  const rootRef = useForkRef(ref, setAnchorEl);
  return (
    <>
      <div
        ref={rootRef}
        className={`flex gap-2 px-2 justify-center items-center bg-neutral-800 w-80 rounded-lg border border-solid-[1px] border-orange-800 shadow-orange-800  ${
          focused && "shadow-sm "
        } `}
      >
        <input
          id={id}
          className="bg-transparent w-full outline-0 border-0 text-neutral-200 py-3 px-2"
          // disabled={disabled}
          // readOnly={readOnly}
          {...getInputProps()}
        />
        <Button
          {...getClearProps()}
          className="text-neutral-200  rounded-sm  p-1  "
        >
          <IoCloseOutline className="size-5" />
        </Button>
        <Button
          {...getPopupIndicatorProps()}
          className="text-neutral-200 bg-neutral-700 rounded-sm border-orange-800 border-[1px] p-1  "
        >
          {popupOpen ? (
            <IoChevronUpOutline className="size-5" />
          ) : (
            <IoChevronDownOutline className="size-5" />
          )}
        </Button>
      </div>
      {anchorEl && (
        <Popper open={popupOpen} anchorEl={anchorEl}>
          <ul {...getListboxProps()}>
            {(groupedOptions as AutoCompletePropsType["options"]).map(
              (option, index) => {
                const optionProps = getOptionProps({ option, index });

                return (
                  <li {...optionProps} key={option.key}>
                    {option.label}
                  </li>
                );
              }
            )}

            {groupedOptions.length === 0 && <li>No results</li>}
          </ul>
        </Popper>
      )}
    </>
  );
});

export default AutoComplete;
