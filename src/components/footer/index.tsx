import React from 'react';
import {FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa'
import {Link} from "react-router-dom";
import {useQuery} from "../../hooks/useQuery";

const Footer = () => {
    const isMobile = useQuery()
    return (
        <>
            <footer className='container-fluid mt-4 footer'>
                <div className='row'>
                    <div className='col-md-5 mt-4'>
                        <h2>About</h2>
                        <p>Our AI platform enables livestock, crop producers and processors to quickly and easily
                            increase efficiency, improve decision making, and increase the revenue. We empower
                            businesses across the value chain to quickly and easily provide all the essential inputs for
                            increasing the crops yields. Our team provides all inputs at the time of sowing and also
                            provides method of using materials. There will be less loss and farmers will get benefited
                            as the inputs from the team will provide knowledge for systematic crop cultivation. Our team
                            provides knowledge for maximum land utilization and how to increase the productivity of
                            land.</p>
                    </div>
                    <div className='col-md-3 mt-4'>
                        <h2>Quick Links</h2>
                        <div className='d-flex justify-content-center flex-column quick-links'>
                            <Link to='/' target='_blank' style={{color: 'gray'}}
                                  className='text-decoration-none'>Home</Link>
                            <Link to='/contact' target='_blank' style={{color: 'gray'}}
                                  className='text-decoration-none'>Contact</Link>
                            <Link to='/team' target='_blank' style={{color: 'gray'}} className='text-decoration-none'>Our
                                Team</Link>
                            <Link to='/about' target='_blank' style={{color: 'gray'}}
                                  className='text-decoration-none'>About</Link>
                            <Link to='/team/mentors' target='_blank' style={{color: 'gray'}}
                                  className='text-decoration-none'>Mentors</Link>
                            <Link to='/careers' target='_blank' style={{color: 'gray'}}
                                  className='text-decoration-none'>Careers</Link>
                            <Link to='/blogs' target='_blank' style={{color: 'gray'}}
                                  className='text-decoration-none'>Blog</Link>
                        </div>
                    </div>
                    <div className='col-md-3 mt-4 text-wrap'>
                        <h2>Contact Us</h2>
                        <p>
                            Contact No :- (+91) 8809140983<br/>
                            {isMobile ? 'agrarianthetrust forgrowth@gmail.com' : 'Email : agrarianthetrustforgrowth@gmail.com'}<br/>
                            AGRARIAN The Trust For Growth<br/>
                            17km Stone, NH-2, Mathura-Delhi Road Mathura, Chaumuhan, Uttar Pradesh 281406.<br/>
                        </p>
                    </div>
                </div>
                <div className='container mt-2'>
                    <div className='row'>
                        <div className='col-12 d-flex justify-content-center align-items-center gap-md-5 gap-3'>
                            <a href='https://www.facebook.com/profile.php?id=100088894643348'
                               target='_blank'><FaFacebookSquare
                                style={{height: '50px', width: '50px', color: 'white'}}/></a>
                            <a href='/' target='_blank'><FaTwitter
                                style={{height: '50px', width: '50px', color: 'white'}}/></a>
                            <a href='/' target='_blank'><FaInstagram
                                style={{height: '50px', width: '50px', color: 'white'}}/></a>
                            <a href='https://www.youtube.com/@Agrarian_The_Trust_For_Growth' target='_blank'><FaYoutube
                                style={{height: '50px', width: '50px', color: 'white'}}/></a>
                            <a href='https://www.linkedin.com/in/agrarian-the-trust-for-growth-ab5969260'
                               target='_blank'><FaLinkedin style={{height: '50px', width: '50px', color: 'white'}}/></a>
                        </div>
                    </div>
                </div>
                <div style={{textAlign: 'center', marginLeft: '0px'}}
                     className='container-fluid mt-3'>Copyright &copy;2023 All Rights Reserved by <span
                    style={{color: '#1DCA11'}}>Agrarian</span>
                </div>
            </footer>
        </>
    )
}

export default Footer;