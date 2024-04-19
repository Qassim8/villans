import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getRoomId } from "../store/slices/room/room.apis";
import { Button } from "@material-tailwind/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useProtectRoute from "../hooks/use-protect-route";
import Routing from "../components/messages/Routing";

const RoomDetails = () => {
  const { id } = useParams();
  const { roomInfo , loading} = useSelector((state) => state.room);
  const { userToken, show, open, close } = useProtectRoute();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomId(id));
  }, [dispatch, id]);

  return (
    <>
      <Header />
      <Routing show={show} close={close} />
      {loading ? (<div class="flex items-center justify-center h-screen">
          <div class="relative">
            <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
          </div>
        </div>):(<section className="contain pb-20">
        <Link
          to={`/hotels/${roomInfo?.hotelId._id}`}
        >
          <i className="fa-solid fa-arrow-left text-slate-700 py-5"></i>
        </Link>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {roomInfo?.images?.map((img, index) => (
              <div key={index} className="h-[180px] w-full">
                <img src={img} alt="room" className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>
        <h2 className="mt-5 md:font-bold md:text-[20px]">{roomInfo?.description}</h2>
        <div className="p-3 my-5 bg-slate-200 rounded">
          <h4 className="font-bold mb-2 text-[15px]">
            <i className="fa-solid fa-hand-sparkles"></i> Highlights
          </h4>
          {roomInfo?.features?.map((feat, index) => (
            <p key={index} className="text-[14px]">
              {feat}
            </p>
          ))}
        </div>
        <div>
          <div>
            <p className="text-slate-900 text-[14px] py-1">
              <i className="fa-solid fa-ruler-combined me-2 text-blue-600"></i>
              {roomInfo?.space} sq ft
            </p>
            <p className="text-slate-900 text-[14px] py-1">
              <i className="fa-solid fa-water me-2 text-blue-600"></i>
              Ocean view
            </p>
            <p className="text-slate-900 text-[14px] py-1">
              <i className="fa-solid fa-bed me-2 text-blue-600"></i>
              {roomInfo?.description}
            </p>
            <p className="text-slate-900 text-[14px] pt-1 pb-8">
              <i className="fa-solid fa-user-friends me-2 text-blue-600"></i>
              Sleeps {roomInfo?.sleepers}
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-bold pb-5">Room Amenities</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h5 className="font-bold text-[14px] pb-2 pt-3 md:pt-0">
                <i className="fa-solid fa-bed me-2"></i>Bedroom
              </h5>
              {roomInfo?.bedroom?.map((bed, index) => (
                <p key={index} className="text-[14px]">
                  {bed}
                </p>
              ))}
            </div>
            <div>
              <h5 className="font-bold text-[14px] pb-2 pt-3 md:pt-0 ">
                <i className="fa-solid fa-utensils me-2"></i>Food and drink
              </h5>
              {roomInfo?.eat?.map((eat, index) => (
                <p key={index} className="text-[14px]">
                  {eat}
                </p>
              ))}
            </div>
            <div>
              <h5 className="font-bold text-[14px] pb-2 pt-3 md:pt-0">
                <i className="fa-solid fa-bath me-2"></i>Bathroom
              </h5>
              {roomInfo?.bathroom?.map((bath, index) => (
                <p key={index} className="text-[14px]">
                  {bath}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 my-5">
          <span>Total Cost</span>
          <span className="text-emerald-600 font-bold">${roomInfo?.price}</span>
        </div>
        <div className="text-center">
          {userToken ?
          <Link
            to={`/hotels/${roomInfo?.hotelId._id}/${roomInfo?._id}/reserv`}
            className="text-[14px] font-bold px-10 sm:px-32 py-3 bg-blue-600 text-white rounded-sm duration-200 hover:bg-blue-700"
          >
            Book now
          </Link>:
          <Button
          onClick={open}
            className="text-[14px] px-10 sm:px-32 py-3 bg-blue-600 text-white rounded-sm duration-200 hover:bg-blue-700"
          >
            Book now
          </Button>}
        </div>
      </section>)}
      <Footer />
    </>
  );
};

export default RoomDetails;
