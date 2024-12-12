import Image from "next/image";
import Link from "next/link";



export default function BookPage() {


    return (
        <div className="h-screen w-full flex flex-col items-center pt-4">
            <Link href="/">

                <Image
                    src="/icon/mainlogo.svg"
                    alt="logo"
                    width={200}
                    height={40}
                    className=""
                />
            </Link>

            <h1
                className="font-bold text-xs tracking-[0.4em]">SCHEDULE</h1>
            <iframe allow="geolocation" src="https://widget.zenwel.com/490250546/growming-studio?lang=id&lid=13300" width="100%" height="600"></iframe>
            <h1>#GrowmingEveryday</h1>
        </div >
    );
}
