import { useAutocomplete } from "@mui/base";
import React from "react";
import { unstable_useForkRef as useForkRef } from "@mui/utils";
import { Button } from "@mui/base/Button";
import { Popper } from "@mui/base/Popper";
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
    isOptionEqualToValue(option, value) {
      return option.key === value.key;
    },
    disabled: updatedProps.isDisabled,
    onInputChange(event, value, reason) {
      updatedProps.onInputChange(value);
    },
    onChange(event, value, reason, details) {
      /** add on Change here */
    },
    onClose(event, reason) {
      updatedProps.onClose();
    },
    inputValue: updatedProps.inputValue,
    disableCloseOnSelect: !updatedProps.shouldCloseOnSelect,
    getOptionDisabled(option) {
      return updatedProps.disableOptions(option);
    },
    filterOptions: updatedProps.filterResults,
  });

  const rootRef = useForkRef(ref, setAnchorEl);
  const hasClearIcon =
    updatedProps.isClearable && !updatedProps.isDisabled && dirty;

  const CustomClearIcon = () => <>{updatedProps.renderClearIcon}</>;
  const CustomLoadingIcon = () => <>{updatedProps.renderLoadingIcon}</>;
  const CustomOpenedPopupIcon = () => <>{updatedProps.renderOpenedPopupIcon}</>;
  const CustomClosedPopupIcon = () => <>{updatedProps.renderClosedPopupIcon}</>;
  const CustomOnEmptyOption = () => <> {updatedProps.renderOnEmptyOptions} </>;

  return (
    <>
      <div
        ref={rootRef}
        className={`flex gap-2 px-2 justify-center items-center bg-neutral-800 w-80 rounded-lg  ${
          !updatedProps.isDisabled &&
          "border-orange-700 shadow-orange-700 border border-solid-[1px]"
        }   ${focused && "shadow-sm "} `}
      >
        <input
          {...getInputProps()}
          id={id}
          className="bg-transparent w-full outline-0 border-0 text-white py-3 px-2"
          placeholder={updatedProps.placeholder}
          disabled={updatedProps.isDisabled}
          // readOnly={readOnly}
        />
        {hasClearIcon && (
          <Button
            {...getClearProps()}
            className="text-white  rounded-sm  p-1  "
          >
            <CustomClearIcon />
          </Button>
        )}
        {updatedProps.isLoading ? (
          <div className="flex justify-center items-center text-white px-2">
            <CustomLoadingIcon />
          </div>
        ) : (
          <Button
            {...getPopupIndicatorProps()}
            disabled={updatedProps.isDisabled}
            className={`text-white  rounded-sm ${
              !updatedProps.isDisabled &&
              " bg-neutral-700 border-orange-800 border-[1px]"
            }   p-1  `}
          >
            {popupOpen ? <CustomOpenedPopupIcon /> : <CustomClosedPopupIcon />}
          </Button>
        )}
      </div>
      {anchorEl && (
        <Popper
          placement={updatedProps.placement}
          open={popupOpen}
          anchorEl={anchorEl}
        >
          <ul
            {...getListboxProps()}
            className="bg-neutral-800 text-sm p-2 my-3 w-80 overflow-auto rounded-md max-h-[300px] border-orange-900 border-[1px] text-white"
          >
            {updatedProps.isLoading ? (
              <li className="rounded-md p-2  text-center cursor-default">
                {updatedProps.loadingText}
              </li>
            ) : (
              <>
                {(groupedOptions as AutoCompletePropsType["options"]).map(
                  (option, index) => {
                    const { onClick, ...optionProps } = getOptionProps({
                      option,
                      index,
                    });
                    return (
                      <li
                        {...optionProps}
                        key={option.key}
                        onClick={
                          optionProps["aria-disabled"] ? undefined : onClick
                        }
                        className="rounded-md p-2 bg-neutral-700/60 hover:cursor-pointer hover:bg-orange-500/20 mb-2 aria-selected:border-orange-800 aria-selected:border-solid aria-selected:border aria-selected:bg-orange-900/30 aria-disabled:hover:cursor-default aria-disabled:hover:bg-neutral-700/20 aria-disabled:bg-neutral-700/20 aria-disabled:text-neutral-400"
                      >
                        {option.label}
                      </li>
                    );
                  }
                )}

                {groupedOptions.length === 0 && <CustomOnEmptyOption />}
              </>
            )}
          </ul>
        </Popper>
      )}
    </>
  );
});

export default AutoComplete;
