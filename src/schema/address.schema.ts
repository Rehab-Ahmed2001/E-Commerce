
import * as z from "zod";


export const addressFormSchema = z.object({
    cartId: z.string().nonempty({ message: "cartId is required " }),
    details: z.string().nonempty({ message: "Adress is required " }).min(3, "Adress must be at least 3 characters"),
    city: z.string().nonempty({ message: "city is required " }).min(3, "city must be at least 3 characters"),
    phone: z.string().nonempty({ message: "Phone is required " }).regex(/^(002|\+2)01[0-25][0-9]{8}$/, { message: "Invalid Egyption phone number" }),
    paymentMethod: z.enum(["cash", "card"], {
        message: "Payment method is Required"
    }),
})



export type addressSchema = z.infer<typeof addressFormSchema>;
export const adressFormState = {
    success: false,
    error: {
        cartId: [],
        details: [],
        city: [],
        phone: [],
        paymentMethod: [],
    },
    message: null,
}
export type addressFormStateType = {
    success: boolean,
    error: {
        cartId?: string[];
        details?: string[];
        city?: string[];
        phone?: string[];
        paymentMethod?: string[],
    },
    message: string | null,
}