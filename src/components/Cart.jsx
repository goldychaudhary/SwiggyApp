import { useState } from "react";
import { CDN_URL } from "./utils/constants";

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Strawberry Pastry",
            price: 24,
            originalPrice: 99,
            quantity: 1,
            image: "https://source.unsplash.com/50x50/?pastry,dessert",
            restaurant: { name: "Bakingo", location: "Madhapur" }
        },
        {
            id: 2,
            name: "Chocolate Cake",
            price: 40,
            originalPrice: 120,
            quantity: 1,
            image: "https://source.unsplash.com/50x50/?cake,dessert",
            restaurant: { name: "Bakingo", location: "Madhapur" }
        }
    ]);

    // Increase quantity
    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // Decrease quantity
    const decreaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ));
    };

    // Clear cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="max-w-md mx-auto mt-6 bg-white p-4 shadow-md rounded-lg">
            {/* Restaurant Info */}
            {/* {cartItems.length > 0 && (
                <div className="flex items-center border-b pb-3">
                    <img src={cartItems[0].image} alt="Restaurant" className="w-16 h-16 rounded-md mr-3"/>
                    <div>
                        <h2 className="text-lg font-semibold">{cartItems[0].restaurant.name}</h2>
                        <p className="text-gray-500">{cartItems[0].restaurant.location}</p>
                    </div>
                </div>
            )} */}

            {/* Cart Items */}
            {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center mt-4">Your cart is empty. Add some delicious food! 🍕</p>
            ) : (
                <>
                    <ul className="divide-y divide-gray-300">
                        {cartItems?.map((item) => (
                            <li key={item.id} className="flex justify-between items-center py-4">
                                {/* Item Image & Name */}
                                <div className="flex items-center">
                                    <img  src={`${CDN_URL}${item?.card?.info?.imageId}`} alt={item?.card?.info?.imageId} className="w-12 h-12 rounded-md mr-3"/>
                                    <div>
                                        <p className="font-medium">{item?.info?.name}</p>
                                        {/* <p className="text-gray-400 line-through text-sm">₹{item.originalPrice}</p> */}
                                        <p className="text-black font-semibold">₹{item.price}</p>
                                    </div>
                                </div>

                                {/* Quantity Selector */}
                                <div className="flex items-center border px-2 py-1 rounded-md">
                                    <button 
                                        className="text-lg px-2 text-gray-700 hover:text-black"
                                        onClick={() => decreaseQuantity(item.id)}
                                    >
                                        ➖
                                    </button>
                                    <span className="px-3">{item.quantity}</span>
                                    <button 
                                        className="text-lg px-2 text-green-600 hover:text-green-800"
                                        onClick={() => increaseQuantity(item.id)}
                                    >
                                        ➕
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Total & Clear Cart */}
                    <div className="mt-6 text-right">
                        <p className="text-xl font-semibold">Total: ₹{totalPrice}</p>
                        <button 
                            className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                            onClick={clearCart}
                        >
                            🗑 Clear Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
