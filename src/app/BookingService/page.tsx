"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/id";
dayjs.locale("id");

type Kapster = {
    id: number;
    name: string;
    phone?: string | null;
};

type Layanan = {
    id: number;
    nalay: string;
    harga: number;
};

export default function BookingForm() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const [namaCustomer, setNamaCustomer] = useState("");
    const [hpCustomer, setHpCustomer] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [jam, setJam] = useState("");
    const [kapster, setKapster] = useState("");
    const [layanan, setLayanan] = useState("");
    const [kapsterList, setKapsterList] = useState<Kapster[]>([]);
    const [layananList, setLayananList] = useState<Layanan[]>([]);
    const [bookedJamList, setBookedJamList] = useState<string[]>([]);

    const jamOptions = [
        "jam_10_00",
        "jam_11_00",
        "jam_12_00",
        "jam_13_00",
        "jam_14_00",
        "jam_15_00",
        "jam_16_00",
        "jam_17_00",
        "jam_18_00",
        "jam_19_00",
        "jam_20_00",
        "jam_21_00",
        "jam_22_00",
    ];

    const getNext30Days = () => {
        const dates = [];
        for (let i = 0; i < 30; i++) {
            const d = dayjs().add(i, "day");
            dates.push({
                dateStr: d.format("YYYY-MM-DD"),
                dayShort: d.format("ddd").toUpperCase(),
                dateNum: d.format("DD"),
            });
        }
        return dates;
    };

    const dateOptions = getNext30Days();

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!scrollContainerRef.current) return;
        isDragging.current = true;
        scrollContainerRef.current.classList.add("scrolling");
        startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
        scrollLeft.current = scrollContainerRef.current.scrollLeft;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        scrollContainerRef.current?.classList.remove("scrolling");
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
        scrollContainerRef.current?.classList.remove("scrolling");
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging.current || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const fetchKapsters = useCallback(async () => {
        try {
            const res = await axios.get<{ data: Kapster[] }>(
                "https://growming-backend-production.up.railway.app/api/kapsters"
            );
            setKapsterList(res.data.data);
        } catch (err) {
            console.error("Gagal fetch kapsters:", err);
        }
    }, []);

    const fetchLayanan = useCallback(async () => {
        try {
            const res = await axios.get<{ data: Layanan[] }>(
                "https://growming-backend-production.up.railway.app/api/layanans"
            );
            setLayananList(res.data.data);
        } catch (err) {
            console.error("Gagal fetch layanan:", err);
        }
    }, []);

    const fetchBookedJam = useCallback(async () => {
        if (kapster && tanggal) {
            try {
                const res = await axios.get<{ data: { jam: string }[] }>(
                    `https://growming-backend-production.up.railway.app/api/bookings?filters[kapster][id][$eq]=${kapster}&filters[tanggal][$eq]=${tanggal}`
                );
                const bookedJams = res.data.data.map((b) => b.jam);
                setBookedJamList(bookedJams);
                console.log("Jam yang sudah dibooking:", bookedJams);
            } catch (err) {
                console.error("Gagal fetch booked jam:", err);
            }
        } else {
            // Bersihkan bookedJamList jika kapster atau tanggal belum diisi
            setBookedJamList([]);
        }
    }, [kapster, tanggal]);

    useEffect(() => {
        fetchKapsters();
        fetchLayanan();
    }, [fetchKapsters, fetchLayanan]);

    useEffect(() => {
        fetchBookedJam();
    }, [fetchBookedJam]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const selectedKapster = kapsterList.find((k) => k.id === parseInt(kapster));
        const namaKapster = selectedKapster?.name || "Kapster";
        const jamFormatted = jam.replace("jam_", "").replace("_", ":");
        const nomorAdmin = "628118712334";

        const pesan = `Hello Growming, saya ${namaCustomer} sudah booking dengan ${namaKapster} di ${jamFormatted}, mohon di proses ya`;
        const url = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`;

        // Buka WhatsApp terlebih dahulu agar tidak diblokir browser
        window.open(url, "_blank");

        try {
            await axios.post("https://growming-backend-production.up.railway.app/api/bookings", {
                data: {
                    nama_customer: namaCustomer,
                    hp_customer: hpCustomer,
                    tanggal,
                    jam,
                    kapster,
                    layanan,
                },
            });

            alert("Booking berhasil! WhatsApp sudah terbuka.");

            // Reset form
            setNamaCustomer("");
            setHpCustomer("");
            setTanggal("");
            setJam("");
            setKapster("");
            setLayanan("");
        } catch (err) {
            console.error(err);
            alert("Booking gagal");
        }
    };

    return (
        <div className="bg-[#487257]">
            <div className="pt-4 pb-2">
                <div className="flex justify-center">
                    <Image
                        src="/icon/mainlogo-white.png"
                        alt="Growming"
                        width={522}
                        height={72}
                        className="max-w-60 h-auto md:max-w-[350px] flex justify-center"
                    />
                </div>
            </div>

            <div className="max-w-md mx-auto p-6 bg-white md:max-w-full md:px-24 md:py-12">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Masukan Nama Anda"
                        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        value={namaCustomer}
                        onChange={(e) => setNamaCustomer(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Masukan Nomor Handphone Anda"
                        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        value={hpCustomer}
                        onChange={(e) => setHpCustomer(e.target.value)}
                        required
                    />

                    <select
                        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        value={layanan}
                        onChange={(e) => setLayanan(e.target.value)}
                        required
                    >
                        <option value="">Pilih Layanan</option>
                        {layananList.map((l) => (
                            <option key={l.id} value={l.id}>
                                {l.nalay}
                            </option>
                        ))}
                    </select>

                    <select
                        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        value={kapster}
                        onChange={(e) => setKapster(e.target.value)}
                        required
                    >
                        <option value="">Pilih Kapster</option>
                        {kapsterList.map((k) => (
                            <option key={k.id} value={k.id}>
                                {k.name}
                            </option>
                        ))}
                    </select>

                    <div>
                        <label className="block mb-2 font-semibold text-sm">Pilih Tanggal</label>

                        <div
                            ref={scrollContainerRef}
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            className="flex md:hidden overflow-x-auto space-x-2 pb-2 scrollbar-hide cursor-grab active:cursor-grabbing select-none"
                        >
                            {dateOptions.map((d) => (
                                <button
                                    key={d.dateStr}
                                    type="button"
                                    onClick={() => setTanggal(d.dateStr)}
                                    className={`flex flex-col items-center justify-center px-6 py-2 rounded-xl min-w-[60px] border ${tanggal === d.dateStr ? "bg-[#487257] text-white" : "bg-white text-gray-800"
                                        }`}
                                >
                                    <span className="text-xs font-medium uppercase tracking-widest">
                                        {d.dayShort}
                                    </span>
                                    <span className="text-xl font-semibold">{d.dateNum}</span>
                                </button>
                            ))}
                        </div>

                        <div className="hidden md:grid grid-cols-8 gap-2">
                            {dateOptions.map((d) => (
                                <button
                                    key={d.dateStr}
                                    type="button"
                                    onClick={() => setTanggal(d.dateStr)}
                                    className={`flex flex-col items-center justify-center py-3 rounded-xl border w-full ${tanggal === d.dateStr ? "bg-[#487257] text-white" : "bg-white text-gray-800"
                                        }`}
                                >
                                    <span className="text-xs font-medium uppercase tracking-widest">
                                        {d.dayShort}
                                    </span>
                                    <span className="text-xl font-semibold">{d.dateNum}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {jamOptions.map((j) => {
                            const jamFormatted = j.replace("jam_", "").replace("_", ":");
                            const isBooked = bookedJamList.includes(j);
                            const isSelected = jam === j;
                            return (
                                <button
                                    key={j}
                                    type="button"
                                    onClick={() => !isBooked && setJam(j)}
                                    disabled={isBooked}
                                    className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-colors min-w-[80px] ${isBooked
                                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                            : isSelected
                                                ? "bg-[#487257] text-white"
                                                : "bg-white text-gray-800 hover:bg-gray-100"
                                        }`}
                                >
                                    {jamFormatted}
                                </button>
                            );
                        })}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#487257] text-white py-3 rounded-lg font-semibold text-lg"
                    >
                        Booking
                    </button>
                </form>
            </div>
        </div>
    );
}
