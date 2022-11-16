import React from 'react'
import Orac from '../images/porfolio/orac.png'
import Circle from '../images/circles.png'
import Hisani from '../images/porfolio/hisani.png'
import Switchlife from '../images/porfolio/switchlife.jpeg'
import Telkom from '../images/porfolio/telkom.png'


const Projects = () => {
    return (
        <div className='min-h-screen text-white bg-black pt-20 pb-28 px-8'>
            <div className='max-w-6xl mx-auto'>

                <div className='mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5'>

                    <div className=''>
                        <h4 className='text-gray-500'> My Projects</h4>
                        <h1 className='pt-2 text-4xl max-w-md '>Below are some of my projects</h1>
                    </div>

                    <div className='overflow-hidden rounded-md shadow-lg bg-[#181823]'>
                        <img src={Orac} alt="porfolio" className='w-full'/>
                        
                        <div className='p-4'>
                            <h1 className='text-3xl'>Orac Website Design</h1>
                            <p className='text-gray-500 py-3'>I worked with the Orac team, a startup, to design their entire website and mobile view from both Android and IOS. This project lasted a month and it was one of my best works.</p>
                            <a href="https://www.behance.net/gallery/150736879/Orac-Website" className='float-right'><img src={Circle} alt="" target="blank"/></a>
                        </div>
                        
                    </div>

                    <div className='rounded overflow-hidden shadow-lg bg-[#181823]'>
                        <img src={Hisani} alt="porfolio" className='w-full'/>
                        <div className='p-4'>
                            <h1 className='text-3xl'>Hisani - Donation app and website</h1>
                            <p className='text-gray-500 py-3'>I worked with the Orac team, a startup, to design their entire website and mobile view from both Android and IOS. This project lasted a month and it was one of my best works.</p>
                            <a href="https://www.behance.net/gallery/150736879/Orac-Website" className='float-right'><img src={Circle} alt="" target="blank"/></a>
                        </div>
                    </div>

                    <div className='rounded overflow-hidden shadow-lg bg-[#181823]'>
                        <img src={Switchlife} alt="porfolio" className='w-full'/>
                        <div className='p-4'>
                            <h1 className='text-3xl'>Switchlife mental health app</h1>
                            <p className='text-gray-500 py-3'>This was a collaborative with 4 other designers where we brought an idea to life, a pro bono mental health app. This was my second case study as I ventured into UX design.</p>
                            <a href="https://www.behance.net/gallery/150736879/Orac-Website" className='float-right'><img src={Circle} alt="" target="blank"/></a>
                        </div>
                    </div>

                    <div className='rounded overflow-hidden shadow-lg bg-[#181823]'>
                        <img src={Telkom} alt="porfolio" className='w-full'/>
                        <div className='p-4'>
                            <h1 className='text-3xl'>Telkom App Redesign</h1>
                            <p className='text-gray-500 py-3'>This was my first UX case study. I designed and prototyped a Telkom mobile app specifically for IOS. This app is meant to give Telkom users a great and easy experience when interacting with their products.</p>
                            <a href="https://www.behance.net/gallery/150736879/Orac-Website" className='float-right'><img src={Circle} alt="" target="blank"/></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>    
    )
}

export default Projects
