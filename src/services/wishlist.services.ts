import { IWishlistRoot } from "@/interfaces/wishlist.iterface";

export const getUserWishlist = async (): Promise<IWishlistRoot> => {
    const token = localStorage.getItem("token");
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch wishlist");
    }

    return response.json();
};

export const addToWishlist = async (productId: string): Promise<IWishlistRoot> => {
    const token = localStorage.getItem("token");
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
    });

    if (!response.ok) {
        throw new Error("Failed to add to wishlist");
    }

    return response.json();
};

export const removeFromWishlist = async (productId: string): Promise<IWishlistRoot> => {
    const token = localStorage.getItem("token");
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to remove from wishlist");
    }

    return response.json();
};

export const clearWishlist = async (): Promise<{ message: string }> => {
    const token = localStorage.getItem("token");
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to clear wishlist");
    }

    return response.json();
};
export const checkProductInWishlist = async (productId: string): Promise<{ inWishlist: boolean }> => {
    const token = localStorage.getItem("token");
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to check wishlist");
    }

    return response.json();
};