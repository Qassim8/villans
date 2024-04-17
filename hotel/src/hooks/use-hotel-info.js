import { useDispatch, useSelector } from "react-redux";
import { getHotelId, getHotels } from "../store/slices/hotel/hotelAPIs";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const useHotelInfo = () => {

      const { id } = useParams();
      const { hotel, hotelInfo, load } = useSelector((state) => state.hotel);
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(getHotels());
      }, [dispatch]);
      
      useEffect(() => {
        dispatch(getHotelId(id));
      }, [dispatch, id]);

      return{id, hotel, hotelInfo, load};
}
export default useHotelInfo;