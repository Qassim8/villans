import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink, Outlet } from "react-router-dom";

const Books = () =>{
    return (
      <>
        <Header />
        {/* Booking Data */}
        <div className="contain">
          <div className="flex items-center mb-14 text-center book">
            <NavLink
              to={"books/next"}
              className="font-normal text-slate-900 w-full py-2"
            >
              Next Books
            </NavLink>
            <NavLink
              to={"books/prev"}
              className="font-normal text-slate-900 w-full py-2"
            >
              Previous Books
            </NavLink>
          </div>
          <Outlet />
        </div>
        {/* Booking Data */}
        <Footer />
      </>
    );
}
export default Books;