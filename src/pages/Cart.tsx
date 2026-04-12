import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Explore our gallery to find unique handcrafted treasures!</p>
        <Link
          to="/gallery"
          className="inline-flex bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
        >
          Browse Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-4 bg-card p-4 rounded-lg border border-border">
                <img src={item.product.image} alt={item.product.name} className="w-24 h-24 object-cover rounded-md" loading="lazy" />
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground">{item.product.name}</h3>
                  <p className="text-muted-foreground text-sm">{item.product.category}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-8 h-8 rounded border border-border flex items-center justify-center hover:bg-muted">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-semibold text-foreground w-8 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-8 h-8 rounded border border-border flex items-center justify-center hover:bg-muted">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="font-bold text-primary">₹{(item.product.price * item.quantity).toLocaleString()}</span>
                    <button onClick={() => removeItem(item.product.id)} className="text-destructive hover:opacity-70">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-card p-6 rounded-lg border border-border h-fit">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2 text-muted-foreground"><span>Subtotal</span><span>₹{total.toLocaleString()}</span></div>
            <div className="flex justify-between mb-2 text-muted-foreground"><span>Shipping</span><span>Free</span></div>
            <div className="border-t border-border my-4" />
            <div className="flex justify-between font-bold text-lg text-foreground"><span>Total</span><span>₹{total.toLocaleString()}</span></div>
            <button className="w-full mt-6 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Proceed to Checkout
            </button>
            <button onClick={clearCart} className="w-full mt-3 border border-border py-3 rounded-lg font-semibold text-muted-foreground hover:bg-muted transition-colors">
              Clear Cart
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;
