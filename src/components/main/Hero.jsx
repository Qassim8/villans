import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="contain">
      <div className="relative h-96 mt-5 rounded-lg back-first overlay">
        <div className="absolute w-full text-center top-1/2 -translate-y-1/2 text-white">
          <h1 className="text-[25px] md:text-[40px]">
            Book your stay with Villans
          </h1>
          <p className="text-[13px] md:text-[18px]">
            1,386 rooms around UAE are waiting for you!
          </p>
        </div>
        <div className="absolute -bottom-5 md:-bottom-10 start-1/2 -translate-x-1/2 md:w-[600px] flex justify-center items-center p-3 bg-white shadow-2xl rounded-full duration-100">
          <div className="px-3 md:px-6 border-r border-slate-400">
            <p className="text-[10px] md:text-[16px]">Location</p>
            <p className="text-[5px] md:text-[11px] text-slate-500">
              Where are you going?
            </p>
          </div>
          <div className="px-3 md:px-6 border-r border-slate-400">
            <p className="text-[10px] md:text-[16px]">Booking-</p>
            <p className="text-[5px] md:text-[11px] text-slate-500">
              book modern room now!
            </p>
          </div>
          <div className="px-3 md:px-6">
            <p className="text-[10px] md:text-[16px]">Guests</p>
            <p className="text-[5px] md:text-[11px] text-slate-500">
              Number of guests
            </p>
          </div>
          <div className="px-3 md:px-6">
            <Link to={"/hotels"} className="no-underline">
              <i className="fa-solid fa-arrow-right p-1 text-[11px] md:text-[20px] md:p-3 text-white bg-blue-600 rounded-full border border-blue-600 hover:bg-white hover:text-blue-600 duration-200"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero