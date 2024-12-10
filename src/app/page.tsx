import Information from "./component/Information";
import Navbar from "./component/Navbar";
import PricingTabs from "./component/PricingTabs";
import BarberGrid from "./component/BarberGrid";
import Footer from "./component/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div
        className="items-center bg-center  h-screen overflow-hidden"
        style={{
          backgroundImage: "url(/image/dua.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <div className="flex flex-col justify-center items-center h-screen text-white ">
          <Image
            src="/icon/logofontwhite.svg"
            alt="Growming"
            width={522}
            height={72}
            className="max-w-72 h-auto md:max-w-[350px]"
          />
          <p className="tracking-[0.4em] font-semibold text-shadow-xl">
            HAIR STUDIO
          </p>
          <p className=" font-semibold mt-16 text-center text-shadow-xl">
            WHERE YOUR HAIR<br></br> TRULY MATTER
          </p>
          <Button variant="secondary" className="mt-16">
            <a href="https://example.com" className="block w-full text-center">
              Book Now
            </a>
          </Button>
        </div>
      </div>
      <Information />
      <PricingTabs />
      <BarberGrid />
      <br />
      <br />
      <div className="bg-white py-12 px-4 md:flex justify-between md:px-28">
        <div className="">
          <h1 className=" font-semibold text-3xl md:text-4xl md:max-w-lg">
            Hair Grooming and Styling you have to go
          </h1>
          <button className=" px-4 py-2 mt-10 mb-10 border-2 border-black text-black font-semibold text-xs rounded-md hover:bg-black hover:text-white transition">
            Let&apos;s make a schedule
          </button>
        </div>
        <div>
          <Image
            src="/icon/mainlogo.svg"
            alt="mainlogo"
            width={400}
            height={12}
          />
        </div>
      </div>
      <Footer />

      <div className="bg-white text-black text-center font-medium text-xs p-2">
        Copyright © 2024 PT. Power Growming Indonesia
      </div>
    </div>
  );
}
