import { IBrand } from '@/interfaces/brand.iterface';
import { Getbrands } from '@/services/brands.services';
import Image from 'next/image'
import React from 'react'

export default async function Brandspage() {
  const { data: brands }: { data: IBrand[] } = await Getbrands();
  console.log(brands);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        All Brands
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {brands.map((brand) => (
          <div
            key={brand._id}
            className="relative flex flex-col items-center justify-center p-2 bg-white shadow-lg rounded-2xl overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-1 hover:shadow-xl"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center overflow-hidden">
              <Image
                src={brand.image}
                alt={brand.name}
                width={112}
                height={112}
                className="object-contain rounded-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <span className="text-white font-semibold text-center text-sm md:text-base px-2">
                {brand.name}
              </span>
            </div>

            <h3 className="mt-4 font-semibold text-gray-700 text-center text-sm md:text-base group-hover:hidden">
              {brand.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}
