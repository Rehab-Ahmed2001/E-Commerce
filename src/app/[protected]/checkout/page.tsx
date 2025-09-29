"use client"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import React, { useActionState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { addressFormSchema, addressFormStateType, adressFormState } from "@/schema/address.schema";
import { Button } from "@/components/ui/button";
import { handlePayment } from "@/services/order.services";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export default function CheckoutPage() {
  const { cartDetails, setcartDetails } = useCart()
  const [action, formAction] = useActionState(handlePayment, adressFormState)
  const router = useRouter()

  const form = useForm<addressFormStateType>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      cartId: "",
      details: "",
      city: "",
      phone: "",
      paymentMethod: "cash",
    },
  });

  useEffect(() => {
    if (cartDetails) {
      form.setValue("cartId", cartDetails.cartId);
    }
  }, [cartDetails, form]);

  console.log(action)

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (action) {
      if (action.success && action.message) {
        if (action.paymentMethod === "cash") {
          toast.success(action.message, {
            position: "top-center"
          });
          setcartDetails(null)
          timeout = setTimeout(() => {
            router.push(action.callbackUrl);
          }, 2000);
        } else {
          window.location.href = action.callbackUrl;
        }
      } else if (!action.success && action.message) {
        toast.error(action.message, {
          position: "top-center"
        })
      }
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [action, router, setcartDetails]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container max-w-2xl mx-auto p-4">
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-xl font-semibold text-red-500 mb-8 text-center">
            Checkout
          </h2>
          <Form {...form}>
            <form action={formAction} className="space-y-6">

              {/* cartId hidden */}
              <FormField
                control={form.control}
                name="cartId"
                render={({ field }) => (
                  <FormItem hidden>
                    <FormControl>
                      <Input {...field} value={cartDetails?.cartId} className="hidden" />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Street Address */}
              <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Street Address"
                        {...field}
                        className="h-12 px-4 border-b-2 border-gray-300 rounded-none focus:border-red-600 focus:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm">
                      {action.error?.details?.[0]}
                    </FormMessage>
                  </FormItem>
                )}
              />

              {/* City */}
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Town / City"
                        {...field}
                        className="h-12 px-4 border-b-2 border-gray-300 rounded-none focus:border-red-600 focus:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm">
                      {action.error?.city?.[0]}
                    </FormMessage>
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Phone Number"
                        type="tel"
                        {...field}
                        className="h-12 px-4 border-b-2 border-gray-300 rounded-none focus:border-red-600 focus:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm">
                      {action.error?.phone?.[0]}
                    </FormMessage>
                  </FormItem>
                )}
              />

              {/* payment method */}
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Payment Method</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue="cash"
                        name={field.name}
                        className="flex flex-col"
                      >
                        <FormItem className="flex items-center gap-3">
                          <FormControl>
                            <RadioGroupItem value="cash" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Cash
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center gap-3">
                          <FormControl>
                            <RadioGroupItem value="card" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Card
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
