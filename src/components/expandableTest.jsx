import React from "react";

const ExpandableText = ({ text, className }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  {
    if (text.length >= 255 && !isOpen)
      return (
        <div onClick={() => setIsOpen(true)} className={`${className}`}>
          <p className="bg-backgroundColors-1/80 p-1 rounded-md">
            {text.slice(0, 255)}
            <span className="text-secondary-1 cursor-pointer">
              {" "}
              ...Read more
            </span>
          </p>
        </div>
      );
    else
      return (
        <div onClick={() => setIsOpen(false)} className={`${className}`}>
          <p className="bg-backgroundColors-1/80 p-1 rounded-md">
            {text}
            <span className="text-secondary-1 cursor-pointer"> Read less</span>
          </p>
        </div>
      );
  }
};
export default ExpandableText;
