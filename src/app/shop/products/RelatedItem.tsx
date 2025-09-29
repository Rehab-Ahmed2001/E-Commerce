import React from 'react';
import SectionTitle from "@/components/shared/SectionTitle";
import { GetProducts } from "@/services/products.services";
import { IProduct } from '@/interfaces/products.interface';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProductItems from '@/components/Products/ProductItems';


export default async function RelatedItems() {
    const { data: products }: { data: IProduct[] } = await GetProducts(4);
    console.log(products)
    return (
        <section className="py-10">
            <div className="container mx-auto">
                <SectionTitle title={"Related Items"} subtitle={"Explore Our Products"} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 mb-30">
                    {
                        products && products.map((product) => (
                            <ProductItems key={product._id} product={product} />
                        ))
                    }
                </div>
                <div className="flex justify-center">
                    <Button variant={"destructive"} asChild >
                        <Link href={"/shop/Products"} >View All Product</Link>
                    </Button>
                </div>
            </div>

        </section>
    );
}