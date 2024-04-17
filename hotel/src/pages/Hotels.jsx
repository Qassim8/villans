import Footer from "../components/Footer";
import Header from "../components/Header";
import Filter from "../components/Filter";
import HotelCard from "../components/HotelCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Hotels = () => {

  const [hotels, setHotels] = useState();
  const [spinning, setSpinning] = useState(false);
  
  useEffect(() =>{
    setSpinning(true)
    axios
      .get("https://hotel-booking-api-wnq6.onrender.com/hotels")
      .then(
        (response) => setHotels(response.data.hotels)).then(() => setSpinning(false)).catch((response) => {return <p>{response.error}</p>});
  },[])

    const filterLocation = (location) => {
      const newItems = hotels?.filter((value) => {
        return value.address === location;
      });
      setHotels(newItems);
    };

    const filterRating = (rate) => {
      const newItems = hotels?.filter((value) => {
        return value.rate === rate;
      });
      setHotels(newItems);
    };

    const filterPrice = (min, max) =>{
      const newItems = hotels?.filter((value) =>{
        return value.price > min && value.price <= max
      })
      setHotels(newItems)
    }

  return (
    <>
      <Header />
      {/* Start Holtels */}
      <section className="">
        <div className="contain">
          <div className="md:flex gap-5">
            <Filter
              place={filterLocation}
              rating={filterRating}
              pricing={filterPrice}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:w-[70%] pt-5 pb-20">
              <HotelCard spinning={spinning} hotel={hotels} />
            </div>
          </div>
        </div>
      </section>
      {/* End Hotels */}
      <Footer />
    </>
  );
};
export default Hotels;
