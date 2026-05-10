import React from 'react'
import greenCircle from '../assets/green-circle.png'
import yellowCircle from '../assets/yellow-circle.png'
import blueCircle from '../assets/blue-circle.png'
import brownCircle from '../assets/brown-circle.png'


const col = "sm:w-[48%] md:w-[31%] lg:w-1/4"
const colTitle = " text-center md:text-[16px] text-[18px] leading-[24px] uppercase text-white font-['Times_New_Roman'] font-[800]"
const colImgContainer = "w-full h-[225px] flex justify-center items-center  bg-contain bg-center "
const colText = "text-[14px] leading-[24px] text-[#838383] mt-5"
const lastColText = "mt-5"

const About = () => {
    return (

        <div className='lg:w-[1000px] px-4 sm:px-5 md:px-5 lg:px-0 bg-transparent '>

            <h2 className="text-[#404040] text-[20px] font-[800] leading-[24px] uppercase font-['Times_New_Roman'] mt-6">About</h2>

            <div className='flex flex-wrap lg:flex-nowrap justify-between items-start gap-5 mt-6 mb-20 md:mb-40'>
                <div className={col}>
                    <div className={colImgContainer}
                        style={{
                            backgroundImage: `url(${greenCircle})`,
                            backgroundRepeat: 'no-repeat',
                        }}
                    ><h3 className={colTitle}>
                            We Have Free <br />
                            Templates <br />
                            for Everyone</h3>
                    </div>

                    <div className={colText}>
                        <p>Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms of Use. You can even remove all our links if you want to.</p>
                    </div>
                </div>


                <div className={col}>
                    <div className={colImgContainer}
                        style={{
                            backgroundImage: `url(${yellowCircle})`,
                            backgroundRepeat: 'no-repeat',
                        }}
                    ><h3 className={colTitle}>
                            We Have More <br />
                            Templates <br />
                            for You</h3>
                    </div>

                    <div className={colText}>
                        <p>Looking for more templates? Just browse through all our Free Website Templates and find what you’re looking for. But if you don’t find any website template you can use, you can try our Free Web Design service and tell us all about it. Maybe you’re looking for something diferent, something special. And we love the challenge of doing something diferent and something special.</p>
                    </div>
                </div>

                <div className={col}>
                    <div className={colImgContainer}
                        style={{
                            backgroundImage: `url(${blueCircle})`,
                            backgroundRepeat: 'no-repeat',
                        }}
                    ><h3 className={colTitle}>
                            Be Part of Our <br />
                            Community</h3>
                    </div>

                    <div className={colText}>
                        <p>If you're experiencing issues and concerns about this website template, join the discussion Forums. and meet other people in the community who share the same inetersts with you.</p>
                    </div>
                </div>

                <div className={col}>
                    <div className={colImgContainer}
                        style={{
                            backgroundImage: `url(${brownCircle})`,
                            backgroundRepeat: 'no-repeat',
                        }}
                    ><h3 className={colTitle}>
                            Template <br />
                            details</h3>
                    </div>

                    <div className={colText}>

                        <div>
                            <p>Design version 4</p>
                            <p>Code version 2</p>
                        </div>

                        <p  className={lastColText}>Website Template details, discussion and updates for this World Tree Preservation Website Template.</p>

                        <p className={lastColText}>Website Template design by Free Website Templates.</p>

                        <p className={lastColText}>Please feel free to remove some or all the text and links of this page and replace it with your own About content.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About