/* eslint-disable no-unused-vars */
import React from 'react'
import portfolio from "../assets/images/herosection.png"
import { motion } from "motion/react"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})
const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 pl-6 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-16 text-4xl font-thin tracking-tight lg:mt-14 lg:text-7xl'>Naman Khandelwal</motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tighter'>As a third-year B.Tech Computer Science student, I aim to leverage my technical skills in React JS, Tailwind CSS, Node.js, and MySQL to contribute to impactful projects and develop innovative web applications. My objective is to gain hands-on industry experience through internships, enhance my problem-solving abilities by mastering Data Structures and Algorithms, and grow as a skilled and versatile software developer committed to delivering efficient solutions</motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center items-center'>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }} src={portfolio} alt="" className='w-96' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
