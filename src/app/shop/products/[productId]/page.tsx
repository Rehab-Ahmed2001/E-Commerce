"use client";

import AddTocardBtn from '@/components/Products/addTocartBtn';
import { IProduct } from '@/interfaces/products.interface';
import { GetProductsDetails } from '@/services/ProductDetails.services';
import { Heart, Star } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function ProductDetails({ params }: { params: { productId: string } }) {
    const [product, setProduct] = useState<IProduct | null>(null);
    const [mainImage, setMainImage] = useState<string>("");

    useEffect(() => {
        async function fetchProduct() {
            const { data } = await GetProductsDetails(params.productId);
            setProduct(data);
            setMainImage(data.imageCover);
        }
        fetchProduct();
    }, [params.productId]);

    if (!product) return <p>Loading...</p>;



    return (
        <section className="py-12">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex gap-4">
                    <div className="flex flex-col gap-4">
                        {product.images?.map((img, i) => (
                            <Image
                                key={i}
                                src={img}
                                alt={product.title}
                                width={80}
                                height={80}
                                onClick={() => setMainImage(img)}
                                className={`border rounded-md cursor-pointer hover:border-indigo-500 ${mainImage === img ? "border-indigo-500" : ""
                                    }`}
                            />
                        ))}
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image
                            src={mainImage}
                            alt={product.title}
                            width={500}
                            height={500}
                            className="rounded-xl shadow-lg object-cover"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <h1 className="text-3xl font-bold">{product.title}</h1>

                    <div className="flex items-center gap-2">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={22}
                                className={
                                    i < Math.floor(product.ratingsAverage)
                                        ? 'text-yellow-400 fill-yellow-400'
                                        : 'text-gray-300'
                                }
                            />
                        ))}
                        <span className="text-sm text-gray-500">
                            ({product.ratingsAverage} Reviews)
                        </span>
                        <span className="text-green-600 font-semibold">In Stock</span>
                    </div>

                    <p className="text-2xl font-semibold text-red-500">
                        {product.price} EGP
                    </p>

                    <p className="text-gray-600 leading-relaxed border-b border-b-gray-400 pb-6">
                        {product.description}
                    </p>

                    <div className="flex items-center gap-3">
                        <span className="font-semibold">Colours:</span>
                        <button className="w-6 h-6 rounded-full bg-red-600 border"></button>
                        <button className="w-6 h-6 rounded-full bg-black border"></button>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="font-semibold">Size:</span>
                        {['XS', 'S', 'M', 'L', 'XL'].map((s) => (
                            <button
                                key={s}
                                className="px-3 py-1 border rounded hover:bg-gray-100"
                            >
                                {s}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center border rounded">
                            <button className="px-3 py-2">-</button>
                            <span className="px-4">1</span>
                            <button className="px-3 py-2">+</button>
                        </div>
                        <AddTocardBtn productId={product._id} className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition" variant={"destructive"} />
                        <button className="p-3 border rounded-lg"><Heart /></button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="border rounded-lg p-4">
                            <p className="font-semibold">Free Delivery</p>
                            <p className="text-sm text-gray-500">
                                Enter your postal code for Delivery Availability
                            </p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <p className="font-semibold">Return Delivery</p>
                            <p className="text-sm text-gray-500">
                                Free 30 Days Delivery Returns.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    );
}
