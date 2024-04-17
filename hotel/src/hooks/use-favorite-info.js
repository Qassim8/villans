import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../store/slices/fav/favAPIs";
import { useEffect } from "react";

const useFavoriteInfo = () => {
  const { load, item, items } = useSelector((state) => state.fav);
  const dispatch = useDispatch();
  const itemId = item?.map((item) => {
    return item?._id;
  });

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
localStorage.setItem("fav", JSON.stringify(itemId));
  return { load, item, items, itemId };
};
export default useFavoriteInfo;
