"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { loginFormPayload, loginFormSchema } from "@/schema/login.schema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const form = useForm<loginFormPayload>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values: loginFormPayload) => {
    try {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: "/",
      });

      console.log("signIn result:", res);

      if (res?.ok) {
        toast.success("Login success", { position: "top-center" });
        router.push(res.url ?? "/");
      } else {
        toast.error(res?.error || "Wrong credentials", { position: "top-center" });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Unexpected error occurred", { position: "top-center" });
    }
  };

  return (
    <section className="min-h-screen flex">
      <div className="hidden md:flex w-1/2 bg-gray-100">
        <Image
          src="/images/Side Image.png"
          alt="Login Illustration"
          width={800}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2 bg-white">
        <div className="max-w-md w-full mx-6">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Log in to Exclusive</h1>
            <p className="text-gray-600">Enter your details below</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="password"
                        {...field}
                        className="h-12 px-4 border-b-2 border-gray-300 rounded-none focus:border-red-600 focus:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md"
              >
                Log In
              </Button>

              <div className="text-center">
                <Link
                  href="/auth/forgot-password"
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Forget Password?
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
