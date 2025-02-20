import { Form, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";

const SearchBar = ({ className }) => {
  const url  = useLocation()
  var action = ""
  if(url.pathname === "/search") {
    action = ""

  }
  else {
    action = "/search"
  }
  
  return (
    <Form
      action={action}
      className={`flex flex-row items-center justify-between bg-primary-1 lg:w-[500px] w-[80vw] rounded-[20px] h-[50px] md:h-[60px] has-[:focus]:outline outline-2 has-[:focus]:outline-secondary-1 ${className}`}
    >
      <div className="flex items-center w-10/12 ">
        <FiSearch className="text-[30px] ml-3" />
        <input
          id="q"
          name="q"
          type="text"
          placeholder="Search..."
          className="block bg-primary-1 focus:outline-none overflow-auto w-full ml-2"
        />
      </div>
      <button className="m-3 md:m-2 p-3 text-center hover:bg-secondary-2 bg-secondary-1 rounded-full">
        <FaArrowRight className="text-textColors-1" />
      </button>
    </Form>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
};
export default SearchBar;
