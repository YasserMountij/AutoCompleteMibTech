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
  return (
    <div className="min-h-svh w-full flex justify-center items-center bg-neutral-700 ">
      <AutoComplete multiple={true} options={options} />
    </div>
  );
}

export default App;
