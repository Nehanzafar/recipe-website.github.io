import { useState } from "react";
import { Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import GotoTheTop from "../utils/toTheTop";
import logo from "../assets/imgs/SVGs/Logo.svg";
import Menu from "../assets/imgs/SVGs/menu";
import { nav } from "../constants/index";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  return (
    <div className="top-0 w-full z-50 bg-primary-1 px-3 py-3 shadow-xl">
      <div className="flex justify-between">
        <Link to={"/"} className="flex flex-row items-center">
          <img
            src={logo}
            className="w-12 h-10"
            alt="Main logo that lead to home page"
          />
          <h3 className="m-1 text-textColors-1 capitalize font-poppins md:text-mobileParagraph font-bold">
            The Ohio Sigma
          </h3>
        </Link>

        <nav
          className={`fixed top-[3.94rem] left-0 right-0 bottom-0 lg:static lg:flex lg:flex-row flex-col items-center ${
            openNavigation ? "flex" : "hidden"
          } mx-auto lg:bg-transparent`}
        >
          <ul
            className={`flex flex-col lg:flex-row justify-center m-auto lg:mx-3 lg:my-0 z-2 items-center relative lg:top-0 -top-12`}
          >
            {nav.map((v) => (
              <li key={v.id} className="">
                <Button
                  path={v.path}
                  onClick={handleClick}
                  className={
                    "lg:my-0 my-3 mx-1 relative lg:py-1 lg:px-2 lg:inline block px-3 py-3 lg:text-[1rem] text-[1.35rem] animation-home-page"
                  }
                >
                  {v.title}
                </Button>
              </li>
            ))}
          </ul>
          <HamburgerMenu />
        </nav>
        <Button
          onClick={toggleNavigation}
          className={"lg:hidden md:py-2 md:px-3 px-3 py-2"}
        >
          <Menu openNavigation={openNavigation} />
        </Button>
        <Button
          path={"/signup"}
          color={"bg-secondary-2"}
          className={
            "hover:bg-secondary-1 px-3 py-3 text-center hidden items-center lg:flex m-0 hover:text-textColors-1 animation-home-page"
          }
        >
          Sign Up
        </Button>
      </div>
      <GotoTheTop/>
    </div>
  );
};

export default Header;
