import React from 'react';
import SectionTitle from "@/components/shared/SectionTitle";
import { Separator } from '../ui/separator';
import { GetProducts } from "@/services/products.services";
import { IProduct } from '@/interfaces/products.interface';
import { Button } from '../ui/button';
import Link from 'next/link';
import ProductItems from '../Products/ProductItems';


export default async function ProductsSeaction() {
    const { data: products }: { data: IProduct[] } = await GetProducts(8);
    console.log(products)
    return (
        <section className="py-10">
            <div className="container mx-auto">
                <SectionTitle title={"Our Products"} subtitle={"Explore Our Products"} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 mb-30">
                    {
                        products && products.map((product) => (
                            <ProductItems key={product._id} product={product} />
                        ))
                    }
                </div>
                <div className="flex justify-center">
                    <Button variant={"destructive"} asChild >
                        <Link href={"/shop/products"} >View All Product</Link>
                    </Button>
                </div>
                <Separator className="mt-10" />
            </div>

        </section>
    );
}
