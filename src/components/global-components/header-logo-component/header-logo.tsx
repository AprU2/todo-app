import { Link, Outlet } from "react-router-dom";
import BaseText from "../text-component/text-component";
import "./header-logo.scss";

const HeaderLogo = () => {
  return (
    <>
      <Link className="header-logo" to="">
        <BaseText size="xl">TodoApp</BaseText>
      </Link>
      <Outlet />
    </>
  );
};

export default HeaderLogo;
