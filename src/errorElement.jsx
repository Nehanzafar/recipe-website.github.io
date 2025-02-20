import { useRouteError } from "react-router-dom";
import { HiOutlineEmojiSad } from "react-icons/hi";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="absolute top-[20%] left-[50%] translate-x-[-50%]  flex flex-col">
      <HiOutlineEmojiSad className="text-secondary-2 inline text-mainHeading mx-auto" />
      <h1 className="text-[40px] text-center uppercase font-bold text-secondary-2 font-roboto">
        oops!! there was an Error!
      </h1>
      <p className="text-[1.25rem] font-roboto text-center font-medium m-2 text-textColors-2">
        {error.statusText || error.message}
      </p>
    </div>
  );
};

export default ErrorPage;
