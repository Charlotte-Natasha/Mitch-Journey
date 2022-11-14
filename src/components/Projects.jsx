import React from 'react'
import Orac from '../images/porfolio/orac.png'
import Circle from '../images/circles.png'


const Projects = () => {
    return (
        <section className='min-h-screen text-white bg-black pt-20 pb-28 px-8'>
            <div className='max-w-6xl mx-auto'>
                <div>
                    <h4 className='text-gray-500'> My Projects</h4>
                    <h1 className='pt-2 text-4xl max-w-md'>Below are some of my projects</h1>
                </div>
                <div className='grid grid-cols-1 bg-[#181823] mt-16'>
                    <div className='rounded-md shadow-md '>
                        <img src={Orac} alt="porfolio" className='w-full h-82 object-cover'/>
                        <div className='p_8'>
                            <h1 className='text-3xl'>Orac Website Design</h1>
                            <p className='text-gray-500 py-3'>I worked with the Orac team, a startup, to design their entire website and mobile view from both Android and IOS. This project lasted a month and it was one of my best works.</p>
                            <a href="https://www.behance.net/gallery/150736879/Orac-Website" className='text-right'><img src={Circle} alt="" target="blank"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
