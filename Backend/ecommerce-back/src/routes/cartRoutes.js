import express from "express";
import { addToCart, decreaseQuantity, getCart, increaseQuantity, removeFromCart } from "../controllers/cartController.js";

const router = express.Router();

router.get("/", getCart);
router.post("/", addToCart);
router.patch("/:id/increase", increaseQuantity);
router.patch("/:id/decrease", decreaseQuantity);
router.delete("/:id",removeFromCart);

export default router;