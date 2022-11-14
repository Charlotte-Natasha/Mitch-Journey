import React from 'react'

const Contacts = () => {

    const submit = ()=> {
        alert("Message sent")
    }

    return (
        <div className='antialiased bg-black'>
            <div className='flex w-full h-screen justify-center items-center text-white'>
                <div className='bg-[#181823] w-full max-w-5xl p-8 sm:p-12 rounded-xl shadow-lg flex flex-col overflow-hidden space-y-6 md:flex-row md:space-x-6 md:space-y-0'>
                    <div className='flex flex-col space-y-2 max-w-md'>
                        <h1 className='font-black text-4xl tracking-wide'> Have an opportunity? Let's work together.</h1>
                        <p className='text-gray-500 pt-2 text-sm'> Now that you know about me, let me know if you are interested to work with me.</p>
                    </div>
                    <div className='relative'>
                        <div className='absolute w-40 h-40 bg-violet-200 z-0 rounded-full -right-28 -top-28'></div>
                        <div className='absolute w-40 h-40 bg-violet-200 z-0 rounded-full -left-28 -bottom-20'></div>
                        <div className='bg-black relative rounded-xl z-10 shadow-lg p-8 '>
                            <form action="" className='flex flex-col space-y-4'>
                                <div>
                                    <label htmlFor="">Name</label>
                                
                                    <input type="text" placeholder='Your name here' className='ring-1 ring-[#5221E6] w-full rounded-md px-4 mt-2 py-2 outline-none bg-black focus:ring-2 focus:ring-violet-300'/>
                                </div>
                                <div>
                                    <label htmlFor="">Email Address</label>
                                
                                    <input type="email" placeholder='...@gmail.com' className='ring-1 ring-[#5221E6] w-full rounded-md px-4 py-2 mt-2 outline-none bg-black focus:ring-2 focus:ring-violet-300'/>
                                </div>
                                <div>
                                    <label htmlFor="">Message</label>
                                
                                    <textarea type="email" placeholder='Explain yourself' rows='4' className='ring-1 ring-[#5221E6] w-full rounded-md px-4 py-2 mt-2 outline-none bg-black focus:ring-2 focus:ring-violet-300'></textarea>
                                </div>
                                <button className='inline-block self-end bg-[#5221E6] rounded-lg px-6 py-2 text-small' onClick={submit}>LET'S GET STARTED</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
