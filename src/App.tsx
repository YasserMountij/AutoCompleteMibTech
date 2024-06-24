import AutoComplete from "@lib/AutoComplete";
import { useState } from "react";
import {
  IoFlameOutline,
  IoHelp,
  IoHomeOutline,
  IoLocationOutline,
} from "react-icons/io5";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const options = [
    { label: "Option 1", value: "option1", key: 1 },
    { label: "Option 2", value: "option2", key: 2 },
    { label: "Option 3", value: "option3", key: 3 },
    { label: "Option 4", value: "option4", key: 4 },
    { label: "Option 5", value: "option5", key: 5 },
    { label: "Option 6", value: "option6", key: 6 },
    { label: "Option 7", value: "option7", key: 7 },
    { label: "Option 8", value: "option8", key: 8 },
    { label: "Option 9", value: "option9", key: 9 },
    { label: "Option 10", value: "option10", key: 10 },
    { label: "Option 11", value: "option11", key: 11 },
    { label: "Option 12", value: "option12", key: 12 },
    { label: "Option 13", value: "option13", key: 13 },
    { label: "Option 14", value: "option14", key: 14 },
    { label: "Option 15", value: "option15", key: 15 },
  ];
  const components = [
    {
      label: "Normal",
      component: <AutoComplete multiple={false} options={options} />,
    },
    {
      label: "Disabled",
      component: (
        <AutoComplete multiple={false} options={options} isDisabled={true} />
      ),
    },
    {
      label: "PlaceHolder",
      component: (
        <AutoComplete
          multiple={false}
          options={options}
          placeholder="Hello ..."
        />
      ),
    },
    {
      label: "Not clearable",
      component: (
        <AutoComplete multiple={false} options={options} isClearable={false} />
      ),
    },
    {
      label: "Loading",
      component: (
        <AutoComplete
          multiple={false}
          options={options}
          isLoading={true}
          loadingText={"Custom Loading Text"}
        />
      ),
    },
    {
      label: "input ReadOnly",
      component: (
        <AutoComplete
          multiple={false}
          options={options}
          isReadOnly={true}
          inputValue="You can't edit it"
        />
      ),
    },
    {
      label: "Drop down placement",
      component: (
        <AutoComplete multiple={false} options={options} placement="right" />
      ),
    },
    {
      label: `On Input Change : ${input1}`,
      component: (
        <AutoComplete
          multiple={false}
          options={options}
          onInputChange={(value) => {
            console.log("HERE");
            setInput1(value);
          }}
        />
      ),
    },
    {
      label: `Controlled Input value : ${input2} `,
      component: (
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Write smtg here..."
            onChange={(e) => {
              setInput2(e.target.value);
            }}
          />
          <AutoComplete
            multiple={false}
            options={options}
            inputValue={input2}
          />
        </div>
      ),
    },
    {
      label: `On Close (check logs)`,
      component: (
        <AutoComplete
          multiple={false}
          options={options}
          onClose={() => console.log(`closed`)}
        />
      ),
    },
    {
      label: `On Change (check logs)`,
      component: (
        <AutoComplete
          multiple={false}
          options={options}
          onChange={(option) => console.log(`changed`, option)}
        />
      ),
    },
    {
      label: `Should close on select`,
      component: (
        <AutoComplete
          multiple={false}
          options={options}
          shouldCloseOnSelect={false}
        />
      ),
    },
    {
      label: `Custom Icons`,
      component: (
        <AutoComplete
          multiple={false}
          options={options}
          renderClearIcon={<IoFlameOutline />}
          renderClosedPopupIcon={<IoHelp />}
          renderLoadingIcon={<IoHomeOutline />}
          renderOpenedPopupIcon={<IoLocationOutline />}
        />
      ),
    },
    {
      label: `Custom Empty Options`,
      component: (
        <AutoComplete
          multiple={false}
          options={[]}
          renderOnEmptyOptions={
            <div className="rounded-md p-2 text-center cursor-default ">
              Custom No results
            </div>
          }
        />
      ),
    },
    {
      label: `Disable An Option (disable even keys)`,
      component: (
        <AutoComplete
          multiple={false}
          options={options}
          disableOptions={(option) => {
            return option.key % 2 === 0;
          }}
        />
      ),
    },
    {
      label: `Filter Options (remove even keys)`,
      component: (
        <AutoComplete
          multiple={false}
          options={options}
          filterResults={(options) => {
            return options.filter((option) => option.key % 2 !== 0);
          }}
        />
      ),
    },
    {
      label: `Multiple Options`,
      component: (
        <AutoComplete
          shouldCloseOnSelect={false}
          multiple={true}
          options={options}
          onChangeWithMultiple={(options) => {
            console.log(options);
          }}
        />
      ),
    },
  ];
  return (
    <div className="min-h-screen pt-5 h-full pb-96 w-full flex flex-col gap-4 items-center bg-neutral-200">
      {components.map((item, index) => (
        <div key={index}>
          <span> {item.label} </span>
          {item.component}
        </div>
      ))}
    </div>
  );
}

export default App;
