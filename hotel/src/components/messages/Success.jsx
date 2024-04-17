import { Link } from "react-router-dom";

const Success = ({open, text, path, btnName, close }) => {

  return (
    <>
      {open && (
        <div className="dark-overlay">
          <div className="fixed top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-5 rounded z-[1350] duration-500">
            <div className="py-5 text-center">
              <i
                className="fa-solid fa-times absolute top-2 end-2 text-slate-400 duration-300 hover:text-slate-600 cursor-pointer"
                onClick={close}
              ></i>
              <div>
                <i className="fa-solid fa-check text-[23px] px-7 py-7 text-white bg-emerald-400 rounded-full border-[5px] border-emerald-100/80"></i>
              </div>
              <p className="py-7 px-10 text-slate-600">{text}</p>
              <Link
                className="block px-8 py-2 mb-2 bg-emerald-400 text-white rounded-full duration-200 hover:bg-emerald-500"
                to={path}
                onClick={close}
              >
                {btnName}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Success;
