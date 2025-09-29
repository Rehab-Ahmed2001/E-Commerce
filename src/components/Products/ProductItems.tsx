import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";
import { IProduct } from "@/interfaces/products.interface";
import Link from "next/link";
import AddTocardBtn from "./addTocartBtn";
import WishlistHeartButton from "./WishlistHeartButton";

export default function ProductItems({ product }: { product: IProduct }) {
    return (
        <div className="border rounded-xl overflow-hidden shadow-sm relative group p-3 hover:shadow-lg transition-all duration-300">
            {product.priceAfterDiscount && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                    {Math.round(
                        ((product.price - product.priceAfterDiscount) / product.price) * 100
                    )}
                    %
                </span>
            )}

            <div className="relative w-full h-[15.625rem] flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                <Link href={`/shop/products/${product._id}`}>
                    <Image
                        src={product.imageCover}
                        alt={product.title}
                        width={270}
                        height={260}
                        className="object-contain max-h-[15rem] mx-auto transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <WishlistHeartButton
                        productId={product._id}
                        size={20}
                        className="bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white"
                    />
                </div>
            </div>

            <div className="mt-4 space-y-2">
                <Link href={`/shop/products/${product._id}`}>
                    <h3 className="font-medium text-sm line-clamp-1 hover:text-indigo-600 transition">
                        {product.title}
                    </h3>
                </Link>

                <div className="flex items-center gap-2">
                    <span className="font-semibold text-red-500">
                        {product.priceAfterDiscount ?? product.price} EGP
                    </span>
                    {product.priceAfterDiscount && (
                        <span className="line-through text-gray-400 text-sm">
                            {product.price} EGP
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={16}
                            className={
                                i < Math.floor(product.ratingsAverage)
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                            }
                        />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">
                        ({product.ratingsAverage})
                    </span>
                </div>
            </div>

            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <AddTocardBtn
                    productId={product._id}
                    className="w-full h-12 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md font-medium text-base transition-all duration-300"
                    size="sm"
                />
            </div>
        </div>
    );
}
