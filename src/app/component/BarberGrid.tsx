"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Kapster {
  id: number;
  name: string;
  bio: string;
  photoUrl: string;
}

export default function KapsterGrid() {
  const extractTextFromRichText = (richText: any[]) => {
    return richText
      ?.map((block) =>
        block.children?.map((child: any) => child.text).join(" ")
      )
      .join(" ") || "Bio belum diisi";
  };

  const [kapsters, setKapsters] = useState<Kapster[]>([]);

  useEffect(() => {
    const fetchKapsters = async () => {
      try {
        const res = await fetch(
          "https://growming-backend-production.up.railway.app/api/kapsters?populate=*"
        );
        const json = await res.json();

        const mapped = json.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          bio: extractTextFromRichText(item.bio),
          photoUrl:
            item.photo?.[0]?.formats?.medium?.url ||
            item.photo?.[0]?.url ||
            "",
        }));

        setKapsters(mapped);
      } catch (err) {
        console.error("Gagal fetch kapster:", err);
      }
    };

    fetchKapsters();
  }, []);

  return (
    <div className="flex justify-center px-6 md:px-20 bg-white py-10">
      <div
        className={`grid gap-10 ${kapsters.length === 1
          ? "grid-cols-1"
          : kapsters.length === 2
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
      >
        {kapsters.map((kapster) => (
          <div
            key={kapster.id}
            className="relative overflow-hidden group w-full max-w-md mx-auto"
          >
            {kapster.photoUrl && (
              <div className="relative">
                <Image
                  src={`https://growming-backend-production.up.railway.app${kapster.photoUrl}`}
                  alt={kapster.name}
                  width={800}
                  height={800}
                  className="object-cover w-full h-[500px] rounded-lg"
                />

                {/* Overlay Nama dan Bio */}
                <div className="absolute bottom-0 left-0 w-full text-white px-4 py-3">
                  <h3 className="font-bold text-lg">{kapster.name}</h3>
                  <p className="text-sm italic truncate">"{kapster.bio}"</p>
                </div>
              </div>
            )}

            {/* Tombol Book */}
            <div className="text-center p-4">
              <a href="/BookingService">
                <button className="px-6 py-2 border-2 border-black text-black font-semibold rounded-md hover:bg-black hover:text-white transition">
                  Book Now
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
