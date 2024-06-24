import { useAutocomplete } from "@mui/base";
import React from "react";
import { unstable_useForkRef as useForkRef } from "@mui/utils";
import { AutoCompletePropsType } from "./types";
import { setDefaults } from "./utils";
import ClearIcon from "./components/ClearIcon";
import LoadingIcon from "./components/LoadingIcon";
import PopupIcon from "./components/PopupIcon";
import Input from "./components/Input";
import LoadingText from "./components/LoadingText";
import OptionItem from "./components/OptionItem";
import OptionItemWrapper from "./components/OptionItemWrapper";
import InputWrapper from "./components/InputWrapper";

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

  const OnEmptyOptions = () => updatedProps.renderOnEmptyOptions;

  return (
    <>
      <InputWrapper
        focused={focused}
        isDisabled={updatedProps.isDisabled}
        ref={rootRef}
      >
        <Input
          isDisabled={updatedProps.isDisabled}
          isReadOnly={updatedProps.isReadOnly}
          multiple={updatedProps.multiple}
          placeholder={updatedProps.placeholder}
          getInputProps={getInputProps}
          value={value}
        />
        {hasClearIcon && (
          <ClearIcon
            getClearProps={getClearProps}
            clearIcon={updatedProps.renderClearIcon}
          />
        )}
        {updatedProps.isLoading ? (
          <LoadingIcon loadingIcon={updatedProps.renderLoadingIcon} />
        ) : (
          <PopupIcon
            getPopupIndicatorProps={getPopupIndicatorProps}
            popupOpen={popupOpen}
            closeIcon={updatedProps.renderClosedPopupIcon}
            openIcon={updatedProps.renderOpenedPopupIcon}
            isDisabled={updatedProps.isDisabled}
          />
        )}
      </InputWrapper>
      {anchorEl && (
        <OptionItemWrapper
          anchorEl={anchorEl}
          getListboxProps={getListboxProps}
          popupOpen={popupOpen}
          placement={updatedProps.placement}
        >
          {updatedProps.isLoading ? (
            <LoadingText loadingText={updatedProps.loadingText} />
          ) : groupedOptions.length === 0 ? (
            <OnEmptyOptions />
          ) : (
            (groupedOptions as AutoCompletePropsType["options"]).map(
              (option, index) => (
                <OptionItem
                  index={index}
                  option={option}
                  key={index}
                  getOptionProps={getOptionProps}
                />
              )
            )
          )}
        </OptionItemWrapper>
      )}
    </>
  );
});

export default AutoComplete;
