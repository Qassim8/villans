import { Link } from "react-router-dom";

const Routing = ({ show, close }) => {
  return (
    <>
      <div
        className={`fixed ${
          show ? "top-16 end-2 md:end-16" : "top-0 -end-full"
        } text-center bg-white max-w-full px-3 py-5 rounded shadow-lg duration-300 z-[10]`}
      >
        <i
          className="fa-solid fa-times absolute top-2 end-2 text-slate-400 duration-100 hover:text-slate-600 cursor-pointer"
          onClick={close}
        ></i>
        <i className="fa-solid fa-triangle-exclamation fa-fade fa-3x text-amber-400"></i>
        <p className="py-5 text-slate-600 text-lg">
          Please login or signup first
        </p>
        <div className="between gap-3 pt-3">
          <Link
            to={"/login"}
            className="w-full py-1 text-[14px] text-white bg-blue-500 rounded duration-200 hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="w-full py-1 text-[14px] text-white bg-emerald-500 rounded duration-200 hover:bg-emerald-700"
          >
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};

export default Routing;
