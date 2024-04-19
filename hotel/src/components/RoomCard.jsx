import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../store/slices/room/room.apis";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const RoomCard = ({id}) =>{

    const {room} = useSelector(state => state.room);
    const dispatch = useDispatch();

    const roomInfo = (hotelId, roomId) =>{
      localStorage.setItem('hotelId', hotelId);
      localStorage.setItem('roomId', roomId)
    }

    useEffect(() => {
        dispatch(getRooms());
    },[dispatch]);



    const rooms = room?.map(
      (rooms) =>
        id === rooms?.hotelId._id && (
          <div className="box-shadow rounded-md group mb-7 block" key={rooms._id}>
            <div className="rounded w-full h-[170px] max-h-full">
              <img
                src={rooms?.thumbnails}
                alt="room"
                className="w-full h-full"
              />
            </div>
            <div className="px-3 pb-3">
              <h4 className="text-[17px] text-slate-700 font-bold pt-3">{rooms?.description}</h4>
              <div className="pt-5">
                <p className="text-slate-900 text-[14px] py-1">
                  <i className="fa-solid fa-ruler-combined me-2 text-blue-600"></i>
                  {rooms?.space} sq ft
                </p>
                <p className="text-slate-900 text-[14px] py-1">
                  <i className="fa-solid fa-wifi me-2 text-blue-600"></i>
                  Free WIFI
                </p>
                <p className="text-slate-900 text-[14px] py-1">
                  <i className="fa-solid fa-bed me-2 text-blue-600"></i>
                  {rooms?.bed}
                </p>
                <p className="text-slate-900 text-[14px] pt-1 pb-8">
                  <i className="fa-solid fa-users me-2 text-blue-600"></i>
                  Sleeps {rooms?.sleepers}
                </p>
              </div>
              <div className="between">
                <span className="text-emerald-600 font-bold">
                  ${rooms?.price}
                </span>
                <Link
                  to={`/hotels/${rooms?.hotelId._id}/${rooms?._id}`}
                  className="no-underline"
                >
                  <Button className="text-[12px] py-1 px-3 bg-blue-500 text-white rounded-sm duration-200 hover:bg-blue-700"
                  onClick={() => roomInfo(rooms?.hotelId._id, rooms?._id)}
                  >
                    more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )
    );

  return (
      <>{rooms}</>
  );
}

export default React.memo(RoomCard);