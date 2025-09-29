import { IBrand } from "./brand.iterface";
import { ICategory } from "./category.interface";
import { ISubcategory } from "./subcategory.interface";

export interface IWishlistRoot {
    data: IWishlistResponse;
    success: boolean,
    message: string | null,
}

export interface IWishlistResponse {
    status: string;
    numOfWishlistItems: number;
    wishlistId: string;
    data: IWishlist;
}

export interface IWishlist {
    _id: string;
    wishlistOwner: string;
    products: IWishlistProduct[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface IWishlistProduct {
    _id: string;
    product: IWishlistProductDetails;
    addedAt: string;
}

export interface IWishlistProductDetails {
    _id: string;
    subcategory: ISubcategory[];
    title: string;
    quantity: number;
    imageCover: string;
    category: ICategory;
    brand: IBrand;
    ratingsAverage: number;
    price: number;
    id: string;
}