import React  from 'react'
import Tweet from '../images/twitter.png'
import Behance from '../images/behance.png'
import Linked from '../images/linked.png'
import { Link } from 'react-scroll'

const Footer = () => {

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "work",
        },
        {
            id: 3,
            link: "contacts",
        },
    ];

    return (
        <div className='h-50 w-full bg-[#181823] text-white p-4'>
            <div className='md:items-center justify-center md:flex md:justify-between'>
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
                    <ul className="hidden md:flex">
                            {links.map(({ id, link }) => (
                        <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
                        >
                            <Link to={link} smooth duration={500}>
                            {link}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className='py-5'>
                        <p> Copyright 2022 . <a href="https://github.com/Charlotte-Natasha/Mitch-Journey" target='blank'> Charlotte Natasha</a></p>
                </div>
        </div>
    )
}

export default Footer
