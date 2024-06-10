import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const Contacts = () => 
{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = e => setFormData({...formData,[e.target.id]: e.target.value})

    const handleSubmit = e => 
    {
        e.preventDefault();
        // Handle form submission logic here, e.g., send the form data to an API
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <Navbar/>
            <div className="min-h-screen flex items-center justify-center">
                <div className="p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block font-bold mb-2" htmlFor="name">Name</label>
                            <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full bg-inherit px-3 py-2 border border-gray-300 rounded-lg" placeholder="Your Name" required/>
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold mb-2" htmlFor="email">Email</label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-inherit px-3 py-2 border border-gray-300 rounded-lg" placeholder="Your Email Address" required/>
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold mb-2" htmlFor="message">Message</label>
                            <textarea id="message" value={formData.message} onChange={handleChange} className="w-full bg-inherit px-3 py-2 border border-gray-300 rounded-lg" rows="4" placeholder="Your Message" required></textarea>
                        </div>
                        <div className="flex items-center justify-center">
                            <button type="submit" className="button px-4 py-2 rounded-lg focus:outline-none">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contacts;
