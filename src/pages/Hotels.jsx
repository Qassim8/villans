import Footer from "../components/Footer";
import Header from "../components/Header";
import Filter from "../components/Filter";
import HotelCard from "../components/HotelCard";
import { useEffect, useState } from "react";
import axios from "axios";
import useHotelInfo from "../hooks/use-hotel-info";

const Hotels = () => {
  const { hotel } = useHotelInfo();
  const [spinning, setSpinning] = useState(false);
  const [address, setAddress] = useState("");
  const [rate, setRate] = useState("");


  // const getHotels = async () => {
  //   setSpinning(true);
  //   await axios
  //     .get(
  //       `https://hotel-booking-api-wnq6.onrender.com/hotels?address=${address}`
  //     )
  //     .then((response) => setHotels(response.data.hotels))
  //     .then(() => setSpinning(false))
  //     .catch((response) => {
  //       return <p>{response.error}</p>;
  //     });
  // };

  // useEffect(() => {
  //   getHotels();
  //   // eslint-disable-next-line
  // }, [address]);

  // const getRates = async () => {
  //   setSpinning(true);
  //   await axios
  //     .get(`https://hotel-booking-api-wnq6.onrender.com/hotels?rate=${rate}`)
  //     .then((response) => setHotels(response.data.hotels))
  //     .then(() => setSpinning(false))
  //     .catch((response) => {
  //       return <p>{response.error}</p>;
  //     });
  // };

  // useEffect(() => {
  //   getRates();
  //   // eslint-disable-next-line
  // }, [rate]);

  // const filterPrice = (min, max) => {
  //   const newItems = hotels?.filter((value) => {
  //     return value.price > min && value.price <= max;
  //   });
  //   setHotels(newItems);
  // };

  return (
    <>
      <Header />
      {/* Start Holtels */}
      <section className="">
        <div className="contain">
          <div className="md:flex gap-5">
            <Filter place={setAddress} rating={setRate}  />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:w-[70%] pt-5 pb-20">
              <HotelCard
                spinning={spinning}
                hotel={hotel}
              />
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
