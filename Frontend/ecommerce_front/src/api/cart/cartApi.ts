import axios from "axios";
import type { Product } from "../types/product";

 const API_URL = "http://localhost:5000/api/cart";

 export const fetchCart = async()=>{
    const res = await axios.get(API_URL);
    return res.data;
 }

 export const addToCart = async(product:Product) =>{
    const res = await axios.post(API_URL, {
    productId: product.id,
    title: product.title,
    price: product.price,
    image: product.image, });
    return res.data;
 }

 export const increaseQuantity = async(productId:number)=>{
    const res = await axios.patch(`${API_URL}/${productId}/increase`);
    return res.data;
 }

 export const decreaseQuantity = async(productId: number)=>{
    const res = await axios.patch(`${API_URL}/${productId}/decrease`);
    return res.data;
 }

 export const removeItem = async(productId:number) =>{
    const res = await axios.delete(`${API_URL}/${productId}`);
    return res.data;

 }
