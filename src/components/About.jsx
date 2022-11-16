import React from 'react'
import { Link } from 'react-scroll'

const About = () => {
    return (
        <section name='about' className='h-screen flex flex-col md:flex-row md:items-center md:justify-between text-white bg-[#181823]'>
            
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 '>
                <div className='p-8 pt-1'>
                    <h1 className='text-4xl '>About Me</h1>
                    <p className='text-gray-500 max-w-md mt-4 md:flex-1 '>Customers need great experiences with every interaction- that's where I come in. <br /> As a User Experience Designer, it's my job to provide exceptional services. I've been doing it for 2 years and have loved every minute of it. <br /> Problem Solving and coming up with profitable solutions is truly a passion for me. Naturally, this developed into a career which has led me to where I am today.</p>

                    <div className='underline cursor-pointer'>
                        <Link to='/more' spy={true} smooth={true} offset={50} duration={500} className='py-5'>More about me</Link>
                    </div>
                </div>
            </div>
            <section className='bg-book bg-cover bg-center h-screen w-full'>

            </section>
        </section>
    )
}

export default About
