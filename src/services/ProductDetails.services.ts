
export async function GetProductsDetails(id: string) {
    try {
        const res = await fetch(
            `https://ecommerce.routemisr.com/api/v1/products/${id}`,
            {
                cache: "no-cache",
                // next:{revalidate:120 ,tags:["products"]},
            }
        );

        if (!res.ok) {
            throw new Error(res.statusText || "Failed to fetch product");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
        return { error: (error as Error).message };
    }
}
