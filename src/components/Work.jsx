import React from 'react'

const Work = () => {
    return (
        <div name='work' className='bg-black p-4 '>
            <div className='text-white md:flex-1'>
                <h3 className='py-4 max-w-md font-medium text-gray-500'>Work Experience</h3>
                <h2 className='text-4xl md:text-6 sm:text-6xl font-medium text-white'>Companies I have worked <br /> with.</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 items-center py-8 text-white '>
                <div>
                    <h1 className='text-gray-500 text-4xl lg:text-6xl'>01</h1>
                    <p className='pt-4 pb-2'>FREELANCE</p>
                    <p>UX Designer</p>
                    <p className='text-gray-500'>Designed UI and UX in collaboration with engineering and design teams and manage and implement features.</p>
                </div>
                <div>
                    <h1 className='text-gray-500 lg:text-6xl text-4xl'>02</h1>
                    <p className='pt-4 pb-2'>ROAM AFRICA</p>
                    <p>Product Design, Intern</p>
                    <p className='text-gray-500'>Responsible for projects from research to handoff. Executing designs sprint and including stakeholders and engineers in the design process.</p>
                </div>
                <div>
                    <h1 className='text-gray-500 lg:text-6xl text-4xl'>03</h1>
                    <p className='pt-4 pb-2'>THE AFRICAN TALENT COMPANY,</p>
                    <p>Product Designer</p>
                    <p className='text-gray-500'>Worked with the project manager, QA Engineers and development team to test, build and deploy user interface and user experience using the design process: Planning, Research, Design and Prototyping.</p>
                </div>
            </div>
        </div>
    )
}

export default Work
