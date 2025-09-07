import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { fetchCart, addToCart, increaseQuantity, decreaseQuantity,removeItem } from "../api/cart/cartApi";
import type { Product } from "../api/types/product";


export function useCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });
}

export function useAddToCart() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (product: Product) => addToCart(product),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  });
}

export function useIncreaseCartItem() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => increaseQuantity(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  });
}

export function useDecreaseCartItem() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => decreaseQuantity(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  });
}

export function useRemoveFromCart() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => removeItem(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  });
}