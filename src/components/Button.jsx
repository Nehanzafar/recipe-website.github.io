import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Button = ({ className, children, path, color, onClick }) => {
  return (
    <button
      className={`${className || ""} 
        button
        ${color ? color : "bg-secondary-1 hover:bg-secondary-2"}  
       ${
         color
           ? "text-backgroundColors-1 hover:text-backgroundColors-1"
           : "text-textColors-1 hover:text-textColors-1 "
       }   
           
      `}
      onClick={onClick && onClick}
    >
      {path ? <Link to={path} className="outline-none">{children}</Link> : children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  path: PropTypes.string,
  color : PropTypes.string,
  onClick : PropTypes.func,

}

export default Button;
