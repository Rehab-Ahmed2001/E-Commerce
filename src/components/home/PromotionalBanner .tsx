'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const PromotionalBanner = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 5,
        hours: 23,
        minutes: 59,
        seconds: 35
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                const { days, hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    return { ...prevTime, seconds: seconds - 1 };
                } else if (minutes > 0) {
                    return { ...prevTime, minutes: minutes - 1, seconds: 59 };
                } else if (hours > 0) {
                    return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
                } else if (days > 0) {
                    return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
                } else {
                    clearInterval(timer);
                    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="container mx-auto">
            <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-lg p-8 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">


                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 text-green-400">
                            Categories
                        </h3>
                        <h2 className="text-3xl font-bold mb-6">
                            Enhance Your Music Experience
                        </h2>

                        <div className="flex space-x-4 mb-6">
                            <div className="text-center">
                                <div className="bg-gray-100 text-gray-900 rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
                                    {timeLeft.days.toString().padStart(2, '0')}
                                </div>
                                <span className="text-sm mt-2 block text-gray-300">Days</span>
                            </div>
                            <div className="text-center">
                                <div className="bg-gray-100 text-gray-900 rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
                                    {timeLeft.hours.toString().padStart(2, '0')}
                                </div>
                                <span className="text-sm mt-2 block text-gray-300">Hours</span>
                            </div>
                            <div className="text-center">
                                <div className="bg-gray-100 text-gray-900 rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
                                    {timeLeft.minutes.toString().padStart(2, '0')}
                                </div>
                                <span className="text-sm mt-2 block text-gray-300">Minutes</span>
                            </div>
                            <div className="text-center">
                                <div className="bg-gray-100 text-gray-900 rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
                                    {timeLeft.seconds.toString().padStart(2, '0')}
                                </div>
                                <span className="text-sm mt-2 block text-gray-300">Seconds</span>
                            </div>
                        </div>

                        <Button className="bg-white text-black hover:bg-green-200 font-bold py-3 px-8 rounded-full text-lg">
                            Buy Now!
                        </Button>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/images/music.png"
                            alt="Music"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-2xl object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default PromotionalBanner;