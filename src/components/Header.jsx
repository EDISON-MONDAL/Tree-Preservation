import React, { useContext, useEffect } from 'react'
import bgImage from '../assets/bg-header.jpg'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { IoMenu } from "react-icons/io5";
import { red } from '@mui/material/colors';
import { MyContext } from '../App';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoMdClose } from "react-icons/io";
import { Link as RouterLink, useLocation } from 'react-router';




const preventDefault = (event) => event.preventDefault();


const Header = () => {
    const context = useContext(MyContext);
    const location = useLocation();
    
    return (
        <div className="flex justify-center w-full bg-repeat-x bg-center bg-[length:auto_100%] text-white "
            style={{ backgroundImage: `url(${bgImage})` }}>

            <div className="w-full  lg:w-[1000px] h-[120px] px-4 sm:px-5 md:px-5 lg:px-0" >

                {/* Donate Now button */}
                <div className="flex justify-end lg:px-10">
                    <Button variant="outlined" href="#outlined-buttons"
                        sx={{
                            color: "white",
                            backgroundColor: "#9edf5e",
                            border: "3px solid white",
                            borderTop: "0",
                            borderRadius: "0 0 10px 10px",
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            padding: "5px 10px",
                            fontSize: "25px",
                            fontFamily: "'Times New Roman', serif",

                            "&:hover": {
                                backgroundColor: "orange",
                            },

                            "@media (min-width: 768px) and (max-width: 1023px)": {
                                fontSize: "18px",
                            },

                            "@media (min-width: 640px) and (max-width: 767px)": {
                                fontSize: "16px",
                            },

                            "@media (min-width: 1px) and (max-width: 639px)": {
                                fontSize: "10px",
                            },
                        }}
                    >
                        Donate Now
                    </Button>
                </div>

                <div className="font-[\'Times_New_Roman\'] relative top-4 sm:-top-2 md:-top-4 lg:-top-8 flex justify-between items-end">
                    <div className="capitalize">
                        <h1 className="text-[14px] sm:text-[32px] md:text-[34px] lg:text-[38px]">
                            <sapn className="text-yellow-200">World</sapn>
                            <sapn className="text-green-300"> Tree</sapn> Preservation</h1>
                        <p className="uppercase text-[8px] sm:text-[12px] md:text-[12.6px] lg:text-[14px]">Save trees. Plant tress. Build a greener future.</p>
                    </div>

                    {/* desktop nav */}
                    <div className="w-[550px] hidden lg:block">
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                typography: 'body1',
                                '& > :not(style) ~ :not(style)': {
                                    ml: 2,
                                },
                                width: "100%",
                                fontFamily: "'Times New Roman', serif",
                                fontWeight: "bold",
                                fontSize: "18px",
                                color: "white",
                                "& > a:hover": {
                                    color: "yellow",
                                },
                                "& > a:active": {
                                    color: "yellow",
                                },
                            }}
                            onClick={preventDefault}
                        >
                            <Link component={RouterLink} to="/" underline="none"
                                sx={{
                                    color: location.pathname === "/" ? "yellow" : "white",
                                }}>
                                Home
                            </Link>
                            <Link component={RouterLink} to="/about" underline="none" sx={{
                                    color: location.pathname === "/about" ? "yellow" : "white",
                                }}>
                                About
                            </Link>
                            <Link component={RouterLink} to="/programs" underline="none" sx={{
                                    color: location.pathname === "/programs" ? "yellow" : "white",
                                }}>
                                Our Programs
                            </Link>
                            <Link component={RouterLink} to="/gallery" underline="none" sx={{
                                    color: location.pathname === "/gallery" ? "yellow" : "white",
                                }}>
                                Gallery
                            </Link>
                            <Link component={RouterLink} to="/contact" underline="none" sx={{
                                    color: location.pathname === "/contact" ? "yellow" : "white",
                                }}>
                                Contact
                            </Link>
                            <Link component={RouterLink} to="/blog" underline="none" sx={{
                                    color: location.pathname === "/blog" ? "yellow" : "white",
                                }}>
                                Blog
                            </Link>
                        </Box>
                    </div>



                    {/* mobile nav */}
                    <div className="block lg:hidden">
                        <Button sx={{
                            borderRadius: "50%",
                            width: "50px",
                            minWidth: "50px",
                            height: "50px",
                            padding: "0",
                            color: "white",

                            "@media (min-width: 768px) and (max-width: 1023px)": {
                                width: "40px",
                                minWidth: "40px",
                                height: "40px",
                            },

                            "@media (min-width: 640px) and (max-width: 767px)": {
                                width: "40px",
                                minWidth: "40px",
                                height: "40px",
                            },



                            "@media (min-width: 1px) and (max-width: 639px)": {
                                width: "40px",
                                minWidth: "40px",
                                height: "40px",
                            },

                        }}

                            onClick={() => context.setMenuOpen(prev => !prev)}

                        >
                            <IoMenu className="w-full h-full p-1" />
                        </Button>

                        <menu className={`fixed top-0 left-0 h-full bg-white text-black text-[18px] flex flex-col items-center w-full p-5 pt-10 gap-3 z-1000  
                        [&>a]:w-full 
[&>a]:text-center 
[&>a]:pb-2
[&>a:hover]:!text-yellow-400
[&>a:active]:!text-yellow-400
[&>a:not(:last-child)]:border-b-2
[&>a:not(:last-child)]:border-gray-300
overflow-y-auto
${context.menuOpen === true ? "" : "hidden"}
                        `}>
                            <Button sx={{
                                borderRadius: "50%",
                                width: "50px",
                                minWidth: "50px",
                                height: "50px",
                                padding: "0",
                                color: "black",
                                position: "absolute",
                                top: "10px",
                                right: "10px",

                                "&:hover": {
                                    color: "red",
                                },

                                "&:active": {
                                    color: "red",
                                },
                            }}
                                onClick={() => context.setMenuOpen(prev => !prev)}

                            >
                                <IoMdClose className="w-full h-full p-1" />
                            </Button>

                            <Link component={RouterLink} to="/" underline="none"
                                sx={{
                                    color: location.pathname === "/" ? "brown" : "black",
                                }}
                                onClick={() => context.setMenuOpen(prev => !prev)}
                                >
                                Home
                            </Link>
                            <Link component={RouterLink} to="/about" underline="none" sx={{
                                    color: location.pathname === "/about" ? "brown" : "black",
                                }}
                                onClick={() => context.setMenuOpen(prev => !prev)}
                                >
                                About
                            </Link>
                            <Link component={RouterLink} to="/programs" underline="none" sx={{
                                    color: location.pathname === "/programs" ? "brown" : "black",
                                }}
                                onClick={() => context.setMenuOpen(prev => !prev)}
                                >
                                Our Programs
                            </Link>
                            <Link component={RouterLink} to="/gallery" underline="none" sx={{
                                    color: location.pathname === "/gallery" ? "brown" : "black",
                                }}
                                onClick={() => context.setMenuOpen(prev => !prev)}
                                >
                                Gallery
                            </Link>
                            <Link component={RouterLink} to="/contact" underline="none" sx={{
                                    color: location.pathname === "/contact" ? "brown" : "black",
                                }}
                                onClick={() => context.setMenuOpen(prev => !prev)}
                                >
                                Contact
                            </Link>
                            <Link component={RouterLink} to="/blog" underline="none" sx={{
                                    color: location.pathname === "/blog" ? "brown" : "black",
                                }}
                                onClick={() => context.setMenuOpen(prev => !prev)}
                                >
                                Blog
                            </Link>
                        </menu>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header