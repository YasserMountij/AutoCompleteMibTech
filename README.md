# AutoComplete Component

The `AutoComplete` component provides a versatile and customizable input field with autocomplete functionality. You can search through a list of options by typing into the input, and select one or multiple items from the results.

## Usage

### Basic AutoComplete

```typescript
import React from "react";
import AutoComplete from "./AutoComplete";

const options = [
  { label: "Option 1", value: "option1", key: 1 },
  { label: "Option 2", value: "option2", key: 2 },
  { label: "Option 3", value: "option3", key: 3 },
];

function App() {
  return (
    <AutoComplete
      multiple={false}
      options={options}
      placeholder="Select an option"
    />
  );
}

export default App;
```

### Disabled

```typescript
function App() {
  return <AutoComplete multiple={false} options={options} isDisabled={true} />;
}
```

### Loading

```typescript
function App() {
  return (
    <AutoComplete
      multiple={false}
      options={options}
      isLoading={true}
      loadingText="Loading ..."
    />
  );
}
```

### Placement

You can change where the PopUp appears relative the input

```typescript
function App() {
  return <AutoComplete multiple={false} options={options} placement="right" />;
}
```

### Some Event Listeners

```typescript
function App() {
  return (
    <AutoComplete
      multiple={false}
      options={options}
      onClose={function () {
        console.log("closed");
      }}
      onInputChange={function (value) {
        console.log(value);
      }}
      onChange={function (event) {
        console.log(event.target.value);
      }}
    />
  );
}
```

### Custom Icons

```typescript
import {
  IoFlameOutline,
  IoHelp,
  IoHomeOutline,
  IoLocationOutline,
} from "react-icons/io5";

function App() {
  return (
    <AutoComplete
      multiple={false}
      options={options}
      renderClearIcon={<IoFlameOutline />}
      renderClosedPopupIcon={<IoHelp />}
      renderLoadingIcon={<IoHomeOutline />}
      renderOpenedPopupIcon={<IoLocationOutline />}
    />
  );
}
```

### Filtering and disabling

```typescript
import {
  IoFlameOutline,
  IoHelp,
  IoHomeOutline,
  IoLocationOutline,
} from "react-icons/io5";

function App() {
  return (
    <AutoComplete
      multiple={false}
      options={options}
      disableOptions={function (option) {
        return option.key % 2 === 0;
      }}
      filterResults={function (options) {
        return options.filter(function (option) {
          return option.key % 2 !== 0;
        });
      }}
    />
  );
}
```
## Props

## AutoCompletePropsType

This table describes the properties (props) that the `AutoComplete` React component can accept.

| Prop Name | Type | Default | Description |
|---|---|---|---|
| options | `OptionType[]` | [] | List of options to display in the autocomplete.  |
| placeholder | `string` | Insert a placeholder... | Placeholder text for the input. |
| isDisabled | `boolean` | false | Disable the input field. |
| isClearable | `boolean` | true | Show an Icon button to clear the selected item. |
| isLoading | `boolean` | false | Show a loading indicator. |
| isReadOnly | `boolean` | false | Make the input field read-only. |
| loadingText | `ReactNode` | "Loading..." | Text to display while loading. |
| shouldCloseOnSelect | `boolean` | true | Close the dropdown after selecting an option. |
| placement | `PopperOwnProps["placement"]` | "bottom" | Placement of the dropdown (e.g., top, bottom, left, right). |
| onInputChange | `(value: string) => void` | - | Callback function triggered when the input value changes. |
| onClose | `() => void` | - | Callback function triggered when the dropdown closes. |
| onChange | `(option: OptionType, null) => void` | - | Callback function triggered when a single option is selected (for `multiple=false`). |
| onChangeWithMultiple | `(option: OptionType[]) => void` | - | Callback function triggered when multiple options are selected (for `multiple=true`). Only used when `multiple` is true. |
| inputValue | `string` | "" | Value of the input field. |
| renderClearIcon | `React.ReactNode` | - | Custom clear icon for the input field. |
| renderLoadingIcon | `React.ReactNode` | - | Custom loading icon. |
| renderOpenedPopupIcon | `React.ReactNode` | - | Custom icon for when the dropdown is opened. |
| renderClosedPopupIcon | `React.ReactNode` | - | Custom icon for when the dropdown is closed. |
| renderOnEmptyOptions | `React.ReactNode` | - | Custom message or component to display when there are no options. |
| disableOptions | `(option: OptionType) => boolean` | - | Function to disable selections on options that satisfy this condition. |
| filterResults | `(options: OptionType[]) => OptionType[]` | - | Function to filter the options displayed in the dropdown. |
| multiple | `boolean` | - | Allow the user to select multiple options. |

