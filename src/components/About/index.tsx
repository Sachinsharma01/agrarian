import React from "react";
import './index.css'

const About = () => {
    return (
        <>
            <div className="container-fluid mt-5 ab">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="about" style={{fontFamily: "fantasy"}}>Who We Are</h3>
                            <h2>About Us</h2>
                            <p className="" style={{textAlign: "justify", fontWeight: '400'}}>
                            <strong>Agriaan Rootz Pvt Ltd</strong>, registered in 2024, is an Agri-tech company dedicated to enhancing farming through advanced IoT solutions and education. We operate at the grassroots level, focusing on empowering farmers, especially in Bihar and Uttar Pradesh. <br />

                            <strong>Our Approach</strong> <br />
                            - <strong>Smart IoT Solutions:</strong> Our sensors monitor soil health and detect crop diseases, offering tailored recommendations for fertilizers, pesticides, and treatments. <br />
                            - <strong>Marketplace Platform:</strong> We connect farmers with buyers directly, facilitating efficient and transparent trade. <br />
                            - <strong>Educational Support:</strong> We provide easy-to-access resources like videos and blogs to keep farmers informed about best agricultural practices.

                            <br />
                            <br />
                            From weather forecasting to pest control alerts, our integrated software and support system help farmers make informed decisions, ensuring sustainable and profitable farming. <br/>
                                {/*<Link to='/about' target='_blank' className="read-btn btn btn-primary mt-3">Read*/}
                                {/*    More</Link>*/}
                            </p>
                        </div>
                        {/*{!isMobile && (*/}
                        <div className="rounded-3 col-md-6 d-flex justify-content-center align-items-center">
                            <img
                                src="\assets\about.png"
                                height="90%"
                                width="90%"
                                alt="logo"
                            />
                        </div>
                        <h2> <b>In association with IEDC </b></h2>
                        <div className='logo'>
                            {/* <div className="logo-1"> */}
                        {/* </div> */}
                        
                        {/* <div className="logo-2"> */}
                            <img  src='./assets/IEDC_logo.png'
                            height='150px'
                            width='300px'
                            alt='logo'
                            />
                        {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
