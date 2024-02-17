import React from 'react';
import { Link } from 'react-router-dom';

const SharedComponent = ({ image, heading, text, path }) => {


    return (

        <div className=" flex flex-col md:flex md:flex-row mx-auto place-content-center md:gap-24 gap-4 mx-11 md:mx-10  mt-36  md:mt-12" id={path}>
            <div className="flex place-content-center items">
                <img src={image} className=" " alt="" />
            </div>

            <div className="md:w-3/5 ">
                <h1 className="text-2xl font-bold py-4">
                    {heading}
                </h1>
                <p className="text-justify ">
                    {text}
                </p>
                <Link to={path}>

                    <button
                        className="bg-green-600 px-4 py-2 my-8 text-white transition-all duration-300
                 hover:bg-green-500 rounded"
                    >
                        Learn More
                    </button>
                </Link>
            </div>
        </div>





    );
};

export default SharedComponent;