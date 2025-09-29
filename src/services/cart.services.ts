"use server"

import { getUserToken } from "@/lib/server.utils";



export async function getUserCart() {


    try {
        const token = await getUserToken()
        console.log(token);
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
            headers: {
                token: token as string,
            },
        });
        const data = await res.json();
        if (!res.ok) {
            return {
                data: data,
                success: false,
                message: data.message || "Error in  fetching cart ",

            }
        }
        return {
            data: data,
            success: true,
            message: data.message || "Fetched cart ",

        }
        
    } catch (error) {
        console.log(error)
        return {
            data: null,
            success: false,
            message: error as string || "something went wrong",

        }
    }

}

export async function removeUserCart() {


    try {
        const token = await getUserToken()
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
            method: "DELETE",
            headers: {
                token: token as string,
            }
        });
        const data = await res.json();
        console.log(data)
        if (!res.ok) {
            return {
                data: null,
                success: false,
                message: data.message || "Error is removing cart",

            }
        }
        return {
            data: data,
            success: true,
            message: data.message || "Removed cart ",

        }


    } catch (error) {
        console.log(error)
        return {
            data: null,
            success: false,
            message: error as string || "something went wrong",

        }
    }

}
export async function addToCart(productId: string) {


    try {
        const token = await getUserToken()
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: token as string,
            },
            body: JSON.stringify({ productId })
        });
        const data = await res.json();
        console.log(data)
        if (!res.ok) {
            return {
                data: null,
                success: false,
                message: data.message || "Adding To card failed",

            }
        }
        return {
            data: data,
            success: true,
            message: data.message || "Added to cart successfully ",

        }


    } catch (error) {
        console.log(error)
        return {
            data: null,
            success: false,
            message: error as string || "something went wrong",

        }
    }

}
export async function removeFromCart(productId: string) {


    try {
        const token = await getUserToken()
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                token: token as string,
            },

        });
        const data = await res.json();
        console.log(data)
        if (!res.ok) {
            return {
                data: null,
                success: false,
                message: data.message || "Removing fromcard failed",

            }
        }
        return {
            data: data,
            success: true,
            message: data.message || "Removed from cart successfully ",

        }


    } catch (error) {
        console.log(error)
        return {
            data: null,
            success: false,
            message: error as string || "something went wrong",

        }
    }

}
export async function updateQtyProductCart(productId: string, count: number) {


    try {
        const token = await getUserToken()
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                token: token as string,
            },
            body: JSON.stringify({ count })

        });
        const data = await res.json();
        console.log(data)
        if (!res.ok) {
            return {
                data: null,
                success: false,
                message: data.message || "Updated quantity in card failed",

            }
        }
        return {
            data: data,
            success: true,
            message: data.message || "Updating quantity from cart successfully ",

        }


    } catch (error) {
        console.log(error)
        return {
            data: null,
            success: false,
            message: error as string || "something went wrong",

        }
    }

}
