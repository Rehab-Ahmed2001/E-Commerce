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
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { removeFromCart, removeUserCart, updateQtyProductCart } from "@/services/cart.services";
import { toast } from "sonner";
import { X } from "lucide-react";

export default function CartPage() {
    const { cartDetails, setcartDetails } = useCart();

    async function removeCardItems() {
        const res = await removeUserCart();
        if (res?.message === "success") {
            toast.success("Cart removed successfully");
            setcartDetails(null);
        } else {
            toast.error(res?.message || "Something went wrong");
        }
    }

    async function removeProductFromCart(productId: string) {
        const res = await removeFromCart(productId);
        console.log(res.data);
        if (res.success) {
            toast.success(res.message, { position: "top-center" });
            setcartDetails(res.data);
        } else {
            toast.error(res.message, { position: "top-center" });
        }
    }

    async function updateQuentityProductCart(productId: string, count: number) {
        const res = await updateQtyProductCart(productId, count);
        console.log(res.data);
        if (res.success) {
            toast.success(res.message, { position: "top-center" });
            setcartDetails(res.data);
        } else {
            toast.error(res.message, { position: "top-center" });
        }
    }

    return (
        <section className="py-20">
            <div className="container mx-auto">
                {cartDetails ? (
                    <>
                        <section className="py-20">
                            <Table className="mb-6">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Product</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>Quantity</TableHead>
                                        <TableHead className="text-right">Subtotal</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {cartDetails.data.products.map((product) => (
                                        <TableRow key={product._id}>
                                            <TableCell className="font-medium">
                                                <div className="flex items-center gap-x-5">
                                                    <div className="relative">
                                                        <Image
                                                            src={product.product.imageCover}
                                                            alt={product.product.title}
                                                            width={54}
                                                            height={54}
                                                            className="rounded"
                                                        />
                                                        <button
                                                            onClick={() => removeProductFromCart(product.product._id)}
                                                            className="absolute -top-1 -left-1 min-w-5 h-5 flex items-center justify-center rounded-full bg-red-600 text-white"
                                                        >
                                                            <X size={12} />
                                                        </button>
                                                    </div>
                                                    <h2>{product.product.title}</h2>
                                                </div>
                                            </TableCell>
                                            <TableCell>{product.price}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-4">
                                                    <Button
                                                        onClick={() =>
                                                            updateQuentityProductCart(product.product._id, product.count - 1)
                                                        }
                                                        variant="outline"
                                                        size="sm"
                                                    >
                                                        -
                                                    </Button>
                                                    {product.count}
                                                    <Button
                                                        onClick={() =>
                                                            updateQuentityProductCart(product.product._id, product.count + 1)
                                                        }
                                                        variant="outline"
                                                        size="sm"
                                                    >
                                                        +
                                                    </Button>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                {product.price * product.count}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <div className="flex justify-between">
                                <Button variant="outline">
                                    <Link href="/shop/products">Return To Shop</Link>
                                </Button>
                                <Button onClick={removeCardItems} variant="destructive">
                                    Remove All
                                </Button>
                            </div>
                        </section>

                        <section className="flex justify-between">
                            <div className="flex items-center gap-4 w-5/12">
                                <Input placeholder="Coupon Code" />
                                <Button variant="destructive">Apply Coupon</Button>
                            </div>
                            <div className="w-5/12 py-8 px-6 border border-gray-950">
                                <h3 className="font-bold mb-6 text-xl">Cart Total</h3>
                                <ul>
                                    <li className="py-6 flex justify-between">
                                        <span>Subtotal:</span>
                                        <span>{cartDetails.data.totalCartPrice}</span>
                                    </li>
                                    <li className="py-6 flex justify-between">
                                        <span>Shipping:</span>
                                        <span>Free</span>
                                    </li>
                                    <li className="py-6 flex justify-between">
                                        <span>Total:</span>
                                        <span>{cartDetails.data.totalCartPrice}</span>
                                    </li>
                                </ul>
                                <div className="flex justify-center">
                                    <Button variant="destructive" asChild>
                                        <Link href={"/protected/checkout"}>Proceed To Checkout</Link></Button>
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center py-34">
                        <h2 className="text-2xl font-semibold">Your Cart is Empty</h2>
                        <Button variant="outline">
                            <Link href="/shop/products">Return To Shop</Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
