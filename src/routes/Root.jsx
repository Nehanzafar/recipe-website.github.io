import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Root = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
