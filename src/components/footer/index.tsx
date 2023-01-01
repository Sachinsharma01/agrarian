import React from 'react';
import {FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube, FaLinkedin} from 'react-icons/fa'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className='container-fluid mt-4 footer'>
                <div className='row'>
                    <div className='col-md-5 mt-4'>
                        <h2>About</h2>
                        <p>Our vision AI platform enables livestock and crop producers and processors to quickly and
                            easily
                            increase efficiency, improve decision making, and realize more revenue. We empower
                            businesses
                            across the value chain to quickly and easily.provide all essential inputs for increasing the
                            crops yields:- our team provide all inputs at the time of
                            sowing and also provide method for how to use materials .then after less chance to loss the
                            inputs
                            and farmers get benifited.provide knowledge for systematic crops cultovation :- our team
                            provide knowledge for maximum
                            land use system and how to grow more then one crop in single peace of land</p>
                    </div>
                    <div className='col-md-3 mt-4'>
                        <h2>Quick Links</h2>
                        <div className='d-flex justify-content-center flex-column quick-links'>
                            <Link to='/' style={{color: 'gray'}} className='text-decoration-none'>Home</Link>
                            <Link to='/' style={{color: 'gray'}} className='text-decoration-none'>Contact</Link>
                            <Link to='/' style={{color: 'gray'}} className='text-decoration-none'>Our Team</Link>
                            <Link to='/' style={{color: 'gray'}} className='text-decoration-none'>About</Link>
                            
                        </div>
                    </div>
                    <div className='col-md-3 mt-4'>
                        <h2>Contact Us</h2>
                        <p>
                            Contact No:- (+91) 8809140983<br/>
                            Email Id:- agrarianthetrustforgrowth@gmail.com<br/>
                            AGRARIAN The Trust For Growth<br/>
                            17km Stone, NH-2, Mathura-Delhi Road Mathura, Chaumuhan, Uttar Pradesh 281406<br/>
                        </p>
                    </div>
                </div>
                <div className='container mt-2'>
                    <div className='row'>
                        <div className='col-12 d-flex justify-content-center align-items-center gap-md-5 gap-3'>
                            <a href='/'><FaFacebookSquare style={{height: '50px', width: '50px', color: 'white'}}/></a>
                            <a href='/'><FaTwitter style={{height: '50px', width: '50px', color: 'white'}}/></a>
                            <a href='/'><FaInstagram style={{height: '50px', width: '50px', color: 'white'}}/></a>
                            <a href='/'><FaYoutube style={{height: '50px', width: '50px', color: 'white'}}/></a>
                            <a href='/'><FaLinkedin style={{height: '50px', width: '50px', color: 'white'}}/></a>
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