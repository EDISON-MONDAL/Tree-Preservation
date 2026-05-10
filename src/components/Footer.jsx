import React, { useState } from 'react'
import phone from '../assets/icon-phone.png'
import email from '../assets/icon-email.png'
import address from '../assets/icon-address.png'
import icons from '../assets/icons.png'
import interfaceLogo from '../assets/interface.png'
import footerBg from '../assets/bg-footer.jpg'

const footerCol = "h-full flex flex-col justify-start items-center sm:items-start"
const footerColContent = "h-full flex flex-col justify-between items-center sm:items-start mt-4"
const footerFirstColIcon = "w-[12px] h-[10px] inline-block mt-2"
const footerFirstColDiv = "flex items-start gap-2 "
const footerColTitle = "text-[13px] font-normal leading-[24px] uppercase"
const footerText = "text-[13px] text-[#838383] leading-[24px]"
const socialIcon = "w-[13px] h-[13px] bg-no-repeat mt-2"


const Footer = () => {
    const [tweetHover, setTweetHover] = useState(false);
    const [fbHover, setFbHover] = useState(false);
    const [gHover, setGHover] = useState(false);
    const [submitNewsletter, setSubmitNewsletter] = useState(false);

    return (
        <div
            className="w-full h-[360px] sm:h-[205px] md:h-[250px] bg-repeat flex justify-center items-center bg-[length:100px_410px] sm:bg-[length:100px_230px] md:bg-[length:100px_285px] "
            style={{
                backgroundImage: `url(${footerBg})`,
                backgroundRepeat: 'repeat',
            }}
        >
            <div className="w-full h-[320px] sm:h-[170px] md:h-[220px] lg:w-[1000px] flex flex-col sm:flex-row justify-between items-start gap-4 px-4 sm:px-5 md:px-5 lg:px-0  mt-4 sm:mt-3 ">
                {/* column 1 */}
                <div className={`${footerCol} w-full sm:w-1/2 md:w-1/4`}>
                    <h3 className={footerColTitle}>24 hour customer service</h3>

                    <div className={footerColContent}>
                        <div className={footerFirstColDiv}>
                            <img src={phone} alt="phone" className={footerFirstColIcon} />

                            <div>
                                <p className={footerText}>01916 175151</p>
                                <p className={footerText}>01916 175151</p>
                            </div>
                        </div>

                        <div className={footerFirstColDiv}>
                            <img src={email} alt="email" className={footerFirstColIcon} />

                            <div>
                                <p className={footerText}>mondaledison@gmail.com</p>
                            </div>
                        </div>

                        <div className={footerFirstColDiv}>
                            <img src={address} alt="address" className={footerFirstColIcon} />

                            <div>
                                <p className={footerText}>Khutakhali Bazar, Bajua, Dacope, Khulna</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* column 2 */}
                <div className={`${footerCol} md:w-2/4 hidden md:flex`}>
                    <h3 className={footerColTitle}>Recent Tweets</h3>

                    <div className={footerColContent}>
                        <div>
                            <p className={footerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla elementum magna.
                                <br />
                                <p>- <span>1 day ago</span></p>
                            </p>
                        </div>

                        <div>
                            <p className={footerText}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
                                <br />
                                <p>- <span>2 days ago</span></p>
                            </p>
                        </div>
                    </div>
                </div>

                {/* column 3 */}
                <div className={`${footerCol} w-full sm:w-1/2 md:w-1/4`}>
                    <h3 className={footerColTitle}>Get in touch with us</h3>

                    <div className={footerColContent}>
                        <div>
                            <div className={footerFirstColDiv} onMouseEnter={() => setFbHover(true)}
                                onMouseLeave={() => setFbHover(false)}>
                                <div
                                    className={socialIcon}
                                    style={{
                                        backgroundImage: `url(${icons})`,
                                        backgroundPosition: fbHover ? "0px -90px" : "0px -35px",
                                    }}
                                />

                                <p className={footerText}>Facebook</p>
                            </div>

                            <div className={footerFirstColDiv} onMouseEnter={() => setTweetHover(true)}
                                onMouseLeave={() => setTweetHover(false)}
                            >

                                <div
                                    className={socialIcon}
                                    style={{
                                        backgroundImage: `url(${icons})`,
                                        backgroundPosition: tweetHover ? "0px -72px" : "0px 0px",
                                    }}
                                />


                                <p className={footerText}>Twitter</p>
                            </div>

                            <div className={footerFirstColDiv} onMouseEnter={() => setGHover(true)}
                                onMouseLeave={() => setGHover(false)}>

                                <div
                                    className={socialIcon}
                                    style={{
                                        backgroundImage: `url(${icons})`,
                                        backgroundPosition: gHover ? "0px -54px" : "0px -18px",
                                    }}
                                />

                                <p className={footerText}>Google+</p>
                            </div>
                        </div>

                        <div>
                            <h3 className={footerColTitle}>Newsletter Signup</h3>

                            <div className='w-[182px] h-[26px] flex justify-between items-center ' style={{
                                backgroundImage: `url(${interfaceLogo})`,
                                backgroundPosition: submitNewsletter ? "-78px -27px" : "-78px 0px",
                            }}>

                                <input className='bg-transparent w-[85%] h-full text-[13px] pl-[5px]' type="email" placeholder='Enter your email' />
                                <button className='cursor-pointer w-[15%] h-full'
                                    onMouseEnter={() => setSubmitNewsletter(true)}
                                    onMouseLeave={() => setSubmitNewsletter(false)}></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer