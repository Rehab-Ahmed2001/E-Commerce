import { Heart } from "lucide-react";
import { addToWishlist } from "@/services/wishlist.services";
import { useWishlist } from "@/context/wishlistContext";
import { toast } from "sonner";
import { Button } from "../ui/button";


export function AddToWishlistButton({ productId }: { productId: string }) {
    const { getWishlistDetails } = useWishlist();

    const handleAddToWishlist = async () => {
        try {
            await addToWishlist(productId);
            await getWishlistDetails();
            toast.success("Product added to wishlist");
        } catch (error) {
            console.log(error)
            toast.error("Failed to add to wishlist");
        }
    };

    return (
        <Button variant="outline" onClick={handleAddToWishlist}>
            <Heart className="w-4 h-4 mr-2" />
            Add to Wishlist
        </Button>
    );
}