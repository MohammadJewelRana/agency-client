import React from 'react';
import logo from '../../assets/logo/download (1).jpg'

const Helping = () => {
    return (
        <div className='my-24 flex justify-between md:justify-center lg:justify-around  gap-36 items-center bg-gray-300 py-6 px-12' id='product'>

<div className=' grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-36  items-center justify-around'>  
            <div>
                <p className='text-4xl font-bold'>Helping a local</p>
                <p className='text-3xl font-bold text-green-400 mb-2'>Business reinvent itself</p>
                <p>We reached here with our hard work and dedication</p>
            </div>



            <div className='flex flex-col gap-8'>
                <div className='flex flex-wrap justify-between gap-8'>
                    <div className='flex items-center '>
                        <img src={logo} className='h-16 w-16 rounded-full mr-3' alt="" />
                        <div>
                            <p className='font-bold text-xl'>2,245,341</p>
                            <p className='text-gray-400'>Members</p>
                        </div>
                    </div>
                    <div className='flex items-center  '>
                        <img src={logo} className='h-16 w-16 rounded-full mr-3' alt="" />
                        <div>
                            <p className='font-bold text-xl'>2,245,341</p>
                            <p className='text-gray-400'>Members</p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>

                <div className='flex flex-wrap justify-between gap-8'>
                    <div className='flex items-center  '>
                        <img src={logo} className='h-16 w-16 rounded-full mr-3' alt="" />
                        <div>
                            <p className='font-bold text-xl'>2,245,341</p>
                            <p className='text-gray-400'>Members</p>
                        </div>
                    </div>
                    <div className='flex items-center  '>
                        <img src={logo} className='h-16 w-16 rounded-full mr-3' alt="" />
                        <div>
                            <p className='font-bold text-xl'>2,245,341</p>
                            <p className='text-gray-400'>Members</p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>

            </div>
            </div>

        </div>
    );
};

export default Helping;