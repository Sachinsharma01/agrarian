import React from 'react';// import {useQuery} from "../../../hooks/useQuery";const Mentor = () => {    // const isMobile = useQuery();    return (        <>            <div className="container-fluid mt-5 ab">                <div className="container">                    <div className="row">                        {/*{!isMobile && (*/}                            <div className="rounded-3 col-md-6 d-flex justify-content-center align-items-center">                                <img                                    src="/assets/team/ashutosh.jpg"                                    height="90%"                                    width="100%"                                    alt="logo"                                />                            </div>                        {/*)}*/}                        <div className="col-md-6">                            <h3 className="about" style={{ fontFamily: "fantasy" }}>Message From the Founder</h3>                            {/*<h2>About Us</h2>*/}                            <p className="" style={{ textAlign: "justify", fontWeight: '400' }}>                                AGRARIAN , The Trust For Growth has a mission (Save the Mother Earth) to feed the                                people of the world through manufacturing and marketing advanced technologies which                                accelerates nutritious food and more production in a way that does not harm the                                environment. Now Agrarian becomes one of the biggest Farmers Helping company . The                                concept of hidden hunger syndrome has already spread to every corner of India through                                our best management system.                                We operate this mission to combat Hidden Hunger which has becomes worldwide                                problem today. Our company and its associates are dedicated to improving the global                                environment and this is best demonstrated through our tree plantation activities in all                                over India. This plantation will help us in future to reduce the CO2 in environment. <br/>                                <strong>Thank you for reading!<br/>Ashutosh Kumar<br/>Founder-Cum-CEO</strong>                                {/*<Link to='/' className="read-btn btn btn-primary mt-3">Read More</Link>*/}                            </p>                        </div>                    </div>                </div>            </div>        </>    )}export default Mentor;