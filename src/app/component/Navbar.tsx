import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 z-sticky bg-transparent md:px-14">
      <div className="flex items-center">
        <Image
          src="/icon/icon-logo.svg"
          alt="Logo"
          width={40}
          height={40}
          className="transition-all duration-300 transform hover:scale-110"
        />
      </div>

      <div className="flex space-x-4 items-center p-2 md:space-x-6">
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
    </nav>
  );
}
