"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { z } from "zod"

// Zod schema for forget password form
const forgetPasswordSchema = z.object({
    email: z.string().email("Invalid email"),
})

type ForgetPasswordPayload = z.infer<typeof forgetPasswordSchema>

export default function ForgetPasswordPage() {
    const router = useRouter()

    const form = useForm<ForgetPasswordPayload>({
        resolver: zodResolver(forgetPasswordSchema),
        defaultValues: {
            email: "",
        },
    })

    const onSubmit = async (values: ForgetPasswordPayload) => {
        try {
            // هنا ممكن تعمل call للـAPI لإرسال رابط إعادة تعيين كلمة المرور
            console.log("Forget password email:", values.email)
            toast.success("Password reset link sent!", { position: "top-center" })
            router.push("/login")
        } catch (error) {
            console.log("Something went wrong:", error)
            toast.error("Unexpected error occurred", { position: "top-center" })
        }
    }

    return (
        <section className="min-h-screen flex">
            <div className="hidden md:flex w-1/2 bg-gray-100">
                <Image
                    src="/images/Side Image.png"
                    alt="Forget Password Illustration"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2 bg-white">
                <div className="max-w-md w-full mx-6">
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold text-gray-900 mb-3">Forget Password</h1>
                        <p className="text-gray-600">Enter your email to reset your password</p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            {/* Email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="username@domain.com"
                                                {...field}
                                                className="h-12 px-4 border-b-2 border-gray-300 rounded-none focus:border-red-600 focus:ring-0"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-sm" />
                                    </FormItem>
                                )}
                            />

                            {/* Send Reset Link Button */}
                            <Button
                                type="submit"
                                className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md"
                            >
                                Send Reset Link
                            </Button>

                            {/* Back to Login Link */}
                            <div className="text-center">
                                <Link
                                    href="/login"
                                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                                >
                                    Back to Login
                                </Link>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    )
}
