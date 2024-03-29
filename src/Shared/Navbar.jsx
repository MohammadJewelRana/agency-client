import React, { useEffect, useState } from "react";
// import img1 from "../assets/logo/s-logo-design-template-graphic-branding-element-free-vector.jpg";
// import { Link } from "react-router-dom";
import { FaArrowRight, FaBars, FaCross, FaTimesCircle } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import mainLogo from '../assets/logo/main.jpg'
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //set toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (Window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.addEventListener("scroll", handleScroll);
            };
        };
    });

    const navItems = [
        { link: "Home", path: "#home" },
        { link: "Service", path: "#service" },
        { link: "About", path: "#about" },
        { link: "Product", path: "#product" },
        // { link: "Testimonial", path: "#testimonial" },
        { link: "FAQ", path: "#faq" },
    ];
 
    return (
        <div className="bg-blue-600 ">
            <header className="w-full py-6    bg-gray-200 fixed top-0 left-0 right-0 border-b  z-10 ">
                <nav className="mx-12 flex items-center justify-between content-center ">
                    {/* logo  */}
                    <div className="flex items-center space-x-2">
                        <img className="h-12 mt-1 w-12 rounded-full" src={mainLogo} alt="" />
                        <p className="inline-block font-semibold text-2xl">NEXCENT</p>
                    </div>

                    {/* navitems  */}
                    <div className="hidden md:block">
                        <ul className="text-black text-2xl flex space-x-4 ">
                            {navItems.map((item) => (
                                <>
                                    <li className="">
                                        {/* <Link className="" to={item.path}>
                                            {item.link}
                                        </Link> */}

                                        <HashLink className=""    smooth to={item.path} >  {item.link} </HashLink>

                                        {/* <Link to={item.path}   smooth={true} offset={-100} > {item.link}</Link> */}
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>

                    {/* button  for large device*/}
                    <div className="hidden lg:block ">
                        <button className="bg-green-500 text-white py-1 px-2  rounded text-[18px] flex justify-center content-center items-center transition-all duration-300 hover:bg-green-600"> Register Now
                            <FaArrowRight className="  ml-2 text-white"> </FaArrowRight>
                        </button>
                    </div>

                    {/* small device  */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {
                                isMenuOpen ?
                                 <div >
                                  <FaTimesCircle className="text-green-600 text-3xl "></FaTimesCircle> 
                                 </div>
                                 
                                 :
                                  <FaBars className="text-green-600 text-3xl " ></FaBars>
                            }
                        </button>
                    </div>



                </nav>


                {/* nav items for mobile device  */}
                {
                    isMenuOpen &&
                    <div className="">
                        <div className=" bg-green-500 mt-8 " >

                            <ul className="text-black text-2xl   ">
                                {navItems.map((item) => (
                                    <>
                                        <li className=" text-white p-4 text-center hover:bg-green-400 transition-all duration-300">
{/*                                            
                                            <Link className="" to={item.path}>
                                                {item.link}
                                            </Link> */}
                                                       <HashLink className=""    smooth to={item.path} >  {item.link} </HashLink>

                                        </li>
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                }


            </header>

        </div>
    );
};

export default Navbar;
