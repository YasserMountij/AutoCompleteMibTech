import { type setDefaults } from "../utils";

type Params = {
  loadingIcon: ReturnType<typeof setDefaults>["renderLoadingIcon"];
};

const LoadingIcon = ({ loadingIcon }: Params) => {
  return (
    <div className="flex justify-center items-center text-white px-2">
      {loadingIcon}
    </div>
  );
};

export default LoadingIcon;
