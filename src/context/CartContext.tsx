
import { ICartResponse } from "@/interfaces/cart.iterface";
import { getUserCart } from "@/services/cart.services";
import React, { createContext, useState, useContext, useEffect } from "react";


interface ICartContext {
    cartDetails: ICartResponse | null;
    setcartDetails: React.Dispatch<React.SetStateAction<ICartResponse | null>>;
    getCartDetails: () => Promise<void>;
}

const CartContext = createContext<ICartContext | null>(null)

export function CartContextProvider({ children }: { children: React.ReactNode }) {



    const [cartDetails, setcartDetails] = useState<ICartResponse | null>(null);

    async function getCartDetails() {
        const { data }: { data: ICartResponse } = await getUserCart()


        setcartDetails(data);
    }
    useEffect(() => {

        getCartDetails()
    },
        []);
    return (
        <CartContext.Provider value={{ cartDetails, setcartDetails, getCartDetails }}>{children}</CartContext.Provider>
    )
}



export function useCart() {
    const context = useContext(CartContext)


    if (!context) {
        throw new Error("useCart must be used within a CartContextProvider")
    }
    return context;
}