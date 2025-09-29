

import { ICategory } from "@/interfaces/category.interface";
import { Getcatogries } from "@/services/categories.services";
import React from 'react'
import CategoriesSlider from "@/components/home/CategoriesSlider"
import SectionTitle from "@/components/shared/SectionTitle"
import { Separator } from "../ui/separator";



export default async function CategoriesSeaction() {

    const { data: categories }: { data: ICategory[] } = await Getcatogries();
    console.log(categories)


    return (
        <section className="py-10">
            <div className="container mx-auto">
                <SectionTitle title={"Categories"} subtitle={"Browse By Category"} />
                <CategoriesSlider categories={categories} />
                <Separator />
            </div>

        </section>
    )
}