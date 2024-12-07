/* eslint-disable no-unused-vars */
import React from 'react'
import logo from "../assets/images/logo-removebg-preview.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-2'>
            <div className='flex flex-shrink-0 items-center m-2'>
                <img src={logo} alt="" className='w-20 ' />
            </div>
            <div className='m-4 flex items-center justify-center gap-4 text-2xl'>

                <a
                    href="https://www.linkedin.com/in/naman-khandelwal-051453259/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" transition-all"
                >
                    <FaLinkedin /> {/* LinkedIn Icon with size 40px */}
                </a>
                <a
                    href="https://github.com/naman7727"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" transition-all"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/coolnaman_2004/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" transition-all"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://leetcode.com/u/Naman-khandelwal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" transition-all"
                >
                    <SiLeetcode />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
