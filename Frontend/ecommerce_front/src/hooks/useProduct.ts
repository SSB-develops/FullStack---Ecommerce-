import { useQuery } from "@tanstack/react-query"
import { fetchProductById, fetchProducts, type Product } from "../api/products/product"

export const useProduct =()=>{
    return useQuery<Product[],Error>({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });
};

export const useProductById = (id:number) =>{
    return useQuery({
        queryKey: ["products", id], // cache per product id
        queryFn: ()=> fetchProductById(id),
        enabled: !!id, //ensure it only runs when id  is defined
    })
}
