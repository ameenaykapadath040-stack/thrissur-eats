import { useState, useEffect } from 'react';
import { CATEGORIES } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { Plus, Star } from 'lucide-react';
import API_URL from '../api';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        fetch(`${API_URL}/menu`)
            .then(res => res.json())
            .then(data => {
                setMenuItems(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Fetch error:', err);
                setLoading(false);
            });
    }, []);

    const filteredItems = selectedCategory === "All"
        ? menuItems
        : menuItems.filter(item => item.category === selectedCategory);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center text-orange-600">Our Menu</h1>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${selectedCategory === category
                            ? "bg-orange-600 text-white shadow-lg"
                            : "bg-white text-gray-700 hover:bg-orange-100 border border-gray-200"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Menu Grid */}
            {loading ? (
                <div className="text-center py-20 text-gray-500">Loading delicious items...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center shadow-sm">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                    <span className="text-sm font-bold text-gray-800">{item.rating}</span>
                                </div>
                                {item.isVeg ? (
                                    <div className="absolute top-4 left-4 bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold border border-green-200">
                                        VEG
                                    </div>
                                ) : (
                                    <div className="absolute top-4 left-4 bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold border border-red-200">
                                        NON-VEG
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                                    <span className="text-xl font-bold text-orange-600">₹{item.price}</span>
                                </div>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>

                                <button
                                    onClick={() => addToCart(item)}
                                    className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors active:scale-95 transform"
                                >
                                    <Plus className="w-5 h-5" /> Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Menu;
