"use client"
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { removeFromWishlist, clearWishlist } from "@/services/wishlist.services";
import { toast } from "sonner";
import { X, ShoppingCart } from "lucide-react";
import { useWishlist } from "@/context/wishlistContext";

export default function WishlistPage() {
    const { wishlistDetails, setWishlistDetails } = useWishlist();

    async function clearWishlistItems() {
        try {
            const res = await clearWishlist();
            if (res?.message === "success") {
                toast.success("Wishlist cleared successfully");
                setWishlistDetails(null);
            } else {
                toast.error(res?.message || "Something went wrong");
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed to clear wishlist");
        }
    }

    async function removeProductFromWishlist(productId: string) {
        try {
            const res = await removeFromWishlist(productId);
            if (res.success) {
                toast.success(res.message, { position: "top-center" });
                setWishlistDetails(res.data);
            } else {
                toast.error(res.message, { position: "top-center" });
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed to remove from wishlist");
        }
    }

    return (
        <section className="py-20">
            <div className="container mx-auto">
                {wishlistDetails ? (
                    <>
                        <section className="py-10">
                            <Table className="mb-6">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Product</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>Stock Status</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {wishlistDetails.data.products.map((item) => (
                                        <TableRow key={item._id}>
                                            <TableCell className="font-medium">
                                                <div className="flex items-center gap-x-5">
                                                    <div className="relative">
                                                        <Image
                                                            src={item.product.imageCover}
                                                            alt={item.product.title}
                                                            width={80}
                                                            height={80}
                                                            className="rounded"
                                                        />
                                                        <button
                                                            onClick={() => removeProductFromWishlist(item.product._id)}
                                                            className="absolute -top-1 -left-1 min-w-5 h-5 flex items-center justify-center rounded-full bg-red-600 text-white"
                                                        >
                                                            <X size={12} />
                                                        </button>
                                                    </div>
                                                    <h2 className="text-lg font-semibold">{item.product.title}</h2>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-lg font-semibold">
                                                ${item.product.price}
                                            </TableCell>
                                            <TableCell>
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.product.quantity > 0
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-red-100 text-red-800"
                                                    }`}>
                                                    {item.product.quantity > 0 ? "In Stock" : "Out of Stock"}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        disabled={item.product.quantity === 0}
                                                    >
                                                        <ShoppingCart className="w-4 h-4 mr-2" />
                                                        Add to Cart
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <div className="flex justify-between">
                                <Button variant="outline">
                                    <Link href="/shop/products">Continue Shopping</Link>
                                </Button>
                                <Button onClick={clearWishlistItems} variant="destructive">
                                    Clear Wishlist
                                </Button>
                            </div>
                        </section>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center py-34">
                        <h2 className="text-2xl font-semibold mb-4">Your Wishlist is Empty</h2>
                        <p className="text-gray-600 mb-6">Add some products to your wishlist to see them here.</p>
                        <Button variant="outline">
                            <Link href="/shop/products">Continue Shopping</Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}