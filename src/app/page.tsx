import Information from "./component/Information";
import ImageSlider from "./component/ImageSlider";
import Navbar from "./component/Navbar";
import PricingTabs from "./component/PricingTabs";
import BarberGrid from "./component/BarberGrid";
import Footer from "./component/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        className="items-center bg-cover bg-center  h-screen overflow-hidden"
        style={{ backgroundImage: "url(/image/bg-banner.png)" }}
      >
        <Navbar />
        <div className="flex justify-between text-white px-12">
          <div className=" flex flex-col justify-between h-screen py-24">
            <div className="text-2xl font-semibold">#GrowmingEveryday</div>
            <div className="max-w-[900px] text-[14px] pb-20">
              <p className="pb-6">
                Upgrade gaya dan kesehatan rambut kamu di Growming! Dapatkan
                pengalaman cukur dan perawatan premium yang bikin rambut kamu
                tampil lebih rapi, stylish, dan terawat setiap saat.
              </p>
              <button className="px-6 py-2  font-semibold border-2 border-white text-white bg-transparent hover:bg-[#1a7241] hover:text-white hover:border-transparent rounded-[2px] transition-all duration-300">
                Booking Sekarang
              </button>
            </div>
          </div>
          <div className="hidden lg:block overflow-hidden pl-72 ">
            <ImageSlider />
          </div>
        </div>
      </div>
      <Information />
      <PricingTabs />
      <BarberGrid />
      <br />
      <br />
      <div className="bg-[#ECF3EF] py-12 px-4 md:flex justify-between md:px-28">
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
            width={500}
            height={12}
          />
        </div>
      </div>
      <Footer />

      <div className="bg-[#ECF3EF] text-black text-center font-medium text-xs p-2">
        Copyright © 2024 PT. Power Growming Indonesia Ganteng
      </div>
    </div>
  );
}
