import AutoComplete from "./components/AutoComplete/AutoComplete";

function App() {
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
  ];
  return (
    <div className="min-h-screen pt-5 h-full pb-96 w-full flex flex-col gap-4 items-center bg-neutral-400  ">
      {components.map((item) => (
        <div>
          <span> {item.label} </span>
          {item.component}
        </div>
      ))}
    </div>
  );
}

export default App;
