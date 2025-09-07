import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    productId: {type:Number, required:true},
    title: {type: String, required:true},
    price:{type:Number, required: true},
    image: {type: String, required: true},
    quantity: { type:Number, default:1 },
});

const cartSchema = new mongoose.Schema({
    items: {type:[cartItemSchema], default:[]},
})

const Cart = mongoose.model("cart", cartSchema, "CartTable");

export default Cart;