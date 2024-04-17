import { NavLink } from "react-router-dom";
import Routing from "./messages/Routing";
import useProtectRoute from "../hooks/use-protect-route";

const Footer = () => {
  const { userToken, show, open, close } = useProtectRoute();

  return (
    <>
      <Routing show={show} close={close}/>
      <footer className="fixed bottom-0 bg-blue-700 w-full z-10 ">
        <ul className="contain between text-center">
          <li className="w-full">
            <NavLink to={"/hotels"} className="nav-link">
              <i className="fa-solid fa-building me-2"></i>
              Hotels
            </NavLink>
          </li>
          <li className="w-full">
            {userToken ? (
              <NavLink to="/books" className="nav-link">
                <i className="fa-solid fa-table me-2"></i>
                Booking
              </NavLink>
            ) : (
              <p
                data-modal-target="popup-modal"
                className="nav-link cursor-pointer"
                onClick={open}
              >
                <i className="fa-solid fa-table me-2"></i>
                Booking
              </p>
            )}
          </li>
          <li className="w-full">
            {userToken ? (
              <NavLink to="/fav" className="nav-link">
                <i className="fa-solid fa-heart me-2"></i>
                Favorite
              </NavLink>
            ) : (
              <p
                data-modal-target="popup-modal"
                className="nav-link cursor-pointer"
                onClick={open}
              >
                <i className="fa-solid fa-heart me-2"></i>
                Favorite
              </p>
            )}
          </li>
        </ul>
      </footer>
    </>
  );
};
export default Footer;
