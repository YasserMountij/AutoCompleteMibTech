import { useState } from "react";
import AutoComplete from "./components/AutoComplete/AutoComplete";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const options = [
    { label: "test1", value: "TEST1", key: 1 },
    { label: "test2", value: "TEST2", key: 2 },
    { label: "test3", value: "TEST3", key: 3 },
    { label: "test4", value: "TEST1", key: 4 },
    { label: "test5", value: "TEST2", key: 5 },
    { label: "test6", value: "TEST3", key: 6 },
    { label: "test7", value: "TEST1", key: 7 },
    { label: "test8", value: "TEST2", key: 8 },
    { label: "test9", value: "TEST3", key: 9 },
    { label: "test10", value: "TEST1", key: 10 },
    { label: "test11", value: "TEST2", key: 11 },
    { label: "test12", value: "TEST3", key: 12 },
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
      label: "Drop down placement",
      component: (
        <AutoComplete multiple={false} options={options} placement="top" />
      ),
    },
    {
      label: `On Input Change : ${input1}`,
      component: (
        <AutoComplete
          multiple={false}
          options={options}
          onInputChange={(value) => {
            setInput1(value);
          }}
        />
      ),
    },
    {
      label: `Change the Input value : ${input2} `,
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
