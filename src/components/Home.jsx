import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import Mich from '../images/mitch.jpeg'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='h-screen bg-black flex flex-col justify-center pb-16 md:flex-row md:items-center md:justify-between'>
            
                <div className='h-1/2 md:flex-1 md:w-auto '>
                    <img src={Mich} alt="my profile" className='h-[100%]'/>
                </div>
                <div className='p-4 mt-4 md:flex-1'>
                    <h2 className='text-3xl sm:text-6xl font-bold text-white'>Hello, I'm Michelle Okello.</h2>
                    <p className='text-white py-4 max-w-md'> I'm a Product Designer. I solve problems using design and create profitable and valuable use experiences. There's so much to me more than fancy titles. Welcome tp my portfolio showcase.</p>

                    <div>
                    <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-500 to-black cursor-pointer"
            >
                View Resume
                <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
                        </Link>
                    </div>
                </div>
            
        </div>
    )
}

export default Home
