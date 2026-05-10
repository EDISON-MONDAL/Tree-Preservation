import React from 'react'
import { Link } from 'react-router';
import galleryThumb from '../assets/gallery-thumb1.jpg'
import galleryThumb2 from '../assets/gallery-thumb2.jpg'
import galleryThumb3 from '../assets/gallery-thumb3.jpg'
import galleryThumb4 from '../assets/gallery-thumb4.jpg'
import galleryThumb5 from '../assets/gallery-thumb5.jpg'
import galleryThumb6 from '../assets/gallery-thumb6.jpg'
import treePlanting from '../assets/tree-planting.jpg'
import paperRecycling from '../assets/paper-recycling.jpg'
import eartAppreciation from '../assets/earth-appreciation.jpg'
import treePlanting2 from '../assets/tree-planting2.jpg'

const catBar = "w-[25%] bg-[#ebebeb] p-4 hidden lg:block"
const catTitle = "text-[14px] font-normal leading-[24px] uppercase"
const catLink = "text-[14px] text-[#CC6A00] leading-[24px] capitalize hover:underline"
const catBarContent = "mb-3 last:mb-0"
const galleryImg = "w-full h-[85px] object-cover"

const title = "text-[20px] font-[700] leading-[24px] font-['Times_New_Roman',Times,serif] uppercase"
const mainLeftImgWrap = "w-[100%] sm:w-[32%] md:w-full"
const mainLeftImg = "w-full h-[180px]"
const mainLeftLink = "text-[14px] md:text-[18px] font-[600] leading-[45px] md:leading-[58px] text-center bg-[#cc6a00] block w-full uppercase text-white font-['Times_New_Roman',Times,serif]"
const mainTextLink = "underline"



const Programs = () => {
    return (
        <div>
            <div className='flex flex-wrap justify-between items-start w-full lg:w-[1000px] gap-5 px-4 sm:px-5 md:px-5 lg:px-0 mt-8 md:mt-10 lg:mt-12 mb-10 sm:mb-15 md:mb-20'>
                {/* left */}
                <div className='w-full lg:w-[73%] '>
                    <h1 className={title}>Our Programs</h1>

                    <div className='flex flex-wrap justify-between items-start gap-5 mt-5'>

                        {/* main left */}
                        <div className='w-full md:w-[30%] grid grid-cols-2 sm:flex sm:flex-wrap sm:flex-row md:flex-col justify-between items-start md:items-center gap-2 md:gap-0'>
                            <div className={mainLeftImgWrap}>
                                <img src={treePlanting} className={mainLeftImg} />
                                <Link to="#" className={mainLeftLink}>Tree Planting</Link>
                            </div>

                            <div className={mainLeftImgWrap}>
                                <img src={paperRecycling} className={mainLeftImg} />
                                <Link to="#" className={mainLeftLink}>Paper Recycling</Link>
                            </div>

                            <div className={mainLeftImgWrap}>
                                <img src={eartAppreciation} className={mainLeftImg} />
                                <Link to="#" className={mainLeftLink}>Earth Appreciation</Link>
                            </div>
                        </div>

                        {/* main right */}
                        <div className='md:w-[67%]'>
                            <h2 className={title}>Tree Planting</h2>

                            <div className='mt-5'>
                                <img src={treePlanting2} className='w-full h-[275px] object-cover' />

                                <p className='text-[#838383] text-[14px] leading-[24px] mt-5'>This website template has been designed by <Link className={mainTextLink} to="http://www.freewebsitetemplates.com/">Free Website Templates </Link> for you, for free. You can replace all this text with your own text.

                                    You can remove any link to our website from this website template, you're free to use this website template without linking back to us.

                                    If you're having problems editing this website template, then don't hesitate to ask for help on the <Link className={mainTextLink} to="http://www.freewebsitetemplates.com/forums/">Forums</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* categories */}
                <div className={catBar}>
                    <div className={catBarContent}>
                        <h3 className={catTitle}>Categories</h3>

                        <div>
                            <Link className={catLink} to="#" >Category Title One</Link><br />
                            <Link className={catLink} to="#" >Category Title Two</Link><br />
                            <Link className={catLink} to="#" >Category Title Three</Link>
                        </div>
                    </div>

                    <div className={catBarContent}>
                        <h3 className={catTitle}>Recent Blog Posts</h3>

                        <div>
                            <Link className={catLink} to="#" >Blog Posts Title One</Link><br />
                            <Link className={catLink} to="#" >Blog Posts Title Two</Link><br />
                            <Link className={catLink} to="#" >Blog Posts Title Three</Link>
                        </div>
                    </div>

                    <div className={catBarContent}>
                        <h3 className={catTitle}>Archives</h3>

                        <div>
                            <Link className={catLink} to="#" >March 2026</Link><br />
                            <Link className={catLink} to="#" >February 2026</Link><br />
                            <Link className={catLink} to="#" >January 2026</Link><br />
                            <Link className={catLink} to="#" >December 2026</Link><br />
                            <Link className={catLink} to="#" >November 2026</Link>
                        </div>
                    </div>

                    <div className={catBarContent}>
                        <h3 className={catTitle}>From The Gallery</h3>

                        <div className='grid grid-cols-2 gap-4 mt-4'>
                            <Link to="#"><img className={galleryImg} src={galleryThumb} alt="gallery image" /></Link>
                            <Link to="#"><img className={galleryImg} src={galleryThumb2} alt="gallery image" /></Link>
                            <Link to="#"><img className={galleryImg} src={galleryThumb3} alt="gallery image" /></Link>
                            <Link to="#"><img className={galleryImg} src={galleryThumb4} alt="gallery image" /></Link>
                            <Link to="#"><img className={galleryImg} src={galleryThumb5} alt="gallery image" /></Link>
                            <Link to="#"><img className={galleryImg} src={galleryThumb6} alt="gallery image" /></Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Programs