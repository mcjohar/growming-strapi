"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Layanan {
  id: number;
  nalay: string;
  deskripsi: string | null;
  catatan: string | null;
  kethar: string | null;
  harga: string;
}

export default function HomePage() {
  const [layanans, setLayanans] = useState<Layanan[]>([]);

  useEffect(() => {
    const fetchLayanan = async () => {
      try {
        const res = await fetch(
          "https://growming-backend-production.up.railway.app/api/layanans",
          { cache: "no-store" }
        );
        const json = await res.json();
        const layananData = json.data?.map((item: any) => item) || [];
        setLayanans(layananData);
      } catch (error) {
        console.error("Error fetching layanan:", error);
      }
    };

    fetchLayanan();
  }, []);

  const renderLayananItem = (item: Layanan) => (
    <div
      key={item.id}
      className="flex justify-between items-start border-b border-gray-300 pb-6 mb-6"
    >
      <div>
        <h2 className="font-semibold text-xl">{item.nalay}</h2>
        {item.deskripsi && (
          <p className="text-sm text-gray-700 mt-1 max-w-64">{item.deskripsi}</p>
        )}
        {item.catatan && (
          <p className="text-xs italic text-gray-500 mt-1">{item.catatan}</p>
        )}
      </div>
      <div className="flex items-start">
        {item.kethar && (
          <p className="font-light text-sm pr-2 md:pr-6">{item.kethar}</p>
        )}
        <p className="font-bold text-lg">{item.harga}K</p>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <div className="bg-[#487257] w-full py-8">
        <h1 className="text-2xl font-bold text-white text-center tracking-wide md:tracking-[10px]">
          OUR SERVICES
        </h1>
      </div>

      <div className=" mx-auto px-6 mt-12 pb-12 md:px-28">
        {layanans.length === 0 ? (
          <p className="text-center text-gray-500">Loading layanan...</p>
        ) : layanans.length <= 5 ? (
          // Jika 5 layanan atau kurang, tampilkan satu kolom
          layanans.map(renderLayananItem)
        ) : (
          // Jika lebih dari 5, tampilkan 3 kolom (kiri, gambar, kanan)
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kolom kiri: 5 layanan pertama */}
            <div className="flex flex-col">
              {layanans.slice(0, 5).map(renderLayananItem)}
            </div>

            {/* Kolom tengah: Gambar */}
            <div className="hidden md:flex justify-center items-center">
              <Image
                src="/icon/logofont.svg" // ganti sesuai kebutuhan
                alt="Layanan Image"
                width={250}
                height={250}
                className="h-[400px] object-contain"
              />
            </div>

            {/* Kolom kanan: sisa layanan */}
            <div className="flex flex-col">
              {layanans.slice(5).map(renderLayananItem)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
