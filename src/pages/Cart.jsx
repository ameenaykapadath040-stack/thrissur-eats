import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import API_URL from '../api';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(null);
    const total = getCartTotal();

    const handleCheckout = async () => {
        setIsCheckingOut(true);
        try {
            const response = await fetch(`${API_URL}/orders`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items: cart,
                    subtotal: total,
                    total: Math.round(total * 1.05)
                })
            });
            const data = await response.json();
            if (response.ok) {
                setOrderSuccess(data.orderId);
                clearCart();
            }
        } catch (error) {
            alert('Checkout failed. Please try again.');
        } finally {
            setIsCheckingOut(false);
        }
    };

    if (orderSuccess) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <div className="bg-green-100 p-6 rounded-full inline-block mb-6 text-green-600">
                    <ArrowRight className="h-16 w-16 rotate-90" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Placed!</h2>
                <p className="text-gray-500 mb-8">Your order ID is <span className="font-bold text-orange-600">#{orderSuccess}</span>. We'll start preparing your meal!</p>
                <Link to="/" className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold">Back to Home</Link>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <div className="flex justify-center mb-6">
                    <div className="bg-orange-100 p-6 rounded-full">
                        <ShoppingBag className="h-16 w-16 text-orange-600" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">Looks like you haven't added anything to your cart yet. Go ahead and explore our menu.</p>
                <Link
                    to="/menu"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 md:text-lg transition shadow-lg"
                >
                    Browse Menu
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-8">
                    <div className="bg-white shadow-sm rounded-2xl overflow-hidden border border-gray-100">
                        <ul className="divide-y divide-gray-100">
                            {cart.map((item) => (
                                <li key={item.id} className="p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:bg-gray-50 transition">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="flex-1 flex flex-col justify-between self-stretch">
                                        <div>
                                            <div className="flex justify-between">
                                                <h3 className="text-lg font-bold text-gray-900">
                                                    <Link to="/menu">{item.name}</Link>
                                                </h3>
                                                <p className="ml-4 text-lg font-bold text-gray-900">₹{item.price * item.quantity}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center border border-gray-300 rounded-lg">
                                                <button
                                                    type="button"
                                                    className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-l-lg transition"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    <Minus className="h-4 w-4" />
                                                </button>
                                                <span className="px-4 py-1 text-gray-900 font-medium">{item.quantity}</span>
                                                <button
                                                    type="button"
                                                    className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-r-lg transition"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </button>
                                            </div>
                                            <button
                                                type="button"
                                                className="text-sm font-medium text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                                <span className="hidden sm:inline">Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-4 mt-8 lg:mt-0">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                        <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>
                        <div className="flow-root">
                            <dl className="-my-4 divide-y divide-gray-100">
                                <div className="py-4 flex items-center justify-between">
                                    <dt className="text-gray-600">Subtotal</dt>
                                    <dd className="font-medium text-gray-900">₹{total}</dd>
                                </div>
                                <div className="py-4 flex items-center justify-between">
                                    <dt className="text-gray-600">Tax estimate (5%)</dt>
                                    <dd className="font-medium text-gray-900">₹{Math.round(total * 0.05)}</dd>
                                </div>
                                <div className="py-4 flex items-center justify-between border-t border-gray-200">
                                    <dt className="text-base font-bold text-gray-900">Order Total</dt>
                                    <dd className="text-xl font-bold text-orange-600">₹{Math.round(total * 1.05)}</dd>
                                </div>
                            </dl>
                        </div>
                        <div className="mt-8">
                            <button
                                type="button"
                                onClick={handleCheckout}
                                disabled={isCheckingOut}
                                className={`w-full bg-gray-900 border border-transparent rounded-xl shadow-sm py-4 px-4 text-base font-bold text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors flex justify-between items-center ${isCheckingOut ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <span>{isCheckingOut ? 'Processing...' : 'Checkout'}</span>
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="mt-4 text-center">
                            <Link to="/menu" className="text-sm font-medium text-gray-500 hover:text-orange-600">
                                or Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
