import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useHotelInfo from "../hooks/use-hotel-info";
import RoomCard from "../components/RoomCard";
import Map from "../components/open-street-map/Map";

const HoltelDetails = () => {
  const { id, hotelInfo, load } = useHotelInfo();
  return (
    <div className="relative">
      <Header />
      {load ? (
        <div class="flex items-center justify-center h-screen">
          <div class="relative">
            <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
          </div>
        </div>
      ) : (
        <div>
          <div className="contain">
            <Link to={"/hotels"} className="no-underline">
              <i className="fa-solid fa-arrow-left text-slate-700 py-3"></i>
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {hotelInfo?.images?.map((img, index) => (
                <div key={index} className="h-[180px] w-full">
                  <img src={img} alt="hotel" className="w-full h-full" />
                </div>
              ))}
            </div>
            <div className="pt-5 pb-10 between">
              <h2 className="font-bold">{hotelInfo?.name}</h2>
              <p className="flex items-center py-1 px-5 rounded-full bg-blue-600 text-white">
                {hotelInfo?.rate}
                <i className="fa-solid fa-star text-[10px] text-amber-400 ms-1"></i>
              </p>
            </div>
          </div>
          <div className="bg-white sticky top-0 border-b border-slate-500 z-[5]">
            <ul className="contain between text-center">
              <li className="w-full">
                <HashLink
                  to={`/hotels/${hotelInfo?._id}/#overview`}
                  className="hash-link"
                >
                  Overview
                </HashLink>
              </li>
              <li className="w-full">
                <HashLink
                  to={`/hotels/${hotelInfo?._id}/#rooms`}
                  className="hash-link"
                >
                  Rooms
                </HashLink>
              </li>
              <li className="w-full">
                <HashLink
                  to={`/hotels/${hotelInfo?._id}/#amenities`}
                  className="hash-link"
                >
                  Amenities
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="contain">
            <div id="overview" className="pt-5 pb-16">
              <h4 className="font-bold pb-5">Property Overview</h4>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div>
                    {hotelInfo?.features?.map((feat, index) => (
                      <p key={index}>{feat}</p>
                    ))}
                  </div>
                  <div className="rounded h-[250px] w-full mt-5 md:mt-0">
                    <Map
                      lat={hotelInfo?.lat}
                      long={hotelInfo?.long}
                      address={hotelInfo?.description}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="rooms" className="pt-5 pb-16 border-t border-slate-400">
              <h4 className="font-bold pb-5">Select Your Room</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <RoomCard id={id} />
                </div>
            </div>
            <div
              id="amenities"
              className="pt-5 pb-16 border-t border-slate-400"
            >
              <h4 className="font-bold pb-5">Room Amenities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div>
                  <h5 className="font-bold text-[14px] py-3 text-blue-600">
                    <i className="fa-solid fa-utensils me-2"></i>Food and drink
                  </h5>
                  {hotelInfo?.eat?.map((eat, index) => (
                    <p className="text-[14px]" key={index}>
                      {eat}
                    </p>
                  ))}
                </div>
                <div>
                  <h5 className="font-bold text-[14px] py-3 text-blue-600">
                    <i className="fa-solid fa-bell-concierge me-2"></i>Guest
                    services
                  </h5>
                  {hotelInfo?.guest?.map((guest, index) => (
                    <p className="text-[14px]" key={index}>
                      {guest}
                    </p>
                  ))}
                </div>
                <div>
                  <h5 className="font-bold text-[14px] py-3 text-blue-600">
                    <i className="fa-solid fa-briefcase me-2"></i>Business
                    services
                  </h5>
                  {hotelInfo?.business?.map((business, index) => (
                    <p className="text-[14px]" key={index}>
                      {business}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};
export default HoltelDetails;
