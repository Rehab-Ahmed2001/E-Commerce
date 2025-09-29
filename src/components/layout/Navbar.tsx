"use client";

import { Heart, MenuIcon, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/wishlistContext";

const links = [
    {
        path: "/",
        label: "Home"
    },

    {
        path: "/shop/products",
        label: "Products"
    },
    {
        path: "/shop/categories",
        label: "Categories"
    },
    {
        path: "/shop/brands",
        label: "Brands"
    },
    {
        path: "/shop/about",
        label: "About"
    },
    {
        path: "/shop/contact",
        label: "Contact"
    },
]
const Navbar = () => {
    const pathName = usePathname()
    const { data: session, status } = useSession();
    console.log(session)
    const { cartDetails } = useCart()
    console.log("cartDetails", cartDetails)
    const { wishlistDetails } = useWishlist();
    return (
        <section className="py-4">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <span className="text-lg font-semibold tracking-tighter">
                            Exclusive
                        </span>
                    </Link>
                    <NavigationMenu className="hidden lg:block">
                        <NavigationMenuList>
                            {links.map((link, idx) => (
                                <NavigationMenuItem key={idx}>
                                    <NavigationMenuLink
                                        href={link.path}
                                        className={cn(
                                            navigationMenuTriggerStyle(), pathName === link.path && "underline"
                                        )}
                                    >
                                        {link.label}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            )
                            )}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="hidden items-center gap-4 lg:flex">
                        {
                            status === "loading" ? (
                                <span>loading...</span>
                            ) : status === "unauthenticated" ? (
                                <>
                                    <Button variant="outline" asChild >
                                        <Link href="/auth/login">Sign in</Link>
                                    </Button>
                                    <Button variant="outline" asChild >
                                        <Link href="/auth/register">Sign Up</Link>
                                    </Button>
                                </>
                            ) : (
                                <div className="flex items-center gap-4">
                                    <Link className="relative" href={"/protected/wishlist"}>
                                        <Badge
                                            className="absolute -top-2 -end-2 h-5 min-w-5 rounded-full px-1 text-white font-mono tabular-nums bg-red-600"
                                        >
                                            {wishlistDetails?.numOfWishlistItems}
                                        </Badge>
                                        <Heart className="size-8 text-gray-800" />
                                    </Link>
                                    <Link className="relative" href={"/protected/cart"}>
                                        {cartDetails && (<Badge
                                            className="absolute -top-2 -end-2 h-5 min-w-5 rounded-full px-1 text-white font-mono tabular-nums bg-red-600"
                                        >
                                            {cartDetails?.numOfCartItems}
                                        </Badge>)}
                                        <ShoppingCart className="size-8 text-gray-800" />
                                    </Link>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger><User className="size-8 text-gray-800" /></DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem><Link href={"/profile"}>
                                                Profile
                                            </Link></DropdownMenuItem >
                                            <DropdownMenuItem className="cursor-pointer" onClick={() => signOut({ callbackUrl: "/auth/login" })}>Sign Out</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            )
                        }
                    </div>
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="outline" size="icon">
                                <MenuIcon className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="max-h-screen overflow-auto">
                            <SheetHeader>
                                <SheetTitle>
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2"
                                    >
                                        <span className="text-lg font-semibold tracking-tighter">
                                            Exclusive
                                        </span>
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col p-4">
                                <div className="flex flex-col gap-6">
                                    {links.map((link, idx) => (
                                        <Link
                                            key={idx}
                                            href={link.path}
                                            className={cn("font-medium", pathName === link.path && "underline")} >
                                            {link.label}
                                        </Link>
                                    )
                                    )}
                                </div>
                                <div className="mt-6 flex flex-col gap-4">
                                    {
                                        status === "loading" ? (
                                            <span>loading...</span>
                                        ) : status === "unauthenticated" ? (
                                            <>
                                                <Button variant="outline" asChild >
                                                    <Link href="/auth/login">Sign in</Link>
                                                </Button>
                                                <Button variant="outline" asChild >
                                                    <Link href="/auth/register">Sign Up</Link>
                                                </Button>
                                            </>
                                        ) : (
                                            <div className="flex items-center gap-4">
                                                <Link className="relative" href={"/protected/wishlist"}>
                                                    {wishlistDetails && wishlistDetails.numOfWishlistItems > 0 && (
                                                        <Badge className="absolute -top-2 -end-2 h-5 min-w-5 rounded-full px-1 text-white font-mono tabular-nums bg-red-600">
                                                            {wishlistDetails.numOfWishlistItems}
                                                        </Badge>
                                                    )}
                                                    <Heart className="size-8 text-gray-800" />
                                                </Link>
                                                <Link className="relative" href={"/cart"}>
                                                    {cartDetails && (<Badge
                                                        className="absolute -top-2 -end-2 h-5 min-w-5 rounded-full px-1 text-white font-mono tabular-nums bg-red-600"
                                                    >
                                                        {cartDetails?.numOfCartItems}
                                                    </Badge>)}
                                                    <ShoppingCart className="size-8 text-gray-800" />
                                                </Link>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger><User className="size-8 text-gray-800" /></DropdownMenuTrigger>
                                                    <DropdownMenuContent>
                                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem><Link href={"/profile"}>
                                                            Profile
                                                        </Link></DropdownMenuItem >
                                                        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut({ callbackUrl: "/auth/login" })}>Sign Out</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div >
        </section >

    );
};

export default Navbar;
