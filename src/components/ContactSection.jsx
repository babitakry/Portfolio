import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactSection() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false); // State for loader & button disable

    const submitHandler = (e) => {
        e.preventDefault();
        setIsSending(true); // Disable button and show loader

        emailjs
            .sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
            })
            .then(() => {
                alert("Message sent successfully!"); // Alert on success
                form.current.reset(); // Clear form fields
            })
            .catch((error) => {
                console.error('FAILED...', error.text);
                alert("Failed to send message. Please try again.");
            })
            .finally(() => {
                setIsSending(false); // Enable button after request completes
            });
    };

    return (
        <div id='contact' className='max-w-[1140px] mx-auto mt-6 py-4 px-[2em]'>
            <h1 className='text-4xl font-bold'>Get in touch</h1>
            <p className='pt-6 pb-6 font-semibold'>Feel free to reach out anytime - whether it's work-related or just a casual chat. I'm here to listen! 🙋‍♂️</p>

            <form ref={form} onSubmit={submitHandler} className='sm:max-w-[55%] mx-auto rounded-md py-7 text-center'>
                <div className='max-w-full flex sm:flex-row flex-col justify-center items-center gap-5'>
                    <div className='sm:max-w-[46%] w-full flex flex-col text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'>
                        <label htmlFor="firstName" className="text-start mb-2 text-sm font-medium">First name</label>
                        <input name='firstName' type="text" id="firstName" className="bg-gray-50 outline-none border-b-2 border-gray-500 dark:border-gray-300 hover:border-gray-900 dark:hover:border-white bg-transparent" placeholder="" />
                    </div>
                    <div className='sm:max-w-[46%] w-full flex flex-col text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'>
                        <label htmlFor="lastName" className="text-start mb-2 text-sm font-medium">Last name</label>
                        <input name='lastName' type="text" id="lastName" className="bg-gray-50 outline-none border-b-2 border-gray-500 dark:border-gray-300 hover:border-gray-900 dark:hover:border-white bg-transparent" placeholder="" />
                    </div>
                </div>

                <div className='w-full text-start py-6 sm:px-4 flex flex-col text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'>
                    <label htmlFor="email" className="text-start mb-2 text-sm font-medium">Email address</label>
                    <input name='email' type="email" id="email" className="bg-gray-50 outline-none border-b-2 border-gray-500 hover:border-gray-900 dark:border-gray-300 dark:hover:border-white bg-transparent" placeholder="" />
                </div>

                <div className='w-full text-start py-6 sm:px-4 flex flex-col text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'>
                    <label htmlFor="subject" className="text-start mb-2 text-sm font-medium">Subject</label>
                    <input name='subject' type="text" id="subject" className="bg-gray-50 outline-none border-b-2 border-gray-500 dark:border-gray-300 hover:border-gray-900 dark:hover:border-white bg-transparent" placeholder="" />
                </div>

                <div className='w-full text-start py-6 sm:px-4 flex flex-col gap-y-9 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'>
                    <label htmlFor="message" className="text-start mb-2 text-sm font-medium">Message</label>
                    <input name='message' type="text" id="message" className="bg-gray-50 outline-none border-b-2 border-gray-500 dark:border-gray-300 hover:border-gray-900 dark:hover:border-white bg-transparent" placeholder="" />
                </div>

                <div className=''>
                    <button
                        type="submit"
                        disabled={isSending}
                        className={`text-white bg-[#FD6F00] font-medium rounded-lg text-sm sm:px-40 px-20 py-3 ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#FD6F00]/90'}`}>
                        {isSending ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeDasharray="32" />
                                </svg>
                                Sending...
                            </span>
                        ) : "Send"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactSection;
