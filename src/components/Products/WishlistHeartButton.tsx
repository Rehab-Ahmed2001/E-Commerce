"use client";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { addToWishlist, removeFromWishlist } from "@/services/wishlist.services";

import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useWishlist } from "@/context/wishlistContext";

interface WishlistHeartButtonProps {
    productId: string;
    className?: string;
    size?: number;
}

export default function WishlistHeartButton({ productId, className = "", size = 20 }: WishlistHeartButtonProps) {
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { wishlistDetails, getWishlistDetails } = useWishlist();
    const { status } = useSession();
    const router = useRouter();


    useEffect(() => {
        if (wishlistDetails && wishlistDetails.data && wishlistDetails.data.products) {
            const productInWishlist = wishlistDetails.data.products.some(
                (item) => item.product._id === productId
            );
            setIsInWishlist(productInWishlist);
        }
    }, [wishlistDetails, productId]);

    const handleWishlistToggle = async () => {

        if (status !== "authenticated") {
            toast.error("Please login to add to wishlist");
            router.push("/auth/login");
            return;
        }

        setIsLoading(true);
        try {
            if (isInWishlist) {
                await removeFromWishlist(productId);
                toast.success("Product removed from wishlist", {
                    position: "top-center"
                });
                setIsInWishlist(false);
            } else {
                await addToWishlist(productId);
                toast.success("Product added to wishlist", {
                    position: "top-center"
                });
                setIsInWishlist(true);
            }

            await getWishlistDetails();
        } catch (error) {
            toast.error("Failed to update wishlist", {
                position: "top-center"
            });
            console.error("Wishlist error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handleWishlistToggle}
            disabled={isLoading}
            className={`p-2 rounded-full transition-all duration-200 ${isInWishlist
                ? "bg-red-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                } ${className}`}
            title={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
            <Heart
                size={size}
                className={isInWishlist ? "fill-current" : ""}
            />
        </button>
    );
}