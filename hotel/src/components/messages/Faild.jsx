
const Faild = ({ open, error, close }) => {
  return (
    <>
      {open && (
        <div className="dark-overlay">
          <div className="fixed top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-5 rounded z-[1350] duration-500">
            <i
              className="fa-solid fa-times absolute top-2 end-2 text-slate-400 duration-300 hover:text-slate-600 cursor-pointer"
              onClick={close}
            ></i>
            <div className="py-5 px-5 text-center">
              <i className="fa-solid fa-times px-6 py-6 text-white bg-red-500 rounded-full border-[5px] border-red-100/80"></i>
              <p className="py-7 text-slate-600">{error}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Faild;
