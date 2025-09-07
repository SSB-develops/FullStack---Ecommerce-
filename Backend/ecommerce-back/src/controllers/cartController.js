import Cart from "../models/cart.js"

// GET/cart
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne();
    if (!cart) return res.json([]);
    res.json(cart.items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// POST/cart
export const addToCart = async (req, res) => {
  try {
    const { productId, title, price, image } = req.body;
    let cart = await Cart.findOne();

    if (!cart) {
      cart = new Cart({ items: [] });
    }

    const existingItem = cart.items.find((i) => i.productId === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({ productId, title, price, image, quantity: 1 });
    }

    await cart.save();
    res.json(cart.items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



//PATCH /cart/:id/increase
export const increaseQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findOne();

    if (!cart) return res.status(404).json({ message: "cart not found" });

    const item = cart.items.find((i) => i.productId === Number(id));

    if (item) item.quantity += 1;

    await cart.save();
    res.json(cart.items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//PATCH /cart/:id/decrease
export const decreaseQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findOne();

    if (!cart) return res.status(404).json({ message: "cart not found" });

    const item = cart.items.find((i) => i.productId === Number(id));
    if (item) item.quantity -= 1;

    cart.items = cart.items.filter((i) => i.quantity > 0);

    await cart.save();
    res.json(cart.items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// DELETE /cart/:id
export const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findOne();

    if (!cart) return res.status(404).json({ message: "cart not found" });

    cart.items = cart.items.filter((i) => i.productId !== Number(id));

    await cart.save();
    res.json(cart.items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};