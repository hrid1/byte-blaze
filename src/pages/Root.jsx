import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
