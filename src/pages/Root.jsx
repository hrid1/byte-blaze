import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Nav></Nav>

      <div className="min-h-[calc(100vh-116px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
