import Image from 'next/image';

export default function Information() {
    return (
        <div className="flex flex-col items-center sm:flex-row justify-center gap-10 py-6 bg-[#ECF3EF] text-[#487257]">
            <div className="flex flex-col sm:flex-row items-center gap-4 max-w-72">
                <Image
                    src="/icon/icon-wa.svg"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                    className=""
                />
                <div className='text-center md:text-left'>
                    <h1 className="font-semibold mb-1">+62 851 742 742 44</h1>
                    <p className="font-light text-sm">( Layanan Pelanggan )</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 max-w-72">
                <Image
                    src="/icon/icon-time.svg"
                    alt="openhours"
                    width={32}
                    height={32}
                    className=""
                />
                <div className='text-center md:text-left'>
                    <h1 className="font-semibold mb-1">
                        Buka Senin - Minggu 10.00 - 22.00
                    </h1>
                    <p className="font-light text-sm">( Last Order 21.30 )</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 max-w-72">
                <Image
                    src="/icon/icon-location.svg"
                    alt="Location"
                    width={32}
                    height={32}
                    className=""
                />
                <div className='text-center md:text-left'>
                    <h1 className="font-semibold mb-1">
                        Jl. Komjen.Pol.M.Jasin Jl. Klp. Dua Raya No.46, Kota Depok, 16451
                    </h1>
                    <p className="font-light text-sm">( Kopdar - Kopi Darsini )</p>
                </div>
            </div>
        </div>
    );
}
