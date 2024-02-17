import React from 'react';
import logo from "../../assets/logo/download (1).jpg";
import logo3 from "../../assets/logo/images (1).png";
import logo2 from "../../assets/logo/download.jpg";

const System = () => {


    const data = [
        {
            image: logo,
            heading: ' Membership Organisations',
            text: 'Our membership management software provides full automation of membership   '
        },
        {
            image: logo3,
            heading: '  National Associations',
            text: 'Our membership management software provides full automation of  '
        },
        {
            image: logo2,
            heading: ' Clubs And Groups',
            text: ' Our membership management software provides full automation of membership '
        },

    ]





    return (
        <div className=' mx-auto ' id='about'>

            <div className='text-center '>
                <h1 className='text-2xl md:text-4xl font-bold mb-4  max-w-2xl mx-auto mx-6'>Manage your entire community in a single system</h1>
                <p className='text-gray-500 mx-12 '>Who is Nextcent suitable for?
                </p>
            </div>

            <div className='grid grid-cols-1  md:grid-cols-3 gap-4 lg:gap-32  mt-12  place-items-center mx-12 h-96 '>

                {
                    data.map(item =>
                        <>
                            <div className='border py-4 px-4 rounded '>
                                <div className=' flex'>
                                    <img className='mx-auto rounded-full h-20 w-20' src={item.image} alt="" />
                                </div>
                                <div>
                                    <h1 className='text-2xl text-center font-bold my-2'>  {item.heading} </h1>
                                    <p className=' text-center  '> {item.text}</p>
                                </div>
                            </div>
                        </>
                    )
                }







            </div>


        </div>
    );
};

export default System;