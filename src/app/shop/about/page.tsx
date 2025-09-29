import Image from 'next/image'
import React from 'react'
import { ChartBarIcon, UsersIcon, ShoppingCartIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const icons = [ChartBarIcon, UsersIcon, ShoppingCartIcon, GlobeAltIcon];
const teamMembers = [
    {
        name: "Tom Cruise",
        position: "Incentive & Continent",
        image: "/images/Frame 874.png"
    },
    {
        name: "Emma Watson",
        position: "Managing Director",
        image: "/images/Frame 875.png"
    },
    {
        name: "Will Smith",
        position: "Finished Dialogues",
        image: "/images/Frame 876.png"
    }
];

const stats = [
    {
        value: "10.5k",
        label: "Sodium cuisine our bike"
    },
    {
        value: "3.3k",
        label: "Hopefully I shouldn't bite"
    },
    {
        value: "45.5k",
        label: "Customer action in our bike"
    },
    {
        value: "25k",
        label: "Armed gross table in our bike"
    }
];

export default function AboutPage() {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <section className="mb-16 bg-gray-50">
                <div className="p-6">
                    <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-10">

                        <div className="md:w-1/2 w-full text-center md:text-left">
                            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                                Our Story
                            </h1>
                            <p className="text-lg md:text-base text-gray-600 leading-relaxed">
                                Launched in 2015, Evaluator is South Asias premier online shopping marketplace with a strong online presence in Bangladesh. Supported by a wide range of service monitoring, data and service solutions, Evaluator has 18.6% online onsite locations and serves millions of customers across the region.
                            </p>
                            <p className="text-lg md:text-base text-gray-600 leading-relaxed mt-4">
                                Evaluator has more than 1 Million products to offer, providing a diverse assortment to customers across the region.
                            </p>
                        </div>

                        <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-6 md:mt-0">
                            <Image
                                src="/images/Side Image (1).png"
                                alt="Our Story"
                                width={500}
                                height={400}
                                className="rounded-xl shadow-xl object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="mb-12 p-6 bg-gray-50">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
                    Our Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-4 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 overflow-hidden mb-4 border-4 border-indigo-100 rounded-full">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={200}
                                    height={200}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mt-2">{member.name}</h3>
                            <p className="text-gray-600 mt-1">{member.position}</p>
                        </div>
                    ))}
                </div>
            </section>


            <section className="mb-12 p-6 bg-gray-50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-3xl shadow-lg text-center transition-transform duration-300 ease-in-out hover:scale-105"
                            >
                                <div className="flex justify-center mb-4">
                                    <Icon className="w-12 h-12 text-red-300" />
                                </div>
                                <h3 className="text-3xl font-bold text-red-400 mb-2">{stat.value}</h3>
                                <p className="text-gray-700">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    )
}