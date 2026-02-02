import { ArrowRight, Star, Clock, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../data/menuData';

const Home = () => {
    const featuredItems = MENU_ITEMS.filter(item => item.rating >= 4.8).slice(0, 3);

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-orange-600 to-red-600 text-white min-h-[90vh] flex items-center">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
                    <svg className="relative block w-full h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
                    <div className="text-center lg:text-left">
                        <div className="inline-block px-4 py-1 rounded-full bg-orange-500/30 backdrop-blur-sm border border-orange-400/50 text-orange-100 font-semibold mb-6 animate-fade-in-up">
                            Authentic Kerala Cuisine
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                            Flavors of <br />
                            <span className="text-yellow-300">God's Own Country</span>
                        </h1>
                        <p className="text-lg lg:text-xl mb-8 text-orange-100 max-w-2xl mx-auto lg:mx-0 opacity-90">
                            Experience the spicy, savory, and sweet traditions of Thrissur. From classic beef fry to fluffy appams, delivered hot to your doorstep.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/menu"
                                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition shadow-xl hover:shadow-2xl hover:-translate-y-1 transform flex items-center justify-center"
                            >
                                Order Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                to="/contact"
                                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition flex items-center justify-center"
                            >
                                Visit Us
                            </Link>
                        </div>
                    </div>
                    <div className="relative hidden lg:block">
                        <div className="aspect-square rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-3xl opacity-30 animate-pulse"></div>
                        <img
                            src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=2070&auto=format&fit=crop"
                            alt="Kerala Fish Curry"
                            className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition duration-500 border-4 border-white/20"
                        />
                        {/* Floating badge */}
                        <div className="absolute top-10 -right-4 bg-white text-orange-600 p-4 rounded-2xl shadow-xl z-20 animate-bounce-slow">
                            <span className="block text-3xl font-bold">4.9</span>
                            <div className="flex text-yellow-500"><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /></div>
                            <span className="text-xs text-gray-500 font-bold uppercase tracking-wide">Top Rated</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Items Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-orange-600 font-bold tracking-wide uppercase text-sm mb-2">Our Bestsellers</h2>
                        <h3 className="text-4xl font-bold text-gray-900">Featured Dishes</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                <div className="h-64 overflow-hidden relative">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
                                        <h4 className="text-white text-xl font-bold">{item.name}</h4>
                                        <p className="text-white/80 text-sm">{item.category}</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-orange-600">₹{item.price}</span>
                                        <Link to="/menu" className="text-gray-900 font-semibold hover:text-orange-600 flex items-center text-sm group/link">
                                            Order <ArrowRight className="ml-1 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/menu" className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-900 hover:text-white transition duration-300">
                            View Full Menu
                        </Link>
                    </div>
                </div>
            </section>

            {/* Info Banner */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                            <p className="text-gray-500">Hot and fresh food delivered to your doorstep within 45 minutes.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Live Tracking</h3>
                            <p className="text-gray-500">Track your order in real-time from our kitchen to your home.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Phone className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                            <p className="text-gray-500">Our support team is always available to help you with your orders.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
