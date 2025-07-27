import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/main/Hero";
import Destination from "../components/main/Destination";
import Features from "../components/main/Features";
import About from "../components/main/About";

const RootLayout = () => {
  return (
    <Fragment>
      <Header />
      {/* Start Hero */}
      <Hero />
      {/* End Hero */}
      {/* Start Distenation */}
      <Destination />
      {/* End Distenation */}
      {/* Start Featuers */}
      <Features />
      {/* End Featuers */}
      {/* Start About */}
      <About />
      {/* End About */}
      <Footer />
    </Fragment>
  );
};
export default RootLayout;
