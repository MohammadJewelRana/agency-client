import React from 'react';

const Bannner = () => {
    return (
        <div className='mt-24'>

            <div className='bg-pink-50 p-8   '>
                <h1 className=' text-5xl font-bold  max-w-xl mx-auto text-center mb-10'>Pellentesque suscipit fringilla libero eu.</h1>


                <div className='flex items-center gap-4 justify-center hover:cursor-pointer'>
                    <button  className='bg-green-600 py-2 text-white px-8 text-2xl  rounded flex'>Get a Demo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-2 ml-2 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                    
                    </button>
                     
                </div>

            </div>
        </div>
    );
};

export default Bannner;