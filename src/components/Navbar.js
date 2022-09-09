import React, {useState} from 'react';
import {Link} from 'react-scroll';
import logo from '../assets/ds_logo.png';
import {HiOutlineMail} from 'react-icons/hi';
import {FaBars, FaGithub, FaLinkedin, FaTimes} from 'react-icons/fa';

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    };

    return (
        <div className="fixed z-20 w-full h-[80px] flex justify-between items-center px-4 bg-[#0d0d0d] text-[#f2f2f2]">
            <div>
                <Link to="home" smooth="true" duration={500}><img src={logo} alt="logo" style={{width: '70px'}}/></Link>
            </div>

            {/* Menu */}
            <ul className="hidden md:flex">
                <li className="p-4"><Link to="home" smooth="true" duration={500}>Home</Link></li>
                <li className="p-4"><Link to="projects" smooth="true" duration={500}>Projects</Link></li>
                <li className="p-4"><Link to="contact" smooth="true" duration={500}>Contact</Link></li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-30">
                {!nav ? <FaBars size={25} className="mr-3"/> : <FaTimes size={25} className="mr-3"/>}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute z-20 top-0 left-0 w-full h-screen bg-[black] flex flex-col text-center py-6'}>
                <li className="py-6 text-6xl text-[#d98014]">Portfolio</li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth="true" duration={500}>Home</Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="projects" smooth="true" duration={500}>Projects</Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth="true" duration={500}>Contact</Link></li>
            </ul>

            {/*Social icons*/}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#327361]">
                        <a target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-gray-300"
                           href="https://www.linkedin.com/in/dawid-salamon89">Linkedin <FaLinkedin size={30}/></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0D0D0D]">
                        <a target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-gray-300"
                           href="https://github.com/saladawid">Github <FaGithub size={30}/></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#d98014]">
                        <a className="flex justify-between items-center w-full text-gray-300"
                           href="mailto: dawidsalamon@gmail.com">Email <HiOutlineMail size={30}/></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};