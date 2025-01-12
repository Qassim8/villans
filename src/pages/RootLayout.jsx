import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const RootLayout = () => {
  return (
    <Fragment>
      <Header />
      {/* Start Hero */}
      <section className="contain">
        <div className="relative h-96 mt-5 rounded-lg back-first overlay">
          <div className="absolute w-full text-center top-1/2 -translate-y-1/2 text-white">
            <h1 className="text-[25px] md:text-[40px]">
              Book your stay with Villans
            </h1>
            <p className="text-[13px] md:text-[18px]">1,386 rooms around UAE are waiting for you!</p>
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
      {/* End Hero */}
      {/* Start Distenation */}
      <section className="pt-24 pb-16 bg-slate-100">
        <div className="contain">
          <h4 className="text-md font-bold">Popular Distenations</h4>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            <div className="relative md:row-span-3 sm:row-span-1 overflow-hidden h-full">
              <p className="text-[14px] absolute bottom-5 start-2 py-1 px-3 bg-slate-50/80 rounded-full">
                Abu-Dhabi
              </p>
              <img
                src={
                  "https://images.pexels.com/photos/3873664/pexels-photo-3873664.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                }
                alt="destinations"
                className="image-effects"
              />
            </div>
            <div className="relative row-span-1 overflow-hidden h-full">
              <p className="text-[14px] absolute bottom-5 start-2 py-1 px-3 bg-slate-50/80 rounded-full">
                Dubai
              </p>
              <img
                src={
                  "https://images.pexels.com/photos/10514386/pexels-photo-10514386.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt="destinations"
                className="image-effects"
              />
            </div>
            <div className="relative md:row-span-3 sm:row-span-1 overflow-hidden h-full">
              <p className="text-[14px] absolute bottom-5 start-2 py-1 px-3 bg-slate-50/80 rounded-full">
                Alain
              </p>
              <img
                src={
                  "https://th.bing.com/th/id/R.c2c0577c18cf2707729daeb28a9ddcc2?rik=lRgBqZRDoqk4jQ&pid=ImgRaw&r=0"
                }
                alt="destinations"
                className="image-effects"
              />
            </div>
            <div className="relative md:row-span-2 sm:row-span-1 overflow-hidden h-full">
              <p className="text-[14px] absolute bottom-5 start-2 py-1 px-3 bg-slate-50/80 rounded-full">
                Ajman
              </p>
              <img
                src={
                  "https://th.bing.com/th/id/OIP.sjIfXFD1mw6eiwolz8fszAHaEI?rs=1&pid=ImgDetMain"
                }
                alt="destinations"
                className="image-effects"
              />
            </div>
            <div className="relative md:row-span-2 sm:row-span-1 overflow-hidden h-full">
              <p className="text-[14px] absolute bottom-5 start-2 py-1 px-3 bg-slate-50/80 rounded-full">
                Fujairah
              </p>
              <img
                src={
                  "https://th.bing.com/th/id/OIP.STSykr7tdIpJuMro8s9IqgHaE8?rs=1&pid=ImgDetMain"
                }
                alt="destinations"
                className="image-effects"
              />
            </div>
            <div className="relative row-span-1 overflow-hidden h-full">
              <p className="text-[14px] absolute bottom-5 start-2 py-1 px-3 bg-slate-50/80 rounded-full">
                Sharjah
              </p>
              <img
                src={
                  "https://images.pexels.com/photos/17420377/pexels-photo-17420377/free-photo-of-monument-on-square-in-al-juraina-park-in-sharjah-in-uae.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt="destinations"
                className="image-effects"
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Distenation */}
      {/* Start Featuers */}
      <section className="py-16">
        <div className="contain between flex-col md:flex-row gap-5">
          <div className="featuer-box">
            <div className="w-[100px]">
              <img
                src={require("../hotels img/booking_13061530.png")}
                className="max-w-full"
                alt="icons"
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
                src={require("../hotels img/hotel_13061449.png")}
                className="max-w-full"
                alt="icons"
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
                src={require("../hotels img/online-booking_13061499.png")}
                className="max-w-full"
                alt="icons"
              />
            </div>
            <div>
              <h4 className="font-bold">Book easily</h4>
              <span>Discover a great deal to book on our site</span>
            </div>
          </div>
        </div>
      </section>
      {/* End Featuers */}
      {/* Start About */}
      <section className="pt-16 pb-20 bg-slate-100">
        <div className="contain">
          <h4 className="text-md font-bold">About Villans</h4>
          <div className="my-10 flex justify-center items-center gap-10">
            <div className="w-[1500px] hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fHww"
                className="w-full rounded"
                alt="about-section"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 bg-white rounded box-shadow duration-300 hover:text-white hover:bg-blue-600">
                <h3 className="font-bold mb-3">Villans's local hotel search</h3>
                <p className="text-[13px]">
                  villans’s hotel search allows users to compare hotel services
                  in just a few clicks from on site for more than 200 hotels and
                  other types of accommodation in over UAE. We help hundreds of
                  travelers each year compare deals for hotels and
                  accommodations
                </p>
              </div>
              <div className="p-5 md: bg-white md:translate-y-5 rounded box-shadow duration-300 hover:text-white hover:bg-blue-600">
                <h3 className="font-bold mb-3">How to book</h3>
                <p className="text-[13px]">
                  villans is a hotel search with an extensive services
                  comparison. By clicking on the “reserve” button, you will be
                  forwarded onto a hotel details and rooms where you can
                  complete the reservation for the hotel deal found on villans
                </p>
              </div>
              <div className="p-5 bg-white rounded box-shadow duration-300 hover:text-white hover:bg-blue-600">
                <h3 className="font-bold mb-3">Find cheap hotels on villans</h3>
                <p className="text-[13px]">
                  With villans you can easily find your ideal hotel and compare
                  prices and services. Simply enter where you want to go and
                  your desired travel dates, and let our filter compare
                  accommodation prices and services for you.
                </p>
              </div>
              <div className="p-5 md: bg-white md:translate-y-5 rounded box-shadow duration-300 hover:text-white hover:bg-blue-600">
                <h3 className="font-bold mb-3">
                  Hotel reviews help you find your ideal hotel
                </h3>
                <p className="text-[13px]">
                  Over 200 aggregated hotel ratings and more than 10,000 images
                  allow you to find out more about where you're traveling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About */}
      <Footer />
    </Fragment>
  );
};
export default RootLayout;
