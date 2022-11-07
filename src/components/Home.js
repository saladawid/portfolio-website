import React from 'react';
import CV from '../assets/Dawid Salamon__CV.pdf';
import {IoIosArrowForward} from 'react-icons/io';

export const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#f2f2f2]">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center sm:text-left text-center h-full">
                <h1 className="text-3xl sm:text-7xl sm:mt-2 mt-6 font-bold text-[#d98014]">I warmly welcome</h1>
                <h2 className="text-3xl sm:text-7xl mb-5 font-bold text-[#0d0d0d]">My name is Dawid</h2>
                <h2 className="text-2xl sm:text-4xl font-bold text-[#0d0d0d]">I have been learning JavaScript for two
                    years</h2>
                <h2 className="text-2xl sm:text-4xl mt-4 font-bold text-[#d98014]">I would love to become a Junior Node.js
                    Developer</h2>
                <p className="text-2xl sm:text-4xl mt-3 font-bold text-[#0d0d0d]">Technologies that I learn and use:</p>
                <span className="text-2xl sm:text-4xl my-3 font-bold text-[#d98014]">Node.js, <span>Express,</span> React, MongoDB,
                    MySQL</span>
                <div>
                    <button
                        className="text-white bg-[#0d0d0d] group border-2 px-6 py-2 my-4 hover:bg-[#F28F16] hover:border-[#F28F16] duration-300">
                        <a className="flex items-center" target="_blank" rel="noreferrer" href={CV}>
                            Download CV
                            <span className="group-hover:rotate-90 duration-300">
                            <IoIosArrowForward/>
                        </span>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};