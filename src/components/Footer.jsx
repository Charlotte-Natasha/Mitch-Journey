import React from 'react'
import Tweet from '../images/twitter.png'
import Behance from '../images/behance.png'
import Linked from '../images/linked.png'

const Footer = () => {
    return (
        <div className='h-50 w-full bg-[#181823] text-white p-4'>
            <div className='items-center justify-center md:flex md:justify-between'>
                <div className='flex flex-col justify-between space-y-8'>
                    <div className='text-4xl'>
                        <h1>Michelle.O</h1>
                    </div>
                    <div className='flex space-x-4 text-lg'>
                        <a href="https://twitter.com/Michelle_Okello" target='blank'>
                            <img src={Tweet} alt="icon" className='w-10 h-10' />
                        </a>
                        <a href="https://www.behance.net/Michelle_Okello?tracking_source=search_users|michelle_okello" target='blank'>
                            <img src={Behance} alt="icon" className='w-10 h-10' />
                        </a>
                        <a href="https://www.linkedin.com/in/michelle-okello-954920145/" target='blank'>
                            <img src={Linked} alt="icon" className='w-10 h-10' />
                        </a>
                    </div>
                    
                </div>
                
            </div>
            <div className='py-5'>
                <p> Copyright 2022 . <a href="https://github.com/Charlotte-Natasha/Mitch-Journey" target='blank'> Charlotte Natasha</a></p>
            </div>
            
        </div>
    )
}

export default Footer
