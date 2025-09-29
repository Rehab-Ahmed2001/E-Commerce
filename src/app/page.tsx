import MainSlider from "@/components/home/MainSlider";
import CategoriesSeaction from "@/components/home/categorySeaction";
import ProductsSeaction from "@/components/home/ProductsSeaction"
import { Suspense } from "react";
import GridSkeleton from "@/components/shared/GridSkeleton";
import PromotionalBanner from "@/components/home/PromotionalBanner ";
import NewArrivalProductWithImage from "@/components/home/NewArrivalProduct";

export default function Home() {
  return (
    <>
      <MainSlider />
      <Suspense fallback={<GridSkeleton />}>
        <CategoriesSeaction />
      </Suspense>
      <Suspense fallback={<GridSkeleton />}>
        <ProductsSeaction />
      </Suspense>

      <PromotionalBanner />
      <NewArrivalProductWithImage />
    </>
  );
}
