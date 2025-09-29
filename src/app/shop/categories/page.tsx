import Image from 'next/image'
import React from 'react'

import { ICategory } from '@/interfaces/category.interface';
import { Getcatogries } from '@/services/categories.services';

export default async function Categoriespage() {
    const { data: categories }: { data: ICategory[] } = await Getcatogries();
    console.log(categories);

    return (
        <section className="container mx-auto ">
            <div className="p-6 min-h-screen">
                <h1 className="text-2xl font-bold mb-6">
                    All Categories ({categories.length})
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {categories.map((cat) => (
                        <div
                            key={cat._id}
                            className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-3xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                        >
                            <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center overflow-hidden rounded-xl">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    width={192}
                                    height={192}
                                    className="object-contain w-full h-full"
                                />
                            </div>

                            <h3 className="mt-4 font-semibold text-gray-700 text-center text-lg">
                                {cat.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    )
}
