import Image from "next/image";

export default function BarberGrid() {
  const barbers = [
    {
      id: 1,
      name: "Nastel",
      image: "/image/ASEP.png",
      greeting: "Solusi pulang tampan",
      socials: {
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Kaleng Fanta",
      image: "/image/DAYAT.png",
      greeting: "Diem itu layanan kan ya?",
      socials: {
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Hendar",
      image: "/image/HENDAR.png",
      greeting: "Potong rambut itu asik",
      socials: {
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 4,
      name: "Wil",
      image: "/image/IRSYAD.png",
      greeting: "Pulang pulang ganteng",
      socials: {
        linkedin: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <div className="flex justify-center px-10 md:px-28 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {barbers.map((barber) => (
          <div
            key={barber.id}
            className="relative rounded-lg overflow-hidden group"
          >
            <div>
              <Image
                src={barber.image}
                alt={barber.name}
                width={300}
                height={150}
                className="object-cover rounded-lg"
              />
            </div>


            <div className="text-left p-4 -mt-20  text-white">
              <h3 className="font-bold text-shadow-lg">{barber.name}</h3>
              <p className="text-sm mb-2 text-shadow-lg">
                <i>
                  &quot;{barber.greeting}&quot;
                </i>
              </p>
            </div>
            <div className="text-center">
              <a href="/BookingService"
                target="_blank"
                rel="noopener noreferrer">
                <button className=" px-8 py-2 mt-8 border-2 border-black text-black font-semibold rounded-md hover:bg-black hover:text-white transition">
                  Book
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
