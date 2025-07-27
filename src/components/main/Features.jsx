import React from 'react'

function Features() {
  return (
    <section className="py-16 bg-slate-100">
      <div className="contain between flex-col md:flex-row gap-5">
        <div className="featuer-box">
          <div className="w-[100px]">
            <img
              src={require("../../hotels img/booking_13061530.png")}
              className="max-w-full"
              alt="icons"
              loading="lazy"
            />
          </div>
          <div>
            <h4 className="font-bold">Search simply</h4>
            <span>Search through 247 hotels in just a few seconds</span>
          </div>
        </div>
        <div className="featuer-box">
          <div className="w-[100px]">
            <img
              src={require("../../hotels img/hotel_13061449.png")}
              className="max-w-full"
              alt="icons"
              loading="lazy"
            />
          </div>
          <div>
            <h4 className="font-bold">Compare confidently</h4>
            <span>Compare hotel services from your place</span>
          </div>
        </div>
        <div className="featuer-box">
          <div className="w-[100px]">
            <img
              src={require("../../hotels img/online-booking_13061499.png")}
              className="max-w-full"
              alt="icons"
              loading='lazy'
            />
          </div>
          <div>
            <h4 className="font-bold">Book easily</h4>
            <span>Discover a great deal to book on our site</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;