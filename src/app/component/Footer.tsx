import Image from "next/image";

export default function Footer() {
  return (
    <footer className="justify-between py-6 px-4 text-white bg-[#487257] md:flex md:px-24">
      <div className="mb-8 md:mb-0">
        <div className="">
          <h1 className="text-xl font-bold mb-4">Growming Studio</h1>
          <div className="mb-4">
            <h1 className="font-semibold">Alamat :</h1>
            <p>
              <a
                href="https://maps.app.goo.gl/HjMCpS4a9WWdvuLE7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Jl. Komjen.Pol.M.Jasin Jl. Klp. Dua Raya No.46, Kota Depok, 16451
              </a>
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-semibold">Operasional :</h1>
            <p>
              Senin - Minggu <br />
              10.00 - 22.00 WIB
            </p>
          </div>{" "}
          <div className="">
            <h1 className="font-semibold">Reserved :</h1>
            <p>
              <a href="http://wa.me/628118712334"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline">+62 811 8712 334
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex space-x-8 items-center p-2">
          <a
            href="https://www.tiktok.com/@growming.studio?_t=ZS-8s7id7z82J0&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="">
              <Image
                src="/icon/icon-tiktok.svg"
                alt="TikTok"
                width={20}
                height={20}
                className="transition-all duration-300 transform hover:scale-110"
              />
            </div>
          </a>

          <a
            href="https://www.instagram.com/growming.studio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="">
              <Image
                src="/icon/icon-instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
                className="transition-all duration-300 transform hover:scale-110"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
