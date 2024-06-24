import { useState } from "react";
import AutoComplete from "./components/AutoComplete/AutoComplete";
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
    { label: "test1", value: "TEST1", key: 1 },
    { label: "test2", value: "TEST2", key: 2 },
    { label: "test3", value: "TEST3", key: 3 },
    { label: "test4", value: "TEST4", key: 4 },
    { label: "test5", value: "TEST5", key: 5 },
    { label: "test6", value: "TEST6", key: 6 },
    { label: "test7", value: "TEST7", key: 7 },
    { label: "test8", value: "TEST8", key: 8 },
    { label: "test9", value: "TEST9", key: 9 },
    { label: "test10", value: "TEST10", key: 10 },
    { label: "test11", value: "TEST11", key: 11 },
    { label: "test12", value: "TEST12", key: 12 },
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
