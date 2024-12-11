import Image from "next/image";

export default function BarberGrid() {
  const barbers = [
    {
      id: 1,
      name: "Nastel",
      image: "/image/barberman1.jpg",
      rating: 4.5,
      socials: {
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Kaleng Fanta",
      image: "/image/barberman4.jpg",
      rating: 5.0,
      socials: {
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Zawil Irsyad",
      image: "/image/barberman3.jpg",
      rating: 4.8,
      socials: {
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 4,
      name: "Diaz Faiz",
      image: "/image/barberman2.jpg",
      rating: 4.8,
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

            {/* Informasi nama dan rating berada di atas tombol, tidak di atas gambar */}
            <div className="text-left p-4 -mt-20  text-white">
              <h3 className="font-bold text-shadow-lg">{barber.name}</h3>
              <p className="text-sm mb-2 text-shadow-lg">
                Rating: {barber.rating}
              </p>
            </div>
            <div className="text-center">
              <a href="https://widget.zenwel.com/490250546/growming-studio?lang=id&lid=13300"
                target="_blank">
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
