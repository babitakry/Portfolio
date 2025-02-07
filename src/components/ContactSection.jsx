import React from 'react'

function ContactSection() {
    return (
        <div id='contact'
            className='max-w-[1140px] mx-auto  mt-6 py-4 px-[2em]'>
            <h1 className='text-4xl font-bold'>Get in  touch</h1>
            <p className='pt-6 pb-6 font-semibold'>Feel free to reach out anytime - whether it's work-related or just a casual chat. I'm here to listen! 🙋‍♂️</p>

            <div className='sm:max-w-[55%] mx-auto  rounded-md py-7 text-center'>
                <div className='max-w-full flex sm:flex-row flex-col justify-center items-center gap-5'>
                    <div className='sm:max-w-[46%] w-full flex flex-col text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'>
                        <label htmlFor="first_name" className="text-start mb-2 text-sm font-medium ">First name</label>
                        <input type="text" id="first_name" className="bg-gray-50 outline-none border-b-2 border-gray-500 dark:border-gray-300 hover:border-gray-900 dark:hover:border-white bg-transparent" placeholder="" />
                    </div>
                    <div className='sm:max-w-[46%] w-full flex flex-col text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'>
                        <label htmlFor="first_name" className="text-start mb-2 text-sm font-medium ">Last name</label>
                        <input type="text" id="first_name" className="bg-gray-50 outline-none border-b-2 border-gray-500 dark:border-gray-300 hover:border-gray-900 dark:hover:border-white bg-transparent" placeholder="" />
                    </div>
                </div>

                <div className='w-full text-start py-6 sm:px-4 flex flex-col text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'>
                    <label htmlFor="email" className="text-start mb-2 text-sm font-medium">Email address</label>
                    <input type="email" id="email" className="bg-gray-50 outline-none border-b-2 border-gray-500 hover:border-gray-900 dark:border-gray-300 dark:hover:border-white bg-transparent" placeholder="" />
                </div>

                <div className='w-full text-start py-6 sm:px-4 flex flex-col text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'>
                    <label htmlFor="subject" className="text-start mb-2 text-sm font-medium">Subject</label>
                    <input type="text" id="subject" className="bg-gray-50 outline-none border-b-2 border-gray-500 dark:border-gray-300 hover:border-gray-900 dark:hover:border-white bg-transparent" placeholder="" />
                </div>

                <div className='w-full text-start py-6 sm:px-4 flex flex-col gap-y-9 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'>
                    <label htmlFor="message" className="text-start mb-2 text-sm font-medium ">Message</label>
                    <input type="message" id="message" className="bg-gray-50 outline-none border-b-2 border-gray-500 dark:border-gray-300 hover:border-gray-900  dark:hover:border-white bg-transparent" placeholder="" />
                </div>

                <div className=''>
                    <button type="button" className="text-white bg-[#FD6F00] hover:bg-[#FD6F00]/90 outline-none  font-medium rounded-lg text-sm sm:px-40 px-20 py-3 text-center items-center me-2 mb-2"> Send
                    </button>
                </div>
            </div>


        </div>
    )
}

export default ContactSection