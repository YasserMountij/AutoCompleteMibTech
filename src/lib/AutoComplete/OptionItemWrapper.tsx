import { Popper } from "@mui/base";
import { type setDefaults } from "./utils";

type Params = {
  placement: ReturnType<typeof setDefaults>["placement"];
  popupOpen: boolean;
  getListboxProps: () => React.HTMLAttributes<HTMLUListElement>;
  anchorEl: HTMLElement | null;
  children: React.ReactNode;
};

const OptionItemWrapper = ({
  placement,
  popupOpen,
  getListboxProps,
  anchorEl,
  children,
}: Params) => (
  <Popper placement={placement} open={popupOpen} anchorEl={anchorEl}>
    <ul
      {...getListboxProps()}
      className="bg-neutral-800 text-sm p-2 my-3 w-80 overflow-auto rounded-md max-h-[300px] border-orange-900 border-[1px] text-white"
    >
      {children}
    </ul>
  </Popper>
);
export default OptionItemWrapper;
