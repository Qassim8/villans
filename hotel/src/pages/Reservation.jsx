import { useState } from "react";
import { Link } from "react-router-dom";
import ReservInfo from "../components/book-process/ReservInfo";
import PaymentInfo from "../components/book-process/PaymentInfo";
import Stepper from 'react-stepper-horizontal';

const Reservetion = () => {

  const hotelId = localStorage.getItem("hotelId");
  const roomId = localStorage.getItem("roomId")
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "User details"},
    { title: "Payment process"},
  ];
  const next = () => setActiveStep(activeStep + 1);
  const prev = () => setActiveStep(activeStep - 1);

  const getComponent = () =>{
    switch(activeStep){
      case 0 : return <ReservInfo next={next} />;
      case 1 : return <PaymentInfo next={next} prev={prev} />;
      default : return null;
    }
  }


  return (
    <>
      <section className="contain">
        <Link to={`/hotels/${hotelId}/${roomId}`} className="no-underline pt-3 block">
          <i className="fa-solid fa-arrow-left text-slate-700"></i>
        </Link>
        <Stepper steps={steps} activeStep={activeStep}/>
        {getComponent()}
      </section>
    </>
  );
};
export default Reservetion;
