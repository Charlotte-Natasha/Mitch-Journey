import React from 'react'
import Pen from '../images/pen.png'
import Load from '../images/load.png'
import Act from '../images/interaction.png'


const More = () => {
    return (
        <div className='bg-black p-4'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 items-center py-8 text-white '>
                <div>
                    <h1 className='text-4xl lg:text-6xl pb-8'>Skillset</h1>
                    
                    <p className='text-gray-500'>With skills in over 3 different fields of design, I am self taught and strive to continue to improve my skills so am able to handle any project.</p>
                </div>
                <div>
                <img src={Load} alt='writing' />
                    <p className='pt-4 pb-2'>Product Design</p>
                    
                    <p className='text-gray-500'>When I started as an intern, I learnt how to design by understanding the end-user customer, their pain-points, wants and needs. User Research and stakeholder management is what has made the product design execution flawless. </p>
                </div>
                <div>
                    <img src={Pen} alt='writing' />
                    <p className='pt-4 pb-2'>Visual Design</p>
                    <p className='text-gray-500'>My experience as a freelancer enabled me to create an aesthetic of a mobile app and a website. I am still learning and polishing where I feel I fall short. With a lot of UI practice, I have developed a good eye for colors, typography and layout.</p>
                </div>
                <div className=''>
                <img src={Act} alt='writing' />
                    <p className='pt-4 pb-2 text-white'>Interaction Design</p>
                    
                    <p className='text-gray-500'>Creating an Interaction between a product and a user is fascinating. I've learnt to include a strategic focus on how users interact during an experience and how that can be managed.</p>
            </div>
            </div>
        </div>
    )
}

export default More
