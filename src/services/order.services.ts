"use server"
import { addressFormSchema, addressFormStateType } from './../schema/address.schema';
import { getUserToken } from '@/lib/server.utils';




export async function handlePayment(
    formState: addressFormStateType,
    fromData: FormData,
) {

    const shippingAdress = {
        details: fromData.get("details"),
        city: fromData.get("city"),
        phone: fromData.get("phone"),


    }
    const cartId = fromData.get("cartId");
    const paymentMethod = fromData.get("paymentMethod");

    const parsedData = addressFormSchema.safeParse({ ...shippingAdress, cartId, paymentMethod });
    if (!parsedData.success) {
        return {
            success: false,
            error: parsedData.error?.flatten().fieldErrors,
            message: null,
            callbackUrl: '/protected/cart',
        };
    }
    try {
        const token = await getUserToken()
        // https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000
        const enpoint = paymentMethod === "cash" ? `api/v1/orders/${cartId}` : `api/v1/orders/checkout-session/${cartId}?url=http://localhost:3001`
        const res = await fetch(`https://ecommerce.routemisr.com/${enpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: token as string,
            },
            body: JSON.stringify({ shippingAdress })

        });
        const data = await res.json();
        console.log(data)
        if (!res.ok) {
            return {
                success: false,
                error: {},
                message: data.message || " failed to place order",
                callbackUrl: '/protected/cart',
                paymentMethod,

            }
        }
        return {
            error: {},
            success: true,
            message: data.message || "Order placed successfully ",
            callbackUrl: paymentMethod === "cash" ? "/allorders" : data.session.url,

        }

    } catch (error) {
        return {
            success: false,
            error: {},
            message: error || " failed to place order",

        }
    }
}