import { IBrand } from "./brand.iterface";
import { ICategory } from "./category.interface";
import { ISubcategory } from "./subcategory.interface";



export interface ICartRoot {
    data: ICartResponse;
    success: boolean,
    message: string | null,
}
export interface ICartResponse {
    status: string;
    numOfCartItems: number;
    cardId: string;
    data: ICard;
}
export interface ICard {
    _id: string;
    cartOwner: string;
    products: ICartProduct[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    totalCartPrice: number;
}

export interface ICartProduct {
    count: number;
    _id: string;
    product: ICardProductDetails;
    price: number;
}

export interface ICardProductDetails {
    _id: string;
    subcategory: ISubcategory[];
    title: string;
    quantity: number;
    imageCover: string;
    category: ICategory;
    brand: IBrand;
    ratingsAverage: number;
    id: string;
}