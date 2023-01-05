import React from 'react';import {Link} from "react-router-dom";import {useQuery} from "../../../hooks/useQuery";const Mentor = () => {    const isMobile = useQuery();    return (        <>            <div className="container-fluid mt-5 ab">                <div className="container">                    <div className="row">                        {!isMobile && (                            <div className="rounded-3 col-md-6 d-flex justify-content-center align-items-center">                                <img                                    src="/assets/team/founder.jpg"                                    height="90%"                                    width="100%"                                    alt="logo"                                />                            </div>                        )}                        <div className="col-md-6">                            <h3 className="about" style={{ fontFamily: "fantasy" }}>Message From the Founder</h3>                            {/*<h2>About Us</h2>*/}                            <p className="" style={{ textAlign: "justify", fontWeight: '400' }}>                                AGRARIAN , The Trust For Growth has a mission (Save the Mother Earth) to feed the                                people of the world through manufacturing and marketing advanced technologies which                                accelerates nutritious food and more production in a way that does not harm the                                environment. Now Agrarian becomes one of the biggest Farmers Helping company . The                                concept of hidden hunger syndrome has already spread to every corner of India through                                our best management system.                                We operate this mission to combat Hidden Hunger which has becomes worldwide                                problem today. Our company and its associates are dedicated to improving the global                                environment and this is best demonstrated through our tree plantation activities in all                                over India. This plantation will help us in future to reduce the CO2 in environment. <br />                                As I reflect on its growth over the years, I am delighted by its achievements and am very                                proud and optimistic for an equally promising future. AGRARIAN has transitioned from a                                local farmer into progressive farmer.                                It is of great satisfaction to know that we are able to meet its clients’ needs. We use                                customer satisfaction as a benchmark by which we evaluate as well as measure its                                performance, and we strive at ensuring that its products are of high standards of                                quality.                                In this era of ever-changing market dynamics, clients are informed more than ever                                before about their options for their solutions providers. Even so, the clients continue                                selecting AGRARIAN as their favorite partner of choice. This can be attributed to its work                                ethics, experience, integrity, and commitment to quality<br />                                As I look at the success of the Group, I always return to three fundamental basics that                                have helped us be who we are today;                                Talented workforce. Among its crucial assets is the diverse, committed, and highly                                qualified staff. They are the core of what we have become today. From its talented                                management team in the top management level to its junior staff, we are all committed                                to ensuring the highest quality of products and the provision of satisfactory services to                                its clients <br />                                {/*<Link to='/' className="read-btn btn btn-primary mt-3">Read More</Link>*/}                            </p>                        </div>                    </div>                </div>            </div>        </>    )}export default Mentor;