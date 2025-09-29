
import React from 'react';
import Image from 'next/image';
import SectionTitle from '../shared/SectionTitle';
import CustomerServicesWithIcons from './CustomerServices ';

const NewArrivalProductWithImage = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <SectionTitle title="Featured" subtitle="New Arrival" />

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                    <Image
                        src="/images/Frame 687.png"
                        alt="Main Featured"
                        width={400}
                        height={400}
                        className="rounded-xl shadow-md object-contain"
                    />

                    <div className="flex flex-col gap-4">
                        <Image
                            src="/images/Frame 684.png"
                            alt="Secondary 1"
                            width={200}
                            height={200}
                            className="rounded-xl shadow-md object-contain"
                        />
                        <Image
                            src="/images/Frame 686.png"
                            alt="Secondary 2"
                            width={200}
                            height={200}
                            className="rounded-xl shadow-md object-contain"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Image
                            src="/images/Frame 685.png"
                            alt="Main Featured"
                            width={400}
                            height={400}
                            className="rounded-xl shadow-md object-contain"
                        />
                        <Image
                            src="/images/Frame 685.png"
                            alt="Main Featured"
                            width={400}
                            height={400}
                            className="rounded-xl shadow-md object-contain"
                        />
                    </div>


                </div>
            </div>
            <CustomerServicesWithIcons />
        </section>



    );
};

export default NewArrivalProductWithImage;