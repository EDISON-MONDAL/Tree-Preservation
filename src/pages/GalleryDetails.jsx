import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

import galleryPhoto from "../assets/gallery-photo-detail.jpg"
import arrowGray from '../assets/arrow-gray.png'
import { Link } from 'react-router';
import buttonImg from '../assets/buttons.png'




const title = "w-full md:w-[50%] text-[20px] font-[700] leading-[24px] font-['Times_New_Roman',Times,serif] uppercase"
const paginationList = "flex items-center "
const paginationButton = "flex items-center hover:text-[#cc6a00] hover:[&>span]:text-[#404040] cursor-pointer"
const galleryImg = "h-[350px] md:h-[500px] w-full md:w-[50%] object-fill"
const twoSectionArrow = "w-full h-[15px]"





const GalleryDetails = () => {
    return (
        <div className='w-full lg:w-[1000px] flex flex-col justify-start items-start px-4 sm:px-5 md:px-5 lg:px-0 mt-8 md:mt-10 lg:mt-12 mb-10 sm:mb-15 md:mb-20 text-[#404040]'>

            {/* title & pagination */}
            <div className='w-full flex flex-col md:flex-row justify-between items-center gap-5'>
                <h1 className={title}>Gallery</h1>

                {/* pagination */}
                <ul className='w-full md:w[50%] flex justify-center md:justify-end items-center gap-3 text-[10px] sm:text-[14px] leading-[14px] sm:leading-[18px]'>
                    <li className={paginationList}>
                        <button className={paginationButton}>
                            <IoMdArrowDropleft className='text-[18px] sm:text-[24px] mt-[2px]' />
                            &nbsp;
                            Previous
                            &nbsp;
                            <span>|</span>
                        </button>
                    </li>
                    <li className={paginationList}>
                        <button className={paginationButton}>RETURN TO GALLERY
                            &nbsp;
                            <span>|</span>
                        </button>
                    </li>
                    <li className={paginationList}>
                        <button className={paginationButton}>Next
                            &nbsp;
                            <IoMdArrowDropright className='text-[18px] sm:text-[24px] mt-[2px]' />
                        </button>
                    </li>
                </ul>
            </div>

            {/* main */}
            <div className='flex flex-col md:flex-row flex-wrap justify-between items-start gap-5 mt-8'>
                <img className={galleryImg} src={galleryPhoto} />

                <div className='w-full md:w-[47%] lg:w-[48%] flex flex-col gap-5'>
                    <h2 className={`${title} !w-full`}>Photo TItle One</h2>

                    <div className={twoSectionArrow} style={{
                        backgroundImage: `url(${arrowGray})`,
                        backgroundRepeat: 'repeat-x',
                        backgroundSize: '8px 9px'
                    }}></div>


                    <p className='text-[#838383] text-sm leading-6'>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.

                        <br />
                        <br />

                        You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
                        <br />
                        <br />
                        If you're having problems editing this website template, then don't hesitate to ask for help on the
                        &nbsp;
                        <Link className='underline' to='http://www.freewebsitetemplates.com/forums/'>Forums.</Link>
                    </p>

                    <button className='h-[41px] w-[189px] cursor-pointer' style={{
                        backgroundImage: `url(${buttonImg})`,
                        backgroundPosition: '0px -40px'
                    }}></button>
                </div>
            </div>
        </div>
    )
}

export default GalleryDetails