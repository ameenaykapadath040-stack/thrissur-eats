import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Thrissur Eats</h3>
                        <p className="text-gray-400">
                            Authentic flavors of Kerala delivered to your doorstep. Experience the taste of tradition.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Thrissur+Eats+Restaurant+Thrissur+Kerala"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-orange-500 transition-colors block"
                        >
                            Old Bus Stand, Thrissur <br />
                            Kerala, India 680001
                        </a>
                        <p className="text-gray-400 mt-2">Phone: +91 98765 43210</p>
                        <p className="text-gray-400">Email: hello@thrissureats.com</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Thrissur Eats. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
