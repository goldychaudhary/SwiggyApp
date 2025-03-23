import { Link } from "react-router-dom";
import { LOGO_URL } from "./utils/constants";
import { useContext, useState } from "react";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const Header = () => {
    const [logName, setLogName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const userData = useContext(UserContext);
    const cartCount = 3; // Example cart count, replace with actual state or context

//Subscribing to the store using a selector
const cartItems = useSelector((state => state.cart.items))
console.log("### cartItems",cartItems)
    return (
        <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white shadow-md rounded-lg">
            {/* Logo */}
            <div className="logo-container">
                <img 
                    className="w-24 h-24 rounded-full shadow-lg border-4 border-white" 
                    src={LOGO_URL} 
                    alt="Logo" 
                />
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-6">
                <ul className="flex space-x-5 text-lg font-semibold">
                    {/* Online Status with Background */}
                    <li className={`px-2 py-1 rounded-md text-white font-bold ${onlineStatus ? "bg-green-800" : "bg-red-500"}`}>
                        Online: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li><Link to="/" className="hover:text-gray-200 transition">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-200 transition">About</Link></li>
                    <li><Link to="/contact-us" className="hover:text-gray-200 transition">Contact</Link></li>
                    {/* <li><Link to="/grocery" className="hover:text-gray-200 transition">Grocery</Link></li> */}
                    
                       {/* Cart Icon with Count */}
                       <li className="relative">
                        <Link to="/cart" className="flex items-center hover:text-gray-200 transition">
                            <ShoppingCart className="w-8 h-6" />
                            <span className="ml-2">Cart</span>
                            {cartItems?.length > 0 && (
                                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    {cartItems?.length}
                                </span>
                            )}
                        </Link>
                    </li>

                    <li>{userData?.loggedInUser}</li>
                </ul>
            </div>

            {/* Login Button */}
            <button
                className="ml-4 px-4 py-2 bg-white text-green-700 font-bold rounded-md shadow-md hover:bg-gray-100 transition"
                onClick={() => setLogName(logName === "Login" ? "Logout" : "Login")}
            >
                {logName}
            </button>
        </div>
    );
};

export default Header;
