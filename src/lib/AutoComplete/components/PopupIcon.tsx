import { Button } from "@mui/base/Button";
import { type setDefaults } from "../utils";

type Params = {
  getPopupIndicatorProps: () => React.HTMLAttributes<HTMLButtonElement>;
  isDisabled: ReturnType<typeof setDefaults>["isDisabled"];
  popupOpen: boolean;
  openIcon: ReturnType<typeof setDefaults>["renderOpenedPopupIcon"];
  closeIcon: ReturnType<typeof setDefaults>["renderClosedPopupIcon"];
};

const PopupIcon = ({
  getPopupIndicatorProps,
  isDisabled,
  popupOpen,
  openIcon,
  closeIcon,
}: Params) => {
  return (
    <Button
      {...getPopupIndicatorProps()}
      disabled={isDisabled}
      className={`text-white  rounded-sm ${
        !isDisabled && " bg-neutral-700 border-orange-800 border-[1px]"
      }   p-1  `}
    >
      {popupOpen ? openIcon : closeIcon}
    </Button>
  );
};

export default PopupIcon;
