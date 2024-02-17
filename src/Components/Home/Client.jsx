import React from 'react';
import image1 from '../../assets/logo/s-logo-design-template-graphic-branding-element-free-vector.jpg'
import image2 from '../../assets/logo/s-logo-design-template-graphic-branding-element-free-vector.jpg'
import image3 from '../../assets/logo/s-logo-design-template-graphic-branding-element-free-vector.jpg'
import image4 from '../../assets/logo/s-logo-design-template-graphic-branding-element-free-vector.jpg'
import image5 from '../../assets/logo/s-logo-design-template-graphic-branding-element-free-vector.jpg'
import image6 from '../../assets/logo/s-logo-design-template-graphic-branding-element-free-vector.jpg'
import image7 from '../../assets/logo/s-logo-design-template-graphic-branding-element-free-vector.jpg'


import logo from "../../assets/logo/download (1).jpg";
import log01 from "../../assets/logo/download (2).jpg";
import logo2 from "../../assets/logo/download.jpg";
import logo3 from "../../assets/logo/images (1).png";
import logo4 from "../../assets/logo/images (2).png";
import logo5 from "../../assets/logo/images (3).png";
import logo6 from "../../assets/logo/images.jpg";


const Client = () => {

    const imageArray = [image1, image2, image3, image4, image5, image6, image7]
    // console.log(imageArray);


    const logoArray = [logo, log01, logo2, logo3, logo4, logo5, logo6];

    return (
        <div className='my-24' id='service'>

            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-2'>Our Clients</h1>
                <p className='text-gray-500 mx-12 '>We have been working with some fortune  <span className='text-red-600 text-xl mx-2'>500+</span> clients </p>
            </div>

            <div className='grid grid-cols-4 md:grid-cols-7 gap-4 mt-12 place-items-center mx-4 '>
                {
                    logoArray.map(item =>

                        <div className=' '>
                            <img className='h-20 w-20 rounded-full ' src={item} alt="" />

                        </div>

                    )
                }
            </div>


        </div>
    );
};

export default Client;