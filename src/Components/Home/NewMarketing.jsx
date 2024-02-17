import React from 'react';
import img1 from '../../assets/home/pexels-cadomaestro-1170412.jpg'
import img2 from '../../assets/home/pexels-thisisengineering-3861958.jpg'
import img3 from '../../assets/home/working-people.jpg'

const NewMarketing = () => {

    const data = [
        {
            image: img1,
            text: 'Creating Streamlined Safeguarding Processes with OneRen '
        },
        {
            image: img2,
            text: 'What are your safeguarding responsibilities and how can you manage them?'
        },
        {
            image: img3,
            text: 'Revamping the Membership Model with Triathlon Australia '
        },
    ]



    return (
        <div className='my-24' id='faq' 
            
     >

            <div className='text-center mx-4'>
                <h1 className='text-4xl font-bold mb-4  max-w-2xl mx-auto m'>Caring is the new marketing</h1>
                <p className='text-gray-500 mx-12 max-w-2xl mx-auto'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
                </p>
            </div>




            <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto items-center  place-items-center mx-4'>

                {
                    data.map(item =>
                        <>
                            <div>
                                <div className='    '>
                                    <img src={item.image} className='h-64 w-96 rounded' alt="" />
                                </div>
                              
                              
                                <div className='border bg-slate-200 w-80  py-2 px-4 text-center  relative ml-8 left-0 right-0 bottom-14 h-32 shadow-lg mx-4'>
                                    <p> {item.text}</p>

                                    <div className='flex items-center gap-4 justify-center hover:cursor-pointer'>
                                        <p className='text-green-600 text-2xl  rounded '>Readmore</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-2 ml-2 text-green-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                    </div>


                                </div>
                            </div>


                        </>)
                }
            </div>




        </div>
    );
};

export default NewMarketing;