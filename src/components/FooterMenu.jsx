import React from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Link as RouterLink, useLocation } from 'react-router';

const preventDefault = (event) => event.preventDefault();

const FooterMenu = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className="w-full flex justify-between  items-center lg:w-[1000px] px-4 sm:px-5 md:px-5 lg:px-0 bg-transparent">
                {/* desktop nav */}
                <div className="w-[55%] lg:w-[55%] hidden md:block py-2">
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
                            fontWeight: "400",
                            fontSize: "11px",
                            lineHeight: "24px",
                            color: "#838383",
                            textTransform: "uppercase",
                            "& > a": {
                                color: "#838383",
                            },
                            "& > a:hover": {
                                color: "yellow",
                            },
                            "& > a:active": {
                                color: "yellow",
                            },
                        }}
                        onClick={preventDefault}
                    >
                        <Link component={RouterLink} to="/" underline="none">
                            Home
                        </Link>
                        <Link component={RouterLink} to="about" underline="none">
                            About
                        </Link>
                        <Link component={RouterLink} to="/programs" underline="none">
                            Our Programs
                        </Link>
                        <Link component={RouterLink} to="/gallery" underline="none">
                            Gallery
                        </Link>
                        <Link component={RouterLink} to="/contact" underline="none">
                            Contact
                        </Link>
                        <Link component={RouterLink} to="/blog" underline="none">
                            Blog
                        </Link>
                    </Box>
                </div>

                <p className='w-full md:w-[45%] lg:w-[35%] text-center md:text-right text-[10px] sm:text-[11px] leading-[24px] uppercase'>&copy; {new Date().getFullYear()} World Tree Preservation. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default FooterMenu