import React from 'react';

export const Contact = () => {

    return (
        <div name="contact" className="w-full h-screen bg-[#0d0d0d] flex justify-center items-center text-center p-4">
            <form method="POST" action="https://getform.io/f/f5729be5-83d4-4c44-b1a8-e837fb2e1286"
                  className="flex flex-col max-w-[600px] w-full">
                <p className="my-3 text-3xl sm:text-7xl font-bold text-[#327361]">Contact</p>
                <input className="p-2" type="text" placeholder="Name" name="name" required/>
                <input className="my-3 p-2" type="email" placeholder="Email" name="email" required/>
                <textarea className="p-2" rows="10" placeholder="Message" name="message" required></textarea>
                <button
                    className="text-white group border-2 px-6 py-2 my-4 mx-auto flex hover:bg-[#327361] hover:border-[#327361] duration-300">
                    Send message
                </button>
            </form>
        </div>
    );
};