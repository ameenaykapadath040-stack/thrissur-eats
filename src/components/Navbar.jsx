import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { getCartCount } = useCart();
    const count = getCartCount();

    return (
        <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-18">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-orange-600 flex items-center">
                            <span className="bg-orange-600 text-white p-1 rounded mr-2">TE</span>
                            Thrissur Eats
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-orange-600 px-3 py-2 font-medium transition-colors">Home</Link>
                        <Link to="/menu" className="text-gray-700 hover:text-orange-600 px-3 py-2 font-medium transition-colors">Menu</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-orange-600 px-3 py-2 font-medium transition-colors">Contact</Link>
                        <Link to="/cart" className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors group">
                            <ShoppingBag className="h-6 w-6 group-hover:scale-110 transition-transform" />
                            {count > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                                    {count}
                                </span>
                            )}
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <Link to="/cart" className="relative p-2 text-gray-700 hover:text-orange-600 mr-4">
                            <ShoppingBag className="h-6 w-6" />
                            {count > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                                    {count}
                                </span>
                            )}
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-orange-600 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md"
                        >
                            Home
                        </Link>
                        <Link
                            to="/menu"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md"
                        >
                            Menu
                        </Link>
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
