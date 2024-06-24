import { useAutocomplete } from "@mui/base";
import React, { ReactNode } from "react";
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
    isOptionEqualToValue: (option, value) => option.key === value.key,
    disabled: updatedProps.isDisabled,
    onInputChange: (event, value, reason) => {
      updatedProps.onInputChange(value);
    },
    onChange: (event, value, reason, details) => {
      /** handle multiple options */
      if (
        updatedProps.onChangeWithMultiple !== undefined &&
        updatedProps.multiple === true &&
        Array.isArray(value)
      ) {
        updatedProps.onChangeWithMultiple(value);
      }

      /** handle single option */
      if (
        updatedProps.onChange !== undefined &&
        updatedProps.multiple === false &&
        !Array.isArray(value)
      ) {
        updatedProps.onChange(value);
      }
    },
    onClose: (event, reason) => {
      updatedProps.onClose();
    },
    inputValue: updatedProps.inputValue,
    disableCloseOnSelect: !updatedProps.shouldCloseOnSelect,
    getOptionDisabled: (option) => updatedProps.disableOptions(option),
    filterOptions: updatedProps.filterResults,
    multiple: updatedProps.multiple,
  });

  const rootRef = useForkRef(ref, setAnchorEl);

  const hasClearIcon =
    updatedProps.isClearable &&
    !updatedProps.isDisabled &&
    dirty &&
    !updatedProps.isReadOnly;

  /** components */
  const ClearIcon = () => (
    <Button {...getClearProps()} className="text-white  rounded-sm  p-1  ">
      {updatedProps.renderClearIcon}
    </Button>
  );

  const LoadingIcon = () => (
    <div className="flex justify-center items-center text-white px-2">
      {updatedProps.renderLoadingIcon}
    </div>
  );

  const PopupIcon = () => (
    <Button
      {...getPopupIndicatorProps()}
      disabled={updatedProps.isDisabled}
      className={`text-white  rounded-sm ${
        !updatedProps.isDisabled &&
        " bg-neutral-700 border-orange-800 border-[1px]"
      }   p-1  `}
    >
      {popupOpen
        ? updatedProps.renderOpenedPopupIcon
        : updatedProps.renderClosedPopupIcon}
    </Button>
  );

  const OnEmptyOption = () => updatedProps.renderOnEmptyOptions;

  const CustomInput = () => (
    <input
      {...getInputProps()}
      id={id}
      className="bg-transparent w-full outline-0 border-0 text-white py-3 px-2"
      placeholder={updatedProps.placeholder}
      disabled={updatedProps.isDisabled}
      readOnly={updatedProps.isReadOnly}
      {...(() => {
        if (updatedProps.multiple === true) {
          return {
            value:
              value !== undefined
                ? (value as AutoCompletePropsType["options"])
                    .map((item) => item.label)
                    .join(", ")
                : "",
          };
        }
      })()}
    />
  );

  const LoadingText = () => (
    <li className="rounded-md p-2  text-center cursor-default">
      {updatedProps.loadingText}
    </li>
  );

  const OptionItem = ({
    index,
    option,
  }: {
    option: AutoCompletePropsType["options"][number];
    index: number;
  }) => {
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

  const OptionItemWrapper = ({ children }: { children: ReactNode }) => (
    <Popper
      placement={updatedProps.placement}
      open={popupOpen}
      anchorEl={anchorEl}
    >
      <ul
        {...getListboxProps()}
        className="bg-neutral-800 text-sm p-2 my-3 w-80 overflow-auto rounded-md max-h-[300px] border-orange-900 border-[1px] text-white"
      >
        {children}
      </ul>
    </Popper>
  );

  return (
    <>
      <div
        ref={rootRef}
        className={`flex gap-2 px-2 justify-center items-center bg-neutral-800 w-80 rounded-lg  ${
          !updatedProps.isDisabled &&
          "border-orange-700 shadow-orange-700 border border-solid-[1px]"
        }   ${focused && "shadow-sm "} `}
      >
        <CustomInput />
        {hasClearIcon && <ClearIcon />}
        {updatedProps.isLoading ? <LoadingIcon /> : <PopupIcon />}
      </div>
      {anchorEl && (
        <OptionItemWrapper>
          {updatedProps.isLoading ? (
            <LoadingText />
          ) : groupedOptions.length === 0 ? (
            <OnEmptyOption />
          ) : (
            (groupedOptions as AutoCompletePropsType["options"]).map(
              (option, index) => (
                <OptionItem index={index} option={option} key={index} />
              )
            )
          )}
        </OptionItemWrapper>
      )}
    </>
  );
});

export default AutoComplete;
