"use client";

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
import { useRouter } from "next/navigation"
import { registerFormSchema, RegisterSchema } from "@/schema/register.schema"
import { useActionState, useEffect } from "react"
import { handleRegister } from "@/services/register.services"
import { toast } from "sonner"
import { formState } from "@/schema/register.schema";

export default function RegisterPage() {
  const [action, formAction] = useActionState(handleRegister, { formState })
  const router = useRouter()

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
  })

  useEffect(() => {
    if (action) {
      if (!action.success && action.message) {
        toast.error(action.message, { position: "top-center" })
      }
      if (action.success && action.message) {
        toast.message(action.message, { position: "top-center" });
        router.push("/auth/login")
      }
    }
  }, [action, router])

  return (
    <section className="min-h-screen flex">
      <div className="hidden md:flex w-1/2 bg-gray-100">
        <Image
          src="/images/Side Image.png"
          alt="Register Illustration"
          width={800}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2 bg-white">
        <div className="max-w-md w-full mx-6">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Create an Account</h1>
            <p className="text-gray-600">Fill in your details to register</p>
          </div>

          <Form {...form}>
            <form action={formAction} className="space-y-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        {...field}
                        className="h-12 px-4 border-b-2 border-gray-300 rounded-none focus:border-red-600 focus:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm">
                      {
                        action.error?.name?.[0]
                      }
                    </FormMessage>
                  </FormItem>
                )}
              />

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
                    <FormMessage className="text-red-500 text-sm">
                      {
                        action.error?.email?.[0]
                      }
                    </FormMessage>
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        type="password"
                        {...field}
                        className="h-12 px-4 border-b-2 border-gray-300 rounded-none focus:border-red-600 focus:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm">
                      {
                        action.error?.password?.[0]
                      }
                    </FormMessage>
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="rePassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="re Password"
                        type="password"
                        {...field}
                        className="h-12 px-4 border-b-2 border-gray-300 rounded-none focus:border-red-600 focus:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm">
                      {
                        action.error?.repassword?.[0]
                      }
                    </FormMessage>
                  </FormItem>
                )}
              />

              {/* phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="phone"
                        type="tel"
                        {...field}
                        className="h-12 px-4 border-b-2 border-gray-300 rounded-none focus:border-red-600 focus:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm">
                      {
                        action.error?.phone?.[0]
                      }
                    </FormMessage>
                  </FormItem>
                )}
              />

              {/* Register Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md"
              >
                Submit
              </Button>

              {/* Login Link */}
              <div className="text-center">
                <Link
                  href="/auth/login"
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Already have an account? Log in
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
