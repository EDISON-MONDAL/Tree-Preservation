import React, { useState } from 'react'

import phone from '../assets/icon-phone.png'
import email from '../assets/icon-email.png'
import address from '../assets/icon-address.png'
import { Link } from 'react-router'
import arrowGray from '../assets/arrow-gray.png'
import buttons from '../assets/buttons.png'



const title = "w-full text-[20px] font-[700] leading-[24px] font-['Times_New_Roman',Times,serif] uppercase"
const footerFirstColDiv = "flex items-start gap-2 "
const footerFirstColIcon = "w-[12px] h-[10px] inline-block mt-2"
const footerText = "text-[13px] text-[#838383] leading-[24px]"
const sectionTitle = "text-[14px] font-normal leading-[24px] uppercase"
const twoSectionArrow = "w-full h-[15px]"

const formSet = ` 

[&_label]:text-[14px] 
[&_label]:leading-[24px] 
[&_label]:uppercase

[&_textarea]:w-full
sm:[&_textarea]:w-[440px]
[&_textarea]:h-[115px]
  [&_textarea]:text-[12px]
  [&_textarea]:border
  [&_textarea]:border-[#d5d5d5]
  [&_textarea]:text-[#838383]
  [&_textarea]:cursor-text
  [&_textarea]:bg-white
  [&_textarea]:p-[5px]
  
  
  `
const fieldWrap = `w-full flex flex-col 
[&_input]:w-full
sm:[&_input]:w-[209px]
[&_input]:text-[12px]
[&_input]:border
[&_input]:border-[#d5d5d5]
[&_input]:text-[#838383]
[&_input]:cursor-text
[&_input]:cursor-text
[&_input]:bg-white
[&_input]:p-[5px]   
[&_input]:mt-[10px]   

 
`

const fieldGroup = "w-full sm:w-[450px] flex flex-wrap sm:gap-5  mt-5 first:mt-0"


const Contact = () => {
    const [submitHover, setSubmitHover] = useState(false);

    return (
        <div className='lg:w-[1000px] px-4 sm:px-5 md:px-5 lg:px-0 bg-transparent text-[#404040] mt-8 md:mt-10 lg:mt-12 mb-10 sm:mb-15 md:mb-20' >

            <div className='flex flex-wrap justify-between items-start gap-7 md:gap-5'>
                {/* left */}
                <div className='w-full md:w-[30%] lg:w-[20%]'>
                    <h1 className={title}>Contact</h1>

                    <div className='bg-[#ebebeb] p-4 flex flex-col gap-5 border-[1px] border-[#d5d5d5] mt-7'>
                        <div>
                            <h3 className={sectionTitle}>Contact Us</h3>

                            <p className="text-[#838383] text-[14px] leading-[24px] mt-1">For further inquiries, help or suggestions. You may contact us through the following</p>
                        </div>

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

                {/* main */}
                <div className='md:w-[67%] lg:w-[78%]'>
                    <h2 className={title}>Send Us A Message</h2>

                    <div className='mt-7 flex flex-col gap-7'>

                        <p className="text-[#838383] text-[14px] leading-[24px]">This website template has been designed by <Link to='http://www.freewebsitetemplates.com/'>Free Website Templates</Link> for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the <Link to="http://www.freewebsitetemplates.com/forums/">Forums.</Link></p>


                        <div className={twoSectionArrow} style={{
                            backgroundImage: `url(${arrowGray})`,
                            backgroundRepeat: 'repeat-x',
                            backgroundSize: '8px 9px'
                        }}></div>


                        <form className={formSet}>

                            <div className={fieldGroup}>
                                <div className='w-full sm:w-[440px] grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-5'>
                                    <div className={fieldWrap}>
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" id="firstName" name="firstName" />
                                    </div>

                                    <div className={fieldWrap}>
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" id="lastName" name="lastName" />
                                    </div>

                                    <div className={fieldWrap}>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" />
                                    </div>

                                    <div className={fieldWrap}>
                                        <label htmlFor="retypeEmail">Retype Email Address</label>
                                        <input type="email" id="retypeEmail" name="retypeEmail" />
                                    </div>

                                    <div className={fieldWrap}>
                                        <label htmlFor="subject">Subject</label>
                                        <input type="text" id="subject" name="subject" />
                                    </div>
                                </div>
                            </div>

                            <div className={`${fieldGroup} flex-col !gap-3`}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message"></textarea>
                            </div>

                            <div className={fieldGroup}>
                                <button type="submit" onMouseEnter={() => setSubmitHover(true)}
                                onMouseLeave={() => setSubmitHover(false)}

                                className='h-[41px] w-[190px]'
                                
                                style={{
                                        backgroundImage: `url(${buttons})`,
                                        backgroundPosition: submitHover ? "0px 0px" : "0px 0px",
                                    }}></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact