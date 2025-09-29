"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "@/assets/images/slider-image-1.jpeg";
import slide2 from "@/assets/images/slider-image-2.jpeg";
import slide3 from "@/assets/images/slider-image-3.jpeg";

const swiperOptions = {
    pagination: {
        clickable: true,
        bulletClass: "swiper-pagination-bullet border-2 !w-4 !h-4",
        bulletActiveClass:
            "swiper-pagination-bullet-active !bg-red-500 border-white",
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    modules: [Pagination, Autoplay],
};

const images = [
    { path: slide1.src, label: "slide 1 " },
    { path: slide2.src, label: "slide 2" },
    { path: slide3.src, label: "slide 3" },
];

export default function MainSlider() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <div className="h-[21.5rem] w-full bg-gray-100 animate-pulse" />;
    }

    return (
        <section>
                <div className="container mx-auto mt-6" >
                    <Swiper className="main-slider rounded-md overflow-hidden" {...swiperOptions}>
                        {images.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <Image
                                    src={img.path}
                                    alt={img.label}
                                    width={1000}
                                    height={400}
                                    className="w-full h-[21.5rem] object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
        </section>
    );
}
