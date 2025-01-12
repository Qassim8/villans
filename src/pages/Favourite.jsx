import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch} from "react-redux";
import { deleteItems } from "../store/slices/fav/favAPIs";
import { useCallback } from "react";
import useFavoriteInfo from "../hooks/use-favorite-info";
import HotelSkeleton from "../components/loader/HotelSkeleton";

const Favorite = () =>{

  const { load, item } = useFavoriteInfo();
  const dispatch = useDispatch();

  const itemsId = JSON.parse(localStorage.getItem("favorites"));

  const deleteItem = useCallback((id) => {
      dispatch(deleteItems(id));
      localStorage.setItem("favorites",JSON.stringify(itemsId?.filter(item => item !== id)))
      },
      [itemsId, dispatch]
    );

      const items = item?.map((items) => {
        return (
          <div
            className="relative shadow-lg rounded-md overflow-hidden"
            key={items?._id}
          >
            <div className="max-w-full h-[200px] max-h-full">
              <img
                src={items?.thumbnails}
                alt="hotel"
                className="w-full h-full"
              />
            </div>
            <div className="between absolute top-2 px-3 w-full">
              <p className="py-1 px-3 rounded-full bg-blue-500 text-white">
                {items?.rate}
              </p>
              <div
                className="h-7 w-7 flex justify-center items-center rounded-full bg-white cursor-pointer"
                onClick={() => deleteItem(items?._id)}
              >
                <i className={`fa-solid fa-heart text-red-500 pt-0.5`}></i>
              </div>
            </div>
            <div className="bg-white px-3 py-4">
              <h4 className="text-slate-800">{items?.name}</h4>
              <p className="text-slate-500 text-[14px] py-2">
                <i className="fa-solid fa-map-marker-alt mr-1 text-slate-500"></i>
                {items?.address}
              </p>
              <div className="between">
                <p className="text-slate-900 text-[13px]">
                  Night start from/
                  <span className="text-emerald-600 text-lg font-bold">
                    {" "}
                    ${items?.price}
                  </span>
                </p>
                <Link to={`/hotels/${items?._id}`} className="no-underline">
                  <i className="fa-solid fa-angle-right text-slate-700"></i>
                </Link>
              </div>
            </div>
          </div>
        );
      });

    return (
      <>
        <Header />
        {/* Start Boxs */}
        {load ? (
          <div className="contain grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-5 pb-20">
            <HotelSkeleton />
          </div>
        ) : items?.length === 0 ? (
          <div className="relative text-center top-1/2 translate-y-1/2">
            <i className="fa-solid fa-exclamation fa-2x py-3 px-6 border-[3px] border-blue-300 text-blue-300 mb-5 rounded-full animate-bounce"></i>
            <p className="text-slate-500 font-bold">
              Please add some items
            </p>
          </div>
        ) : (
          <div className="contain grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full pt-5 pb-20">
            {items}
          </div>
        )}
        {/* End Boxs */}
        <Footer />
      </>
    );
}
export default Favorite;