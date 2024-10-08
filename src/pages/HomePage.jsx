import React, { useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../utils/firebase';
import logo from '../assets/logo.png';
import { Header } from '../components/Header';

export const HomePage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(firestore, "queries"), formData);
            console.log("Document written with ID: ", docRef.id);
            setFormData({ name: '', phone: '', email: '', message: '' });
            setShowPopup(false);
            alert("Your inquiry has been submitted successfully!");
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("There was an error submitting your inquiry. Please try again.");
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="font-sans">
            {/* Header */}
            {/* <Header /> */}
            <header className="p-4 flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center items-center">
                    <img src={logo} alt="TheTravelKaro" className="w-16 h-16" />
                    <h1 className="text-2xl font-bold text-red-500">TheTravelKaro</h1>
                </div>
                <nav className="w-full md:w-2/3 hidden md:flex uppercase justify-center items-center gap-2 lg:gap-6 text-xs lg:text-sm font-bold flex-wrap">
                    {['home', 'about us', 'top destinations', 'contact us'].map((item) => (
                        <a key={item} href="#" className="hover:border-b-2 hover:border-yellow-500 hover:pb-2">{item}</a>
                    ))}
                </nav>
            </header>

            {/* Main Content */}
            <main className="px-4 md:px-8 lg:px-20">
                {/* About Section */}
                <section className="flex flex-col md:flex-row gap-8 my-8">
                    <div className="w-full md:w-2/3 flex flex-col gap-8 text-sm">
                        <h2 className="text-2xl font-bold">Welcome to TheTravelKaro</h2>
                        <p className="space-y-4">
                            <span className="block">Embark on a journey of discovery with us and explore the wonders of the world. Whether you're seeking adventure in exotic locales, craving a serene escape to breathtaking landscapes, or yearning to immerse yourself in vibrant cultures, we're here to make your travel dreams a reality.</span>
                            <span className="block">At TheTravelKaro, we're passionate about crafting unforgettable experiences tailored to your desires. From luxury getaways to budget-friendly adventures, our curated selection of destinations and activities ensures there's something for every traveller.</span>
                            <span className="block">Join us as we wanderlust together, uncovering hidden gems and creating memories that last a lifetime. Let's provide you a memorable experience of the lifetime.</span>
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 h-[250px] md:h-[350px] bg-cover bg-center bg-[url('/api/placeholder/350/350')] shadow-lg shadow-black" />
                </section>

                {/* Advantages Section */}
                <section className="flex flex-col items-center my-12 gap-12">
                    <h2 className="text-2xl font-bold text-center">WHY CHOOSE US?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: "🌍", title: "Diverse Destinations", description: "Explore the vast range of tourist destinations that we offer. From Dubai to Malaysia, Kashmir to Rajasthan, we provide a diverse range of tourist places within India and overseas" },
                            { icon: "💰", title: "Value for Money", description: "We know how hard you have earned your money so we provide full value for each penny that you spend on your travel experiences. We ensure that you get the best experience with our well-crafted tours." },
                            { icon: "📸", title: "Beautiful Places", description: "We invite you to explore picture-perfect landscapes, verdant valleys, azure skies, cascading waterfalls, sun-kissed shores, majestic mountains with us. Let us take you on a beautiful journey of discovery. Each of these places holds a unique allure waiting to be discovered." },
                            { icon: "❤️", title: "Passionate Travel", description: "We know that traveling keeps you young. That's why we want this passion to remain alive. Follow your passion and enjoy the world with our customized package tours." },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center gap-4 text-center">
                                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-sky-400 text-white border-3 border-sky-400 text-4xl">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold">{item.title}</h3>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <a
                href="https://wa.me/919212939382"  // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
            >
                <img src="https://upload.wikimedia.org/wikipedia/commons/archive/6/6b/20220228223902%21WhatsApp.svg" alt="Send Text" height={"50px"} width={"50px"} />
            </a>

            {/* Footer */}
            <footer className="bg-gray-700 text-white">
                <div className="px-4 py-8 md:px-8 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white">
                    {[
                        { title: "CONTACT US", items: ["Rz-95, Ground Floor, B Block, Veer Nagar, West Sagarpur, New Delhi - 110046", "+91 9212939382", "info@the-travelkaro.com"] },
                        { title: "INFORMATION", items: ["Cancellation Policy", "Travel News", "Terms and Conditions", "Privacy Policy", "User Agreement"] },
                        { title: "OUR MENU", items: ["Home", "About Us", "Top Destinations", "Contact Us"] },
                    ].map((section, index) => (
                        <div key={index}>
                            <h4 className="mb-4 text-lg font-bold">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="pb-2 border-b border-white last:border-b-0">
                                        <a href="#" className="hover:text-yellow-500">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="p-4 text-sm text-center">
                    Copyright © 2024 TheTravelKaro. All Rights Reserved.
                </div>
            </footer>

            {/* Popup Form */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
                        <button
                            onClick={closePopup}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                        <h2 className="text-xl font-bold mb-4">Tell us what you are looking for</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-1">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
