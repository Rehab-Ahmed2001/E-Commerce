export async function Getcatogries() {
        try {
            const res = await fetch(
                `https://ecommerce.routemisr.com/api/v1/categories`
            );
            if (!res.ok)
                throw new Error(res.statusText || "Falied to fetch caegories");
            const data = await res.json();
            return data;

        } catch(error) {
            console.log("error")
            return { error: error as string };
        }
    }