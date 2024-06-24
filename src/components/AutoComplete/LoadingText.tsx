import { type setDefaults } from "./utils";

const LoadingText = ({
  loadingText,
}: {
  loadingText: ReturnType<typeof setDefaults>["loadingText"];
}) => {
  return (
    <li className="rounded-md p-2  text-center cursor-default">
      {loadingText}
    </li>
  );
};

export default LoadingText;
