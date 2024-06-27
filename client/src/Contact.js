import React from 'react'
import boxing_img from './img/President trump boxing with president obama 1.jpg'
import { Link } from 'react-router-dom'
import Footer from './Components/Footer'
function Contact() {
  return (
    <div>
        <section className="flex justify-center w-full m-[5%] mx-auto">
            <div className="lg:flex w-full mx-auto lg:mx-[10%]">
                <form className="lg:w-1/2 space-y-[10%] bg-black py-14 mx-[10%] lg:mx-auto">
                    <div className="lg:w-[27rem]  border-b-[1.5px] border-gray-400">
                        <input type="text" placeholder="Your Name" className="bg-black p-2 bg-transparent outline-none focus:border-none text-gray-400 w-full" />
                    </div>
                    <div className="lg:w-[27rem] border-b-[1.5px] border-gray-400">
                        <input type="email" placeholder="Your email" className="bg-black p-2 bg-transparent outline-none focus:border-none text-gray-400 w-full" />
                    </div>
                    <div className="lg:w-[27rem]  border-b-[1.5px] border-gray-400">
                        <input type="text" placeholder="Your thoughts" className="bg-black p-2 bg-transparent outline-none focus:border-none text-gray-400 w-full" />
                    </div>
                    <div className="flex w-full">
                        <button className="w-full "><Link className="w-full lg:w-[27rem] inline-block py-3 bg-white hover:shadow-md hover:scale-105 text-2xl px-4 rounded-md">SHARE YOUR THOUGHTS</Link></button>
                    </div>
                </form>
                <div className="lg:w-1/2 flex mx-[10%] ">
                    <div className="w-full lg:w-[25rem] h-[30rem] object-cover">
                        <img src={boxing_img} className="w-full lg:w-[25rem] h-[30rem] object-cover" alt='Img' />
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default Contact