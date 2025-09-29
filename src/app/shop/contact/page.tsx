import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
    return (
        <section className="container mx-auto p-30">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Side - Contact Information */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-3xl shadow-xl space-y-8">

                        <div className="flex items-start space-x-4">
                            <PhoneIcon className="w-8 h-8 text-red-500 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Call To Us</h3>
                                <p className="text-gray-600 mb-2">We are available 24/7, 7 days a week.</p>
                                <p className="text-gray-800 font-medium">+88018112222</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 border-t pt-6">
                            <EnvelopeIcon className="w-8 h-8 text-red-500 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Write To Us</h3>
                                <p className="text-gray-600 mb-2">
                                    Fill out our form and we will contact you within 24 hours.
                                </p>
                                <p className="text-gray-800 font-medium">customer@exclusive.com</p>
                                <p className="text-gray-800 font-medium">support@exclusive.com</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-8 rounded-3xl shadow-xl">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        placeholder="Your Phone"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
