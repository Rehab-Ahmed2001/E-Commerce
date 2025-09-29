"use client";
import { useCart } from '@/context/CartContext';
import { addToCart } from '@/services/cart.services';
import React from 'react';
import { toast } from 'sonner';

export default function AddTocardBtn({
    productId,
    ...props
}: {
    productId: string;
    [key: string]: string;
}) {
    const { getCartDetails } = useCart();

    async function addProductToCart(productId: string) {
        const res = await addToCart(productId);
        console.log(res);

        if (res.success) {
            toast.success(res.message, { position: "top-center" });
            getCartDetails();
        } else {
            toast.error(res.message, { position: "top-center" });
        }
    }

    return (
        <button onClick={() => addProductToCart(productId)} {...props}>
            Add to cart
        </button>
    );
}
