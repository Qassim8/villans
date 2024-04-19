import { Input } from "@material-tailwind/react";
import { useState } from "react";
import useHotelInfo from "../hooks/use-hotel-info";

const Filter = ({ place, rating, pricing}) => {
  const [display, setDisplay] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const { hotel } = useHotelInfo();

  const cities = [...new Set(hotel?.map((val) => val.address))];
  const rates = [...new Set(hotel?.map((val) => val.rate))];

  const city = cities?.map((city, index) => {
    return (
      <input
        key={index}
        onClick={() => place(city)}
        className="text-[12px] text-white bg-blue-600 me-1 mb-1 py-1 w-[88px] border-none outline-none rounded-sm cursor-pointer"
        type="button"
        value={city}
      />
    );
  });

  const rate = rates?.map((rate, index) => {
    return (
      <label className="flex items-center text-[14px]" key={index}>
        <Input type="checkbox" value={rate} onClick={() => rating(rate)} />
        <span className="mx-1">{rate}</span>
        <i className="fa-solid fa-star text-blue-400 text-[10px]"></i>
      </label>
    );
  });

  return (
    <>
      <div
        className={`md:relative bg-white md:bg-transparent w-[96%] md:w-[30%] h-full ${
          display ? "fixed left-0 top-0" : "hidden -left-[700px]"
        } md:flex md:left-0 duration-300 pb-16 border-r border-slate-300 z-10`}
      >
        <div className="w-full">
          <div className="between px-3 pt-5">
            <p className="text-[16px] font-bold">Filters</p>
            <i className="fa-solid fa-sliders text-slate-400"></i>
          </div>
          <form className="px-3 py-5 w-full">
            <div className="py-5 border-b border-slate-300">
              <p className="text-[14px] mb-2">Location</p>
              <div className="flex items-center flex-wrap bg-slate-200 gap-1 p-3 rounded-sm">
                {city}
              </div>
            </div>
            <div className="py-5 border-b border-slate-300">
              <p className="text-[14px] mb-1">Rate</p>
              <div className="between flex-wrap bg-slate-200 p-3 rounded-sm">
                {rate}
              </div>
            </div>
            <div className="py-5">
              <p className="text-[14px] mb-1">Price</p>
              <div className="bg-slate-200 px-2 py-4 rounded-sm">
                <div className="mt-3 flex gap-3">
                  <Input
                    type="number"
                    placeholder="$50"
                    className="max-w-[150px] rounded-sm placeholder:text-[12px] outline-none focus:border focus:border-blue-300"
                    min={50}
                    max={100}
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                  />
                  <span className="text-[12px]">to/</span>
                  <Input
                    type="number"
                    placeholder="$2000"
                    className="max-w-[150px] rounded-sm placeholder:text-[12px] p-0 outline-none focus:border focus:border-blue-300"
                    min={100}
                    max={500}
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                  />
                </div>
                <Input
                  className="block my-3 py-1 px-5 text-[14px] text-white bg-emerald-500 rounded cursor-pointer outline-none"
                  onClick={() => pricing(first, last)}
                  type="button"
                  value="select range"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className={` md:hidden bg-blue-500 rounded-sm fixed top-1/2 -translate-y-1/2 left-0 ${
          display && "left-[95%]"
        } cursor-pointer duration-200 z-20`}
        onClick={() => setDisplay(!display)}
      >
        <i
          className={`fa-solid ${
            display ? "fa-angle-left" : "fa-sliders"
          } text-white p-2`}
        ></i>
      </div>
    </>
  );
};
export default Filter;
