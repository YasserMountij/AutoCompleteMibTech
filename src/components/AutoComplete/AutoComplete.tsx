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

const AutoComplete = React.forwardRef(function AutoComplete(
  props: any,
  ref: React.ForwardedRef<HTMLDivElement>
) {
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
    ...props,
  });

  const rootRef = useForkRef(ref, setAnchorEl);
  return (
    <>
      <div ref={rootRef}>
        <input
          id={id}
          // disabled={disabled}
          // readOnly={readOnly}
          {...getInputProps()}
        />
        <Button {...getClearProps()}>
          <IoCloseOutline />
        </Button>
        <Button {...getPopupIndicatorProps()}>
          {popupOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
        </Button>
      </div>
      {anchorEl && (
        <Popper open={popupOpen} anchorEl={anchorEl}>
          <ul {...getListboxProps()}>
            {groupedOptions.map((option, index) => {
              const optionProps = getOptionProps({ option, index });

              return <li {...optionProps}>{option.label}</li>;
            })}

            {groupedOptions.length === 0 && <li>No results</li>}
          </ul>
        </Popper>
      )}
    </>
  );
});

export default AutoComplete;
