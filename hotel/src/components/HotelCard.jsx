import { Link } from "react-router-dom";
import { addItem, deleteItems } from "../store/slices/fav/favAPIs";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import useProtectRoute from "../hooks/use-protect-route";
import Routing from "./messages/Routing";
import HotelSkeleton from "./loader/HotelSkeleton";

const HotelCard = ({ spinning, hotel }) => {
  const { userToken, show, open, close } = useProtectRoute();
  const dispatch = useDispatch();
  
  const itemsId = JSON.parse(localStorage.getItem("favorites"));
  

  const handelFavorite = useCallback(
    (id) => {
      if (itemsId?.includes(id)) {
        dispatch(deleteItems(id));
        localStorage.setItem("favorites",JSON.stringify(itemsId?.filter(item => item !== id)))
      } else {
        dispatch(addItem({hotels : [id]}));
      }
    },
    [ itemsId, dispatch]
  );

  return (
    <>
      <Routing show={show} close={close} />
      {spinning && <HotelSkeleton />}
      {hotel?.map((hotels) => {
        return (
          <div
            className="relative h-[320px] shadow-lg rounded-md overflow-hidden"
            key={hotels._id}
          >
            <div className="max-w-full h-[200px] max-h-full">
              <img
                src={hotels.thumbnails}
                alt="hotel"
                className="w-full h-full"
              />
            </div>
            <div className="between absolute top-2 px-3 w-full">
              <p className="py-1 px-3 rounded-full bg-blue-500 text-white">
                {hotels.rate}
                <i className="fa-solid fa-star ml-2 text-[13px] text-amber-300"></i>
              </p>
              <div
                className="h-7 w-7 flex justify-center items-center rounded-full bg-white cursor-pointer"
                onClick={
                  userToken
                    ? () =>
                        handelFavorite(
                          hotels._id
                        )
                    : open
                }
              >
                <i
                  className={`fa-solid fa-heart ${
                    userToken && itemsId?.includes(hotels._id)
                      ? "text-red-500"
                      : "text-slate-400/50"
                  } pt-0.5`}
                ></i>
              </div>
            </div>
            <div className="bg-white px-3 py-4">
              <h4 className="text-slate-800">{hotels.name}</h4>
              <p className="text-slate-500 text-[14px] py-2">
                <i className="fa-solid fa-map-marker-alt mr-1 text-slate-500"></i>
                {hotels.address}
              </p>
              <div className="between">
                <p className="text-slate-900 text-[13px]">
                  Night start from/
                  <span className="text-emerald-600 text-lg font-bold">
                    ${hotels.price}
                  </span>
                </p>
                <Link to={`/hotels/${hotels._id}`} className="no-underline">
                  <i className="fa-solid fa-angle-right text-slate-700"></i>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default HotelCard;
