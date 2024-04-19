import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useProtectRoute from "../hooks/use-protect-route";

const Header = () => {
  const { userToken, logUserOut } = useProtectRoute();
  return (
    <>
      <header className="bg-white shadow-md z-20">
        <nav className="contain between py-3">
          <Link to={"/villans"} className="no-underline text-slate-800 text-2xl">
            Villans
          </Link>
          {userToken ? (
            <Button className="text-white text-[14px] font-normal bg-slate-800 px-3 py-2 rounded-3xl border border-slate-800 hover:bg-white hover:text-slate-800 duration-200"
            onClick={logUserOut}>
              logout <i className="fa-solid fa-sign-out ms-1"></i>
            </Button>
          ) : (
            <Link
              to={"/login"}
              className="text-white bg-blue-600 px-5 py-2 rounded-3xl border border-blue-600 hover:bg-white hover:text-blue-600 duration-200"
            >
              login <i className="fa-solid fa-sign-in"></i>
            </Link>
          )}
        </nav>
      </header>
    </>
  );
};
export default Header;
