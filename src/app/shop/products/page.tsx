import React from "react";
import { GetProducts } from "@/services/products.services";
import { IProduct } from "@/interfaces/products.interface";
import ProductItems from "@/components/Products/ProductItems";

export default async function Productspage() {
  const { data: products }: { data: IProduct[] } = await GetProducts();
  console.log(products);

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products &&
            products.map((product) => (
              <ProductItems key={product._id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
}
