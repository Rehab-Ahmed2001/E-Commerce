import React from 'react';
import { Truck, HeadphonesIcon, ShieldCheck } from 'lucide-react';

const CustomerServicesWithIcons = () => {
    const services = [
        {
            title: "FREE AND FAST DELIVERY",
            description: "Free delivery for all orders over $140",
            icon: <Truck className="w-8 h-8 text-white" />
        },
        {
            title: "24/7 CUSTOMER SERVICE",
            description: "Friendly 24/7 customer support",
            icon: <HeadphonesIcon className="w-8 h-8 text-white" />
        },
        {
            title: "MONEY BACK GUARANTEE",
            description: "We return money within 30 days",
            icon: <ShieldCheck className="w-8 h-8 text-white" />
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className=" rounded-2xl  p-8 flex flex-col items-center text-center 
                         hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
                        >
                            <div className="bg-gradient-to-r from-black to-gray-700 rounded-full p-5 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-12">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-extrabold text-gray-900 mb-2 uppercase tracking-wide transition-colors duration-300 hover:text-gray-700">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 hover:text-gray-800">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerServicesWithIcons;

