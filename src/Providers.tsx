"use client";
import { SessionProvider } from "next-auth/react";
import { CartContextProvider } from "@/context/CartContext";
import { WishlistContextProvider } from "./context/wishlistContext";


export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <CartContextProvider>
                <WishlistContextProvider>
                    {children}
                </WishlistContextProvider>
            </CartContextProvider>
        </SessionProvider>
    );
}