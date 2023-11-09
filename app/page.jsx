import Image from "next/image";
import HeaderSection from "./headerSection";
import First from "./first";
import Services from "./services";
import Testimonials from "./testimonials";
import Contact from "./contact";
import Prices from "./prices";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <First />
      <Services />
      <Prices />
      <Testimonials />
      <Contact />
      <Footer/>
    </>
  );
}
