import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate form submission
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Have a question or feedback? We'd love to hear from you. Reach out to us for catering orders or general inquiries.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-md p-8 flex items-start space-x-6 hover:shadow-lg transition">
                            <div className="bg-orange-100 p-4 rounded-full text-orange-600">
                                <MapPin className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Thrissur+Eats+Restaurant+Thrissur+Kerala"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 leading-relaxed hover:text-orange-600 transition-colors"
                                >
                                    Thrissur Eats Restaurant <br />
                                    Opposite Old Bus Stand <br />
                                    Thrissur, Kerala 680001
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 flex items-start space-x-6 hover:shadow-lg transition">
                            <div className="bg-orange-100 p-4 rounded-full text-orange-600">
                                <Phone className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                                <p className="text-gray-600">
                                    <span className="block mb-1">Reservations: +91 98765 43210</span>
                                    <span className="block">Delivery: +91 98765 43211</span>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 flex items-start space-x-6 hover:shadow-lg transition">
                            <div className="bg-orange-100 p-4 rounded-full text-orange-600">
                                <Mail className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                                <p className="text-gray-600">
                                    hello@thrissureats.com <br />
                                    catering@thrissureats.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>
                        {submitted ? (
                            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-8 rounded-xl text-center">
                                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                                <p>Thank you for reaching out. We'll get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="block w-full rounded-lg border-gray-300 border px-4 py-3 focus:border-orange-500 focus:ring-orange-500 shadow-sm transition"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="block w-full rounded-lg border-gray-300 border px-4 py-3 focus:border-orange-500 focus:ring-orange-500 shadow-sm transition"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        required
                                        className="block w-full rounded-lg border-gray-300 border px-4 py-3 focus:border-orange-500 focus:ring-orange-500 shadow-sm transition"
                                        placeholder="Catering Inquiry"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        className="block w-full rounded-lg border-gray-300 border px-4 py-3 focus:border-orange-500 focus:ring-orange-500 shadow-sm transition"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-orange-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-orange-700 transition shadow-lg flex items-center justify-center space-x-2"
                                >
                                    <span>Send Message</span>
                                    <Send className="h-5 w-5" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Simulated Map */}
                <div className="mt-16 rounded-2xl overflow-hidden shadow-lg h-96 bg-gray-200 relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125585.55627258066!2d76.1473212502859!3d10.527641569420546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef29304a9e31%3A0x7d28701988db753a!2sThrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1714494191079!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
