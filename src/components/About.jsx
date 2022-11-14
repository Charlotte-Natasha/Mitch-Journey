import React from 'react'
import Book from '../images/about.jpeg'

const About = () => {
    return (
        <div className='bg-[#181823] h-screen flex flex-col md:flex-row md:items-center md:justify-between text-white'>
            <div className='p-8 pt-1'>
                <h1 className='text-4xl '>About Me</h1>
                <p className='text-gray-500 max-w-md mt-4 md:flex-1 '>Customers need great experiences with every interaction- that's where I come in. <br /> As a User Experience Designer, it's my job to provide exceptional services. I've been doing it for 2 years and have loved every minute of it. <br /> Problem Solving and coming up with profitable solutions is truly a passion for me. Naturally, this developed into a career which has led me to where I am today.</p>

                <div className='underline'>
                    <p className='py-5'>More about me</p>
                </div>
            </div>
            
            <div className='md:flex-1 md:w-auto h-1/2 object-cover'>
            <img src={Book} alt="my profile" className='h-[100%]'/>
            </div>
        </div>
    )
}

export default About
