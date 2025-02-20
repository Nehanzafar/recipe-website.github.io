import { LuConstruction } from "react-icons/lu";
import PropTypes from "prop-types";

const ConstructionPage = ({ url }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5">
      <LuConstruction className="text-9xl text-secondary-1" />
      <h1 className="font-poppins text-[2rem] font-bold text-secondary-1 text-center">Page Under Construction</h1>
      <p className="font-roboto text-[1rem] text-secondary-1 text-center">
        The page at <span className="text-textColors-2 font-bold text-lg" >{url} Page</span> is currently under construction. Please
        check back later.
      </p>
    </div>
  );
};

ConstructionPage.propTypes = {
  url: PropTypes.string.isRequired
};

export default ConstructionPage;
