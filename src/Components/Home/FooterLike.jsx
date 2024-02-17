import React from "react";
import img1 from "../../assets/home/4.jpg";
import img2 from "../../assets/home/5.jpg";

import logo from "../../assets/logo/download (1).jpg";
import log01 from "../../assets/logo/download (2).jpg";
import logo2 from "../../assets/logo/download.jpg";
import logo3 from "../../assets/logo/images (1).png";
import logo4 from "../../assets/logo/images (2).png";
import logo5 from "../../assets/logo/images (3).png";
import logo6 from "../../assets/logo/images.jpg";
import { FaArrowRight } from "react-icons/fa";
import SharedComponent from "../../Shared/SharedComponent";

const FooterLike = () => {
    const logoArray = [logo, log01, logo2, logo3, logo4, logo5, logo6];

    return (
        <>
            {/* <div className=" flex flex-col md:flex md:flex-row mx-auto place-content-center md:gap-24 gap-4 mx-8">
        <div className="flex place-content-center items">
          <img src={img1} className=" " alt="" />
        </div>

        <div className="md:w-3/5 ">
          <h1 className="text-2xl font-bold py-4">
            How to design your site footer like we did
          </h1>
          <p className="text-justify ">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>

          <button
            className="bg-green-600 px-4 py-2 my-8 text-white transition-all duration-300
                 hover:bg-green-500 rounded"
          >
            Learn More
          </button>
        </div>
      </div> */}

            <SharedComponent image={img1} heading={'  How to design your site footer like we did'}
                text={" Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,augue nec tincidunt molestie, massa nunc varius arcu, at scelerisqueelit erat a magna. Donec quis erat at libero ultrices mollis. In hachabitasse platea dictumst. Vivamus vehicula leo dui, at porta nisifacilisis finibus. In euismod augue vitae nisi ultricies, nonaliquet urna tincidunt. Integer in nisi eget nulla commodo faucibusefficitur quis massa. Praesent felis est, finibus et nisi ac,hendrerit venenatis libero. Donec consectetur faucibus ipsum idgravida."}
                path={'/service'}

            ></SharedComponent>



            <div className=" flex flex-col md:flex md:flex-row mx-auto place-content-center md:gap-24 gap-4 mx-8 my-16 bg-gray-200 py-8">
                <div className="flex place-content-center items ">
                    <img src={img2} className=" rounded" alt="" />
                </div>

                <div className="md:w-3/5 px-6">
                    <p className="text-justify ">
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                        lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
                        enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                        enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
                        at ligula molestie, nec molestie mi blandit. Suspendisse cursus
                        tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
                        eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
                        Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
                        Quisque vulputate odio neque, eget efficitur libero condimentum id.
                        Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>

                    <h1 className="text-2xl font-bold py-4">Tim Smith</h1>
                    <p className="-my-3 text-gray-400">
                        {" "}
                        British Dragon Boat Racing Association{" "}
                    </p>

                    <div className="mt-6">
                        <div className="flex gap-4 lg:gap-12 justify-center items-center">
                            <div className="flex  gap-8 lg:gap-12 flex-wrap">
                                {logoArray.map((item) => (
                                    <>
                                        <img className="h-10 rounded w-10" src={item} alt="" />
                                    </>
                                ))}
                            </div>

                            <div className="  flex ">
                                <button
                                    className="bg-green-600 px-4 py-2 my-8 text-white transition-all duration-300
                 hover:bg-green-500 rounded"
                                >
                                    {" "}
                                    Meet all customers
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

        // <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-24 mx-12 lg:mx-24'>
        //     <div className='flex place-content-center'>
        //         <img src={img1} className=' ' alt="" />
        //     </div>

        //     <div className=' '>
        //         <h1 className='text-2xl font-bold py-4'>
        //             How to design your site footer like we did

        //         </h1>
        //         <p className='text-justify '>
        //             Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
        //         </p>

        //         <button className='bg-green-600 px-4 py-2 my-8 text-white transition-all duration-300
        //          hover:bg-green-500 rounded'>Learn More</button>
        //     </div>
        // </div>
    );
};

export default FooterLike;
