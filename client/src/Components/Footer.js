import React from 'react'
import { Link } from "react-router-dom";
import vector_img from '../img/Vector.jpg' 

function Footer() {
  return (
    <div>
        <section> 
            <footer className="text-white body-font bg-[#000] w-auto" >
                <div className=" lg:flex justify-between items-center w-full align-middle mx-10">
                    <div className="mx-5 py-4 w-full md:w-[40%]">
                        <Link to="/" ><img className="h-auto w-10" src={vector_img} alt='logo' />ImageCheckAI</Link>
                        <h1>Detecting Reality Online</h1>                  
                    </div>
                    <div className="container px-5 py-2 pb-12 lg:py-24 text-white">
                        <div className="flex flex-wrap md:text-left text-center -mb-5 -mx-4">
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-white tracking-wider text-lg mb-3">ABOUT US</h2>
                                <nav className="list-none mb-5 text-lg space-y-4">
                                    <li>
                                        <Link to="/" className="text-white hover:text-[#8c27ff]" >Our Mission</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-white hover:text-[#8c27ff]">Our Vision</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-white hover:text-[#8c27ff]">Join Us</Link>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-white tracking-wider text-lg mb-3">INDUSTRIES</h2>
                                <nav className="list-none space-y-4 text-lg mb-5">
                                    <li>
                                    <Link to="/" className="text-white hover:text-[#8c27ff]">Quick Analysis</Link>
                                    </li>
                                    <li>
                                    <Link to="/" className="text-white hover:text-[#8c27ff]">Bulk uploads</Link>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-white tracking-wider text-lg mb-3">CONNECT</h2>
                                <nav className="list-none mb-5 text-lg space-y-4">
                                    <li>
                                    <Link to="/" className="text-white hover:text-[#8c27ff]">@checkImageAI</Link>
                                    </li>
                                    <li>
                                    <Link to="/" className="text-white hover:text-[#8c27ff]">@checkImageAIgram</Link>
                                    </li>
                                    <li>
                                    <Link to="/" className="text-white hover:text-[#8c27ff]">Email: info @4th-ir.com</Link>
                                    </li>
                                </nav>
                                <div className="flex justify-center md:justify-start space-x-5 mx-4">
                                    <Link to="/" className="text-[#003145] p-3 bg-white hover:bg-[#8c27ff] rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M 18 2 h -3 a 5 5 0 0 0 -5 5 v 3 H 7 v 4 h 3 v 8 h 4 v -8 h 3 l 1 -4 h -4 V 7 a 1 1 0 0 1 1 -1 h 3 Z" />
                                        </svg>
                                    </Link>
                                    <Link to="/" className="text-[#003145] p-3 bg-white hover:bg-[#8c27ff] rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M 23 3 a 10.9 10.9 0 0 1 -3.14 1.53 a 4.48 4.48 0 0 0 -7.86 3 v 1 A 10.66 10.66 0 0 1 3 4 s -4 9 5 13 a 11.64 11.64 0 0 1 -7 2 c 9 5 20 0 20 -11.5 a 4.5 4.5 0 0 0 -0.08 -0.83 A 7.72 7.72 0 0 0 23 3 Z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#001d29] text-center font-normal text-lg py-6">
                    <p className="my-2 hover:text-[#8c27ff]">Privacy Policy</p>
                    <p>©2024 ImageCheckAI ft De-Gen. All Rights Reserved</p>
                </div>
            </footer>
        </section>
    </div>
  )
}

export default Footer