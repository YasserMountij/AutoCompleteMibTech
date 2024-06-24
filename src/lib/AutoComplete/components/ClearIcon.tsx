import { Button } from "@mui/base/Button";
import { type setDefaults } from "../utils";

type Params = {
  getClearProps: () => React.HTMLAttributes<HTMLButtonElement>;
  clearIcon: ReturnType<typeof setDefaults>["renderClearIcon"];
};

const ClearIcon = ({ getClearProps, clearIcon }: Params) => (
  <Button {...getClearProps()} className="text-white  rounded-sm  p-1  ">
    {clearIcon}
  </Button>
);

export default ClearIcon;
