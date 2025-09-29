"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import React from 'react'
import { ICategory } from "@/interfaces/category.interface";
const swiperOptions = {
    spaceBetween: 30,
    slidesPerView: 6,
    breakpoints: {
        640: {
            spaceBetween: 5,
            slidesPerView: 2,
        },
        768: {
            spaceBetween: 10,
            slidesPerView: 3,
        },
        1200: {
            spaceBetween: 15,
            slidesPerView: 4,
        },
        1400: {
            spaceBetween: 30,
            slidesPerView: 6,
        }
    },
    pagination: {
        clickable: true,
        bulletClass: "swiper-pagination-bullet border-2 !w-4 !h-4",
        bulletActiveClass:
            "swiper-pagination-bullet-active !bg-red-500 border-white",
    },
    loop: true,
    modules: [Pagination],
};

export default function CategoriesSlider({ categories }: { categories: ICategory[] }) {
    return (
        <>
            <Swiper className="categories-slider mb-20" {...swiperOptions}>
                {categories && categories.map((cat) => (
                    <SwiperSlide key={cat._id} className=" mb-8">
                        <Image
                            src={cat.image}
                            alt={cat.name}
                            width={270}
                            height={260}
                            className="w-full h-[15.625rem] object-contain bg-gray-100 mb-4 rounded-xl "
                        />
                        <h3 className="font-medium">{cat.name}</h3>
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    );
}
