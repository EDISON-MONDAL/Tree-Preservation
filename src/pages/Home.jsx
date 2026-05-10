import React from 'react'
import bgFeatured from '../assets/bg-featured.png'
import bgFeaturedImage from '../assets/bg-featured.jpg'
import bgPattarn from '../assets/bg-body.jpg'
import helpOut from '../assets/help-out.jpg'
import whatWeDo from '../assets/what-we-do.jpg'
import arrowGray from '../assets/arrow-gray.png'
import { Link } from 'react-router'
import topPrograms from '../assets/top-program1.jpg'
import topPrograms2 from '../assets/top-program2.jpg'
import blogPost1 from '../assets/blog-post1.jpg'
import blogPost2 from '../assets/blog-post2.jpg'

const twoSectionColumn = "w-full sm:w-1/2 h-[210px] md:h-[270px] lg:h-[290px] relative"
const imgClass =
    "w-full h-[120px] sm:h-[120px] md:h-[160px] lg:h-[200px] object-cover";
const twoSectionParagraph = "text-[#838383] text-[12px]  md:text-[14px] sm:leading-[18px] md:leading-[24px] lg:leading-[24px] mt-2"
const twoSectionArrow = "w-full h-[15px] absolute bottom-0"

const multiColumnTitle = "text-[16px] md:text-[20px] font-normal leading-[24px] font-['Times_New_Roman',Times,serif] uppercase"

const topProgramImg = "w-full h-[148px] object-cover"
const topProgramBlogTitle = "uppercase text-[12px] md:text-[14px] font-normal leading-[24px] mt-2"
const recentPostImg = "w-[95px] h-[95px] object-cover"
const recentBlogTitle = "uppercase text-[12px] md:text-[14px] font-normal"
const topProgramBlogText = "text-[12px] md:text-[14px] leading-[24px] text-[#838383] mt-1"
const readMoreButton = "uppercase text-[#cc6a00]"
const recentBlogRow = "flex gap-4 border-b border-gray-300 pb-4 last:border-b-0"


const Home = () => {
    return (
        <div  className='w-full flex flex-col items-center justify-center'          >

            {/* Featured Section */}
            <div className='w-full h-[140px] sm:h-[260px] md:h-[317px] lg:h-[396px] flex justify-center' style={{
                backgroundImage: `url(${bgFeatured})`,
                backgroundRepeat: 'repeat-x',
            }}>
                <div className="w-full lg:w-[1000px] h-full px-4 sm:px-5 md:px-5 lg:px-0 text-white font-rokkitt"
                    style={{
                        backgroundImage: `url(${bgFeaturedImage})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'repeat-x',
                        backgroundPositionX: 'left',
                    }}>
                    <div className="flex flex-col justify-start h-full ml-5 sm:ml-10 md:ml-15 lg:ml-22">
                        <p className='text-[12px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[14px] sm:leading-[22px] md:leading-[26px] lg:leading-[30px] mt-2 sm:mt-4 md:mt-6 lg:mt-8'>As The Saying Goes..
                            <br />
                            You Don’t Know What You’ve Got
                            <br />
                            ‘Till It’s Gone.</p>

                        <h2 className='text-[14px] sm:text-[24px] md:text-[26px] lg:text-[36px] leading-[8px] sm:leading-[14px] md:leading-[18px] lg:leading-[24px] font-[400] mt-2 sm:mt-4 md:mt-6 lg:mt-8'>Plant A Tree.
                            <br />
                            <br />
                            Grow A Tree.
                            <br />
                            <br />
                            <span className='text-[14px] sm:text-[28px] md:text-[34px] lg:text-[48px] text-[#fff600] leading-[16px] sm:leading-[28px] md:leading-[30px] lg:leading-[30px]'>Save The Future.</span>
                        </h2>


                    </div>
                </div>
            </div>

            <div className="w-full lg:w-[1000px] px-4 sm:px-5 md:px-5 lg:px-0" >

                {/* You can help out */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className={twoSectionColumn}>
                        <img src={helpOut} alt="You can help out" className={imgClass} />

                        <p className={twoSectionParagraph}>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.</p>

                        <div className={twoSectionArrow} style={{
                            backgroundImage: `url(${arrowGray})`,
                            backgroundRepeat: 'repeat-x',
                            backgroundSize: '8px 9px'
                        }}></div>
                    </div>
                    <div className={twoSectionColumn}>
                        <img src={whatWeDo} alt="What we do" className={imgClass} />

                        <p className={twoSectionParagraph}>You can remove any link to our website from this website template, you're free to use this website template without linking back to us.</p>

                        <div className={twoSectionArrow} style={{
                            backgroundImage: `url(${arrowGray})`,
                            backgroundRepeat: 'repeat-x',
                            backgroundSize: '8px 9px'
                        }}></div>
                    </div>
                </div>

                {/* two column with nested column */}
                <div className="w-full flex flex-col md:flex-row gap-4  mt-8">
                    {/* left */}
                    <div className='w-full md:w-1/2'>
                        <Link
                            to="/programs"
                            className={multiColumnTitle}
                        >
                            Top Programs
                        </Link>

                        <div className="flex gap-4  mt-4">
                            <div className='w-1/2'>
                                <img src={topPrograms} className={topProgramImg} />

                                <h4 className={topProgramBlogTitle}>Tree Planting</h4>

                                <p className={topProgramBlogText}>If you're having problems editing this website template.</p>
                            </div>
                            <div className='w-1/2'>
                                <img src={topPrograms2} className={topProgramImg} />

                                <h4 className={topProgramBlogTitle}>Paper Recycling</h4>

                                <p className={topProgramBlogText}>Then don't hesitate to ask for help on the.</p>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className='w-full md:w-1/2'>
                        <Link
                            to="/blog"
                            className={multiColumnTitle}
                        >
                            Recent Blog Posts
                        </Link>

                        <div className="flex flex-col gap-4 mt-4">
                            <div className={recentBlogRow}>
                                <img src={blogPost1} className={recentPostImg} />

                                <div>
                                    <h4 className={recentBlogTitle}>Blog Post Title One</h4>

                                    <p className={topProgramBlogText}>You're free to use this website template without linking back to us.If you're having problems editing this website template, then don't hesitate to ask for help on the Forums... <a href="#" className={readMoreButton}>Read More</a></p>
                                </div>
                            </div>

                            <div className={recentBlogRow}>
                                <img src={blogPost2} className={recentPostImg} />

                                <div>
                                    <h4 className={recentBlogTitle}>Blog Post Title Two</h4>

                                    <p className={topProgramBlogText}>You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms of Use. You can even remove all our... <a href="#" className={readMoreButton}>Read More</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home