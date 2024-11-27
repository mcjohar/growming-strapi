'use client';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const ImageSlider = () => {
    const images = [
        '/image/phairmud.png',
        '/image/phairtonic.png',
        '/image/ppowder.png',
        '/image/pserum.png',
    ];

    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="h-full w-full"
        >
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <Image src={src} alt={`Slide ${index + 1}`}
                        width={1000}
                        height={540}

                        className="w-full h-full object-cover" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageSlider;
