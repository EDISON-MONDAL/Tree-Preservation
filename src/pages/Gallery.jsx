import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import galleryPhoto1 from '../assets/gallery-photo1.jpg'
import galleryPhoto2 from "../assets/gallery-photo3.jpg"
import galleryPhoto3 from "../assets/gallery-photo2.jpg"
import galleryPhoto4 from "../assets/gallery-photo4.jpg"

import galleryVideo1 from "../assets/gallery-video1.jpg"
import galleryVideo2 from "../assets/gallery-video3.jpg"
import galleryVideo3 from "../assets/gallery-video2.jpg"
import galleryVideo4 from "../assets/gallery-video4.jpg"
import { Link } from 'react-router';



const title = "w-full lg:w-[11%] text-[20px] font-[700] leading-[24px] font-['Times_New_Roman',Times,serif] uppercase"
const shortBy = "uppercase "

const filterListItem = "border-r-[1px] last:border-r-0 pr-3"
const filterListButton = ""

const gallaryImg = "w-full h-[140px] sm:h-[180px] object-cover"
const galleryTitle = "text-[14px] leading-[24px] uppercase"
const galleryText = "text-[14px] leading-[24px] text-[#838383]"
const galleryTextWrap = "flex flex-col justify-start items-start mt-4 ml-5"


const Gallery = () => {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };


    return (
        <div className='w-full lg:w-[1000px] flex flex-col justify-start items-center px-4 sm:px-5 md:px-5 lg:px-0 mt-8 md:mt-10 lg:mt-12 mb-10 sm:mb-15 md:mb-20 text-[#404040]'>

            <div className='w-full flex flex-col lg:flex-row flex-wrap justify-start lg:justify-between items-start lg:items-center gap-5'>
                <h1 className={title}>Gallery</h1>

                <div className='w-full lg:w-[87%] flex flex-wrap flex-col flex-col md:flex-row justify-start md:justify-between items-center lg:items-center gap-5 '>
                    <div className=' w-full md:w-[50%] lg:w-[67%] flex flex-col sm:flex-row justify-center md:justify-start lg:justify-center items-center gap-3 text-[14px] sm:text-[14px] leading-[14px]'>

                        <span className={shortBy}>Short By:</span>

                        <ul className='flex justify-between items-center gap-3'>
                            <li className={filterListItem}>
                                <button className={filterListButton}>View All</button>
                            </li>
                            <li className={filterListItem}>
                                <button className={filterListButton}>Images</button>
                            </li>
                            <li className={filterListItem}>
                                <button className={filterListButton}>Videos</button>
                            </li>
                        </ul>
                    </div>

                    <div className=' w-full md:w-[47%] lg:w-[30%] flex flex-col sm:flex-row justify-center md:justify-end items-center '>
                        <Typography sx={{
                            fontSize: '14px',
                            color: '#404040',
                            lineHeight: '24px'
                        }}>Page {page} of 2</Typography>

                        <Pagination count={2} page={page} onChange={handleChange} sx={{
                            fontSize: '14px',
                            color: '#404040',
                            lineHeight: '24px'
                        }}
                            renderItem={(item) => (
                                <PaginationItem
                                    slots={{
                                        previous: IoMdArrowDropleft,
                                        next: IoMdArrowDropright,
                                    }}
                                    {...item}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>

            {/* gallery */}

            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-flow-col lg:grid-cols-none lg:grid-rows-2 gap-4 mt-5">
                <div>
                    <Link to="/gallery-details">
                    <img src={galleryPhoto1} alt="Gallery Thumbnail" className={gallaryImg} />
                    </Link>

                    <div className={galleryTextWrap}>
                        <Link to="/gallery-details"><h3 className={galleryTitle}>Photo Title One</h3></Link>
                        <p className={galleryText}>This website template has been designed by Free Website Templates for you, for free</p>
                    </div>
                </div>

                <div>
                    <Link to="/gallery-details"><img src={galleryPhoto2} alt="Gallery Thumbnail" className={gallaryImg} /></Link>

                    <div className={galleryTextWrap}>
                        <Link to="/gallery-details"><h3 className={galleryTitle}>Photo Title Two</h3></Link>
                        <p className={galleryText}>Proin vitae adipiscing arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                </div>

                <div>
                    <Link to="/gallery-details">
                    <img src={galleryVideo1} alt="Gallery Thumbnail" className={gallaryImg} />
                    </Link>

                    <div className={galleryTextWrap}>
                        <Link to="/gallery-details">
                        <h3 className={galleryTitle}>Video Title one</h3>
                        </Link>
                        <p className={galleryText}>You can replace all this text with your own text. You can remove any link to our website,</p>
                    </div>
                </div>

                <div>
                    <Link to="/gallery-details">
                    <img src={galleryVideo2} alt="Gallery Thumbnail" className={gallaryImg} />
                    </Link>

                    <div className={galleryTextWrap}>
                        <Link to="/gallery-details">
                        <h3 className={galleryTitle}>Video Title Two</h3>
                        </Link>
                        <p className={galleryText}>Proin vitae adipiscing arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                </div>

                <div>
                    <Link to="/gallery-details">
                    <img src={galleryPhoto3} alt="Gallery Thumbnail" className={gallaryImg} />
                    </Link>

                    <div className={galleryTextWrap}>
                        <Link to="/gallery-details">
                        <h3 className={galleryTitle}>Photo Title Three</h3>
                        </Link>

                        <p className={galleryText}>From this website template, you're free to use this website template without linking back to us.</p>
                    </div>
                </div>

                <div>
                    <Link to="/gallery-details">
                    <img src={galleryPhoto4} alt="Gallery Thumbnail" className={gallaryImg} />
                    </Link>

                    <div className={galleryTextWrap}>
                        <Link to="/gallery-details">
                        <h3 className={galleryTitle}>Photo Title Four</h3>
                        </Link>

                        <p className={galleryText}>Proin vitae adipiscing arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                </div>

                <div>
                    <Link to="/gallery-details">
                    <img src={galleryVideo3} alt="Gallery Thumbnail" className={gallaryImg} />
                    </Link>

                    <div className={galleryTextWrap}>
                        <Link to="/gallery-details">
                        <h3 className={galleryTitle}>Video Title Three</h3>
                        </Link>

                        <p className={galleryText}>If you're having problems editing this website template. Then don't hesitate to ask for help on the Forums.</p>
                    </div>
                </div>

                <div>
                    <Link to="/gallery-details">
                    <img src={galleryVideo4} alt="Gallery Thumbnail" className={gallaryImg} />
                    </Link>

                    <div className={galleryTextWrap}>
                        <Link to="/gallery-details">
                        <h3 className={galleryTitle}>Video Title Four</h3>
                        </Link>

                        <p className={galleryText}>Ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery