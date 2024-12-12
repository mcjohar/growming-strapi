"use client";

import { useState } from "react";
import Image from "next/image";

export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState("man");

  return (
    <div className="bg-white">
      <div className="flex justify-center bg-[#487257] text-white py-4 ">
        <button
          className={`px-8 py-2 text-lg ${activeTab === "man"
              ? "border-b-2 border-white font-semibold"
              : "opacity-70"
            }`}
          onClick={() => setActiveTab("man")}
        >
          MAN
        </button>
        <div className="border-l border-white h-full mx-4"></div>
        <button
          className={`px-8 py-2 text-lg ${activeTab === "woman"
              ? "border-b-2 border-white font-semibold"
              : "opacity-70"
            }`}
          onClick={() => setActiveTab("woman")}
        >
          WOMAN
        </button>
      </div>

      <div className="py-12 px-12 mx-auto text-black md:h-[600px] w-auto md:px-28">
        {activeTab === "man" && (
          <div className="md:grid grid-cols-3">
            <div className="max-w-96">
              <div className="flex justify-between border-gray-400 pb-6 mb-4 ">
                <div>
                  <h2 className="font-semibold text-lg">Growming Haircut</h2>
                </div>
                <p className="font-bold text-lg">75K</p>
              </div>
              <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                <div>
                  <h2 className="font-semibold text-lg">Growming Special</h2>
                </div>
                <p className="font-bold text-lg">100K</p>
              </div>
              <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                <div>
                  <h2 className="font-semibold text-lg">Black Haircolor</h2>
                </div>
                <p className="font-bold text-lg">100K</p>
              </div>
              <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                <div>
                  <h2 className="font-semibold text-lg">Basic Haircolor</h2>
                </div>
                <p className="font-bold text-lg">200K</p>
              </div>
              <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                <div>
                  <h2 className="font-semibold text-lg">Fashion Haircolor</h2>
                </div>
                <div className="flex">
                  {" "}
                  <p className="font-light text-sm pt-1 pr-3">Start From</p>
                  <p className="font-bold text-lg">200K</p>
                </div>
              </div>
              <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                <div>
                  <h2 className="font-semibold text-lg">Shaving</h2>
                </div>
                <p className="font-bold text-lg">45K</p>
              </div>
              <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                <div>
                  <h2 className="font-semibold text-lg">Hair Tattoo</h2>
                </div>
                <p className="font-bold text-lg">35K</p>
              </div>
            </div>

            <div className="hidden justify-center items-center md:flex">
              <Image
                src="/icon/logofont.svg"
                alt="Growming"
                width={52}
                height={42}
                className=""
              />
            </div>

            <div>
              <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                <div>
                  <h2 className="font-semibold text-lg">Beard Trimming</h2>
                </div>
                <p className="font-bold text-lg">35K</p>
              </div>
              <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                <div>
                  <h2 className="font-semibold text-lg">Cream bath</h2>
                </div>
                <p className="font-bold text-lg">100K</p>
              </div>
              <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                <div>
                  <h2 className="font-semibold text-lg">Hair Perming</h2>
                </div>
                <div className="flex">
                  <p className="font-light text-sm pt-1 pr-3">Start From</p>
                  <p className="font-bold text-lg">350K</p>
                </div>
              </div>
              <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                <div>
                  <h2 className="font-semibold text-lg">Down Perming</h2>
                </div>
                <div className="flex">
                  <p className="font-light text-sm pt-1 pr-3">Start From</p>
                  <p className="font-bold text-lg">350K</p>
                </div>
              </div>
              <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                <div>
                  <h2 className="font-semibold text-lg">Smoothing</h2>
                </div>
                <div className="flex">
                  <p className="font-light text-sm pt-1 pr-3">Start From</p>
                  <p className="font-bold text-lg">350K</p>
                </div>
              </div>
              <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                <div>
                  <h2 className="font-semibold text-lg">Conrow</h2>
                </div>
                <div className="flex">
                  <p className="font-light text-sm pt-1 pr-3">Start From</p>
                  <p className="font-bold text-lg">350K</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "woman" && (
          <div className="flex flex-col justify-center items-center h-full py-10 ">
            <p className="text-center text-xs mb-2 md:text-lg">
              Coming Soon at!
            </p>
            <Image
              src="/icon/verticallogo.png"
              alt="WhatsApp"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[200px] md:w-[522px]"
            />
          </div>
        )}
      </div>
    </div>
  );
}
