import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="flex justify-end items-center px-12 py-4 z-sticky bg-transparent bg">
            <div className="flex space-x-8 items-center p-2">
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
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

                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
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

                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <div className="">
                        <Image
                            src="/icon/icon-youtube.svg"
                            alt="YouTube"
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
