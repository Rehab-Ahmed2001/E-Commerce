import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
                {/* Exclusive */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Exclusive</h3>
                    <p className="mb-3">Subscribe</p>
                    <p className="text-gray-400 text-sm mb-4">
                        Get 10% off your first order
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-3 py-2 text-gray rounded-l-md focus:outline-none w-full border border-gray-200"
                        />
                        <button className="bg-white text-black px-4 border border-gray-300 border-l-0 rounded-r-md">
                            →
                        </button>
                    </div>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Support</h3>
                    <p className="text-gray-400 text-sm mb-2">
                        111 Bijoy sarani, Dhaka,
                        DH 1515, Bangladesh.
                    </p>
                    <p className="text-gray-400 text-sm mb-2">exclusive@gmail.com</p>
                    <p className="text-gray-400 text-sm">+88015-88888-9999</p>
                </div>

                {/* Account */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Account</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link href="#">My Account</Link></li>
                        <li><Link href="#">Login / Register</Link></li>
                        <li><Link href="#">Cart</Link></li>
                        <li><Link href="#">Wishlist</Link></li>
                        <li><Link href="#">Shop</Link></li>
                    </ul>
                </div>

                {/* Quick Link */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Quick Link</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link href="#">Privacy Policy</Link></li>
                        <li><Link href="#">Terms Of Use</Link></li>
                        <li><Link href="#">FAQ</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                </div>

                {/* Download App */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Download App</h3>
                    <p className="text-gray-400 text-sm mb-3">
                        Save $3 with App New User Only
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
                        <Image
                            src="/images/Qr Code.png"
                            alt="QR"
                            width={80}
                            height={80}
                            className="w-20 h-20 border rounded"
                        />
                        <div className="flex flex-col gap-1">
                            <Image
                                src="/images/GooglePlay.png"
                                alt="Google Play"
                                width={110}
                                height={35}
                                className="w-28 h-auto"
                            />
                            <Image
                                src="/images/download-appstore.png"
                                alt="App Store"
                                width={110}
                                height={35}
                                className="w-28 h-auto"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Link href="#"><Facebook size={18} /></Link>
                        <Link href="#"><Twitter size={18} /></Link>
                        <Link href="#"><Instagram size={18} /></Link>
                        <Link href="#"><Linkedin size={18} /></Link>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-10 pt-5 text-center text-gray-500 text-sm">
                © Copyright Rimel 2022. All rights reserved
            </div>
        </footer>
    );
}
