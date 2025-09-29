"use server"

import { formStateType, registerFormSchema } from "@/schema/register.schema";


export async function handleRegister(formState: formStateType, formData: FormData) {

    console.log(formData);
    const formValues = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        rePassword: formData.get("rePassword"),
        phone: formData.get("phone"),
    };
    const parseData = registerFormSchema.safeParse(formValues);
    console.log("handleRegister", parseData);
    if (!parseData.success) {
        return {
            success: false,
            error: parseData.error?.flatten().fieldErrors,
            message: null,
        };
    }
    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
        });

        const data = await res.json();
        console.log(data);

        if (!res.ok) {
            return {
                success: false,
                error: {},
                message: data.message,
            };
        }

        return {
            success: true,
            error: {},
            message: data.message,
        };
    } catch (error) {
        console.error("Register error:", error);
    }
}
