import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineArrowRight} from 'react-icons/ai'
import {useQuery} from "../../hooks/useQuery";
import MobileService from "./MobileService";

const Services = () => {
    const isMobile = useQuery();
    return (<>
        <div className='container-fluid mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='text-center'><span className='fs-1'>Solutions We Offer</span></div>
                    <p className='text-center'>We strive to continuously provide customizable, affordable and quality products & services to our patrons through our creative & skilled team who demonstrate an inherent agility towards projects.</p>
                    {!isMobile ?<div className='container ser mt-3 mb-3 d-flex justify-content-center align-items-center'>
                         <div className='row h-75 service'>
                            {/*<div className='col-12 h-50 text-center'>*/}
                            {/*    Agri Store*/}
                            {/*</div>*/}
                            <div className='col-10 h-50'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-6 text-end s1'>
                                            <h5>Micro Entrepreneurship</h5>
                                            {/*<button>*/}
                                            <small className='s1-btn'>Micro Entrepreneurship</small>
                                            <Link className='s1-btn' to='/services' target='_blank'
                                                  style={{fontSize: "30px", color: '#1DCA11'}}><AiOutlineArrowRight/></Link>
                                            {/*</button>*/}
                                        </div>
                                        <div className='col-6 text-center s2'>
                                            <h5>Disease Diagnosis</h5>
                                            <small className='s2-btn'>Full Crop Disease Diagnosis</small>
                                            <Link className='s2-btn' to='/services' target='_blank'
                                                  style={{fontSize: "30px", color: '#1DCA11'}}><AiOutlineArrowRight/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-10 h-50'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-6 text-center s3'>
                                            <h5>Women Empowerment</h5>
                                            <small className='s3-btn'>Women Empowerment in Agriculture</small>
                                            <Link className='s3-btn' to='/services' target='_blank'
                                                  style={{fontSize: "30px", color: '#1DCA11'}}><AiOutlineArrowRight/></Link>
                                        </div>
                                        <div className='col-6 text-end s4'>
                                            <h5>Farmer Community</h5>
                                            <small className='s4-btn'>Farmer Community and help</small>
                                            <Link className='s4-btn' to='/services' target='_blank'
                                                  style={{fontSize: "30px", color: '#1DCA11'}}><AiOutlineArrowRight/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-10 h-50'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-6 text-end s5'>
                                            <h5>Drone Tracking</h5>
                                            <small className='s5-btn'>Full Land Crop Tracking</small>
                                            <Link className='s5-btn' to='/services' target='_blank'
                                                  style={{fontSize: "30px", color: '#1DCA11'}}><AiOutlineArrowRight/></Link>
                                        </div>
                                        <div className='col-6 text-center s6'>
                                            <h5>Seasonal Crop Education</h5>
                                            <small className='s6-btn'>Education on Crop Seasoning</small>
                                            <Link className='s6-btn' to='/services' target='_blank'
                                                  style={{fontSize: "30px", color: '#1DCA11'}}><AiOutlineArrowRight/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<div className='col-12 h-50 text-center'>*/}
                            {/*    <div className='col-12 h25'>Crop Advisory</div>*/}
                            {/*</div>*/}
                        </div>
                    </div> : <MobileService />}
                </div>
            </div>
        </div>
    </>);
}

export default Services;