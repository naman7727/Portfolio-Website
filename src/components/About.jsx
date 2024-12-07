/* eslint-disable no-unused-vars */
import React from 'react'
import about from "../assets/images/aboutSection.png"
import { motion } from "motion/react"
const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl'>About <spam className='text-neutral-500'>Me</spam></h1>
            <div className='flex flex-wrap'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }} className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img className='rounded-2xl w-96' src={about} alt="" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }} className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>I am a third-year B.Tech Computer Science student passionate about creating innovative and efficient solutions through technology. Proficient in React JS, Tailwind CSS, Node.js, and MySQL, c++, DSA, JavaScript, I specialize in building modern, responsive web applications.<br></br>
                            In addition to technical skills, I am continuously learning about Data Structures and Algorithms (DSA) to strengthen my problem-solving abilities and prepare for competitive coding challenges. My focus is on securing meaningful internships where I can apply my skills, gain industry exposure, and contribute to impactful projects.<br></br>
                            Recently, I developed a website for SbAuxichem, focused on textile, water, and paper chemicals, utilizing cutting-edge frameworks and APIs to enhance functionality.<br></br>
                            My career goal is to gain hands-on experience through internships while contributing to impactful projects and advancing my technical expertise. As a self-motivated and collaborative learner, I am eager to solve complex challenges and grow in the tech industry.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