Absolutely! Here's the markdown table for the `OptionType`:

## OptionType

This table describes the properties (props) of an individual option object used within the `AutoComplete` component.

| Prop Name | Type | Description |
|---|---|---|
| label | `string` | Display label of the option shown in the autocomplete list. |
| value | `string` | Internal value associated with the option. This value is returned when the option is selected. |
| key | `number` | A unique identifier for the option. It's recommended to use a unique key for performance optimization, especially when dealing with large datasets of options. |

I'd be glad to provide the improved markdown incorporating the feedback and addressing the key points:

## **`placement` Prop Values:**

The `placement` prop, inherited from `PopperOwnProps`, specifies the positioning of the dropdown relative to the reference element (the input field). It can take the following values:

- `"auto"`: Attempts to position the dropdown automatically based on available space, prioritizing placement in a way that keeps it visible within the viewport.
- `"auto-start"`: Similar to `"auto"`, but prioritizes placing the dropdown above or to the left of the reference element.
- `"auto-end"`: Similar to `"auto"`, but prioritizes placing the dropdown below or to the right of the reference element.
- `"right"`: Positions the dropdown to the right of the reference element.
- `"top"`: Positions the dropdown above the reference element.
- `"bottom"`: Positions the dropdown below the reference element (default value).
- `"left"`: Positions the dropdown to the left of the reference element.
- `"top-start"`: Positions the dropdown slightly above and aligned to the left edge of the reference element.
- `"top-end"`: Positions the dropdown slightly above and aligned to the right edge of the reference element.
- `"bottom-start"`: Positions the dropdown slightly below and aligned to the left edge of the reference element.
- `"bottom-end"`: Positions the dropdown slightly below and aligned to the right edge of the reference element.
- `"right-start"`: Positions the dropdown to the right of the reference element, with its top edge aligned to the top edge of the reference element.
- `"right-end"`: Positions the dropdown to the right of the reference element, with its bottom edge aligned to the bottom edge of the reference element.
- `"left-start"`: Positions the dropdown to the left of the reference element, with its top edge aligned to the top edge of the reference element.
- `"left-end"`: Positions the dropdown to the left of the reference element, with its bottom edge aligned to the bottom edge of the reference element.

## Additional Notes

**Required Props:**

- `options`: This prop is **required** and must be an array of objects defining the available options. Each option object should have properties like `label`, `value`, and `key`.
- `multiple`: This prop is also **required** and specifies whether to allow multiple selections. Set it to `true` for multi-selection, `false` for single selection.

**Unique Keys:** Ensure that each option in the `options` list has a unique `key` property. This is essential for React's efficient rendering and performance, especially when dealing with large datasets.

**Customization:** The `AutoComplete` component offers various customization options through the provided props. You can control aspects like behavior, appearance, and interactions to tailor it to your specific requirements.

**Callback Behavior:**

- When `multiple` is set to `false` (single selection mode), the `onChange` callback function is triggered whenever the user selects a new option or clears the selection. The `onChange` callback receives a single `option` object (or `null` if the selection is cleared) as its argument.
- When `multiple` is set to `true` (multi-selection mode), the `onChangeWithMultiple` callback function is triggered whenever there's a change in the selected options. The `onChangeWithMultiple` callback receives an array of `option` objects representing the currently selected options as its argument.


**Example:**

```javascript
import React from 'react';
import AutoComplete from './AutoComplete';

const options = [
  { label: 'Option 1', value: 'option1', key: 1 },
  { label: 'Option 2', value: 'option2', key: 2 },
  { label: 'Option 3', value: 'option3', key: 3 },
];

function MyComponent() {
  const handleSingleSelection = (option) => {
    console.log('Selected option:', option);
  };

  const handleMultipleSelection = (selectedOptions) => {
    console.log('Selected options:', selectedOptions);
  };

  return (
    <div>
      <AutoComplete
        options={options}
        placeholder="Select an option (single)"
        multiple={false}
        onChange={handleSingleSelection}
      />
      <br />
      <AutoComplete
        options={options}
        placeholder="Select options (multiple)"
        multiple={true}
        onChangeWithMultiple={handleMultipleSelection}
      />
    </div>
  );
}
```

In this example:

- The first `AutoComplete` instance is in single selection mode (`multiple={false}`). When a user selects an option, the `handleSingleSelection` callback is called with the selected option object.
- The second `AutoComplete` instance is in multi-selection mode (`multiple={true}`). When a user selects or deselects options, the `handleMultipleSelection` callback is called with an array containing the currently selected options.

