'use client'

import { useState } from "react";
import Image from "next/image";


export default function PricingTabs() {
    const [activeTab, setActiveTab] = useState("man");

    return (
        <div className="bg-[#ECF3EF]">
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

            <div className="py-12 px-12 mx-auto text-black md:h-[500px] w-auto md:px-28">
                {activeTab === "man" && (
                    <div className="md:grid grid-cols-3">

                        <div className="max-w-96">
                            <div className="flex justify-between border-b border-gray-400 pb-6 mb-4 ">
                                <div>
                                    <h2 className="font-semibold text-lg">Gentleman Haircut</h2>
                                    <p className="text-sm font-light">
                                        Haircut, konsultasi, wash, hot towel, hair serum, styling
                                        with product, foto studio, merchandise
                                    </p>
                                </div>
                                <p className="font-bold text-lg">100K</p>
                            </div>
                            <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                                <div>
                                    <h2 className="font-semibold text-lg">Basic Haircut</h2>
                                    <p className="text-sm font-light">
                                        Haircut, konsultasi, styling with product, foto studio,
                                        merchandise
                                    </p>
                                </div>
                                <p className="font-bold text-lg">75K</p>
                            </div>
                            <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                                <div>
                                    <h2 className="font-semibold text-lg">Kids Haircut</h2>
                                    <p className="text-sm font-light">Haircut, Foto Studio</p>
                                </div>
                                <p className="font-bold text-lg">100K</p>
                            </div>
                            <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                                <div>
                                    <h2 className="font-semibold text-lg">Grooming</h2>
                                    <p className="text-sm font-light">
                                        Hairwash, styling with product, foto studio
                                    </p>
                                </div>
                                <p className="font-bold text-lg">35K</p>
                            </div>
                        </div>


                        <div className="hidden justify-center items-center md:flex">
                            <Image
                                src="/icon/logofont.svg"
                                alt="WhatsApp"
                                width={52}
                                height={42}
                                className=""
                            />
                        </div>


                        <div>
                            <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                                <div>
                                    <h2 className="font-semibold text-lg">Shaving</h2>
                                </div>
                                <p className="font-bold text-lg">35K</p>
                            </div>
                            <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                                <div>
                                    <h2 className="font-semibold text-lg">Hair Tattoo</h2>
                                </div>
                                <p className="font-bold text-lg">50K</p>
                            </div>
                            <div className="flex justify-between border-b border-gray-400 pb-6 mb-4">
                                <div>
                                    <h2 className="font-semibold text-lg">Trim</h2>
                                </div>
                                <p className="font-bold text-lg">20K</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "woman" && (
                    <div className="flex flex-col justify-center items-center h-full py-10 ">
                        <p className="text-center text-xs mb-2 md:text-lg">Coming Soon at!</p>
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
