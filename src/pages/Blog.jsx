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
import interfaceImg from "../assets/interface.png"
import blogPost from '../assets/blog-post-1.jpg'
import blogPost2 from '../assets/blog-post-2.jpg'
import arrowGray from '../assets/arrow-gray.png'
import { IoMdArrowDropright } from "react-icons/io";



const catBar = "w-[25%] bg-[#ebebeb] p-4 hidden lg:block"
const catTitle = "text-[14px] font-normal leading-[24px] uppercase"
const catLink = "text-[14px] text-[#CC6A00] leading-[24px] capitalize hover:underline"
const catBarContent = "mb-3 last:mb-0"
const galleryImg = "w-full h-[85px] object-cover"


const postWrap = 'flex flex-col gap-5 mb-5'
const postHeaderWrap = "flex flex-col md:flex-row justify-between gap-0 md:gap-5"
const postTitleWrap = "w-full md:w-[85%] flex flex-wrap items-center justify-start gap-5"
const postDate = `h-[67px] w-[78px] font-['Times_New_Roman',Times,serif] 
[&>p]:text-[#F2F2F2] 
[&>p]:text-[18px] 
[&>p]:leading-5
[&>p]:font-[800] 
[&>p]:mr-[8px] 
[&>p]: text-center
flex justify-end items-center`

const postTitleCatWrap = 'w-[69%] sm:w-[83%] md:w-[84%]'
const postTitle = "text-[18px] sm:text-[24px] font-[700] leading-[24px] uppercase font-['Times_New_Roman',Times,serif] hover:text-[#cc6a00] hover:underline"
const postCat = 'text-[#838383] text-[14px] leading-6'
const redText = "text-[#cc6a00] hover:underline text-[14px] leading-6"
const commentCount = "ml-[97px] md:ml-0 md:mt-[33px] w-auto     md:w-[13%] flex justify-start md:justify-end items-end"

const postImg = "h-[180px] sm:h-[215px] w-full"
const mainTextLink = "underline"
const twoSectionArrow = "w-full h-[15px]"



const Blog = () => {
    return (
        <div>
            <div className='flex flex-wrap justify-between items-start w-full lg:w-[1000px] gap-5 px-4 sm:px-5 md:px-5 lg:px-0 mt-8 md:mt-10 lg:mt-12 mb-10 sm:mb-15 md:mb-20'>
                {/* left */}
                <div className='w-full lg:w-[73%] '>

                    {/* post */}
                    <div className={postWrap}>
                        <div className={postHeaderWrap}>
                            <div className={postTitleWrap}>
                                <div className={postDate} style={{
                                    backgroundImage: `url(${interfaceImg})`,
                                }}>
                                    <p>Apr
                                        <br />
                                        27</p>
                                </div>

                                <div className={postTitleCatWrap}>
                                    <h1 className={postTitle}>
                                        <Link to=''>Blog Post TItle One</Link>
                                    </h1>

                                    <p className={postCat}>Posted in
                                        &nbsp;
                                        <Link className={redText} to=''>Category Title One</Link>
                                        &nbsp;
                                        by
                                        &nbsp;
                                        <Link to='' className={redText}> admin</Link></p>
                                </div>
                            </div>

                            <p className={commentCount}>
                                <Link to='' className={`${redText}`}>1 Comment</Link>
                            </p>
                        </div>

                        <img className={postImg} src={blogPost}/>

                        <p className='text-[#838383] text-[14px] leading-[24px]'>This website template has been designed by <Link className={mainTextLink} to="http://www.freewebsitetemplates.com/">Free Website Templates </Link> for you, for free. You can replace all this text with your own text.
                        
                        You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
                        
                        If you're having problems editing this website template, then don't hesitate to ask for help on the <Link className={mainTextLink} to="http://www.freewebsitetemplates.com/forums/">Forums</Link>.</p>


                        <div className={twoSectionArrow} style={{
                            backgroundImage: `url(${arrowGray})`,
                            backgroundRepeat: 'repeat-x',
                            backgroundSize: '8px 9px'
                        }}></div>
                    </div>

                    <div className={postWrap}>
                        <div className={postHeaderWrap}>
                            <div className={postTitleWrap}>
                                <div className={postDate} style={{
                                    backgroundImage: `url(${interfaceImg})`,
                                }}>
                                    <p>Apr
                                        <br />
                                        28</p>
                                </div>

                                <div className={postTitleCatWrap}>
                                    <h1 className={postTitle}>
                                        <Link to=''>Blog Post TItle Two</Link>
                                    </h1>

                                    <p className={postCat}>Posted in
                                        &nbsp;
                                        <Link className={redText} to=''>Category Title Two</Link>
                                        &nbsp;
                                        by
                                        &nbsp;
                                        <Link to='' className={redText}> admin</Link></p>
                                </div>
                            </div>

                            <p className={commentCount}>
                                <Link to='' className={`${redText}`}>0 Comment</Link>
                            </p>
                        </div>

                        <Link to='#'><img className={postImg} src={blogPost2}/></Link>

                        <p className='text-[#838383] text-[14px] leading-[24px]'>This website template has been designed by <Link className={mainTextLink} to="http://www.freewebsitetemplates.com/">Free Website Templates </Link> for you, for free. You can replace all this text with your own text.
                        
                        You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
                        
                        If you're having problems editing this website template, then don't hesitate to ask for help on the <Link className={mainTextLink} to="http://www.freewebsitetemplates.com/forums/">Forums</Link>.</p>


                        <div className={twoSectionArrow} style={{
                            backgroundImage: `url(${arrowGray})`,
                            backgroundRepeat: 'repeat-x',
                            backgroundSize: '8px 9px'
                        }}></div>
                    </div>

                    <button className="font-['Times_New_Roman',Times,serif] uppercase flex items-center justify-end w-full text-[14px] sm:text-[18px] leading-[24px] hover:text-[#cc6a00] font-[700] mt-10 sm:mt-15">Older Posts <IoMdArrowDropright className='text-[18px] sm:text-[24px]'/>
</button>
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

export default Blog