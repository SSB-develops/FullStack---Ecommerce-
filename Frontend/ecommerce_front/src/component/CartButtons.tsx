import { Typography, Button, Stack } from "@mui/material";
import type { Product } from "../api/types/product";
import { useAddToCart, useCart, useDecreaseCartItem, useIncreaseCartItem, useRemoveFromCart } from "../hooks/useCart";


type CartButtonsProps = {
  product: Product;
};

export default function CartButtons({ product }: CartButtonsProps) {
  const { data: cart } = useCart();
  const addMutation = useAddToCart();
  const incMutation = useIncreaseCartItem();
  const decMutation = useDecreaseCartItem();
  const removeMutation = useRemoveFromCart();

  const cartItem = cart?.find((item: any) => item.productId === product.id);
  const quantity = cartItem?.quantity || 0;

  if (quantity > 0) {
    return (
      <Stack direction="row" spacing={1} alignItems="center">
        <Button size="small" sx={{
      minWidth: 32,
      minHeight: 32,
      borderRadius: "50%", // 👈 circle shape
      backgroundColor: "#ADD8E6",
      color: "black",
      "&:hover": { backgroundColor: "#A7C7E7" },
    }} 
    onClick={() => incMutation.mutate(product.id)}>+</Button>
        <Typography>{quantity}</Typography>
        <Button size="small"
        sx={{
      minWidth: 32,
      minHeight: 32,
      borderRadius: "50%", // 👈 circle shape
      backgroundColor: "#ADD8E6",
      color: "black",
      "&:hover": { backgroundColor: "#A7C7E7" },
    }}
         onClick={() => decMutation.mutate(product.id)}>-</Button>
        <Button size="small" color="error" 
        sx={{
    borderRadius:"20px",
    border: "1px solid red",
    color: "red",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgba(255,0,0,0.1)",
    },
  }}
        onClick={() => removeMutation.mutate(product.id)}>X</Button>
      </Stack>
    );
  }

  return (
    <Button size="small" variant="contained" onClick={() => addMutation.mutate(product)}>
      ADD
    </Button>
  );
}