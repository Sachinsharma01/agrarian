import React from 'react';
// import {useQuery} from "../../../hooks/useQuery";

const Mentor = () => {
    // const isMobile = useQuery();
    return (
        <>
            <div className="container-fluid mt-5 ab">
                <div className="container">
                    <div className="row">
                        {/*{!isMobile && (*/}
                            <div className="rounded-3 col-md-6 d-flex justify-content-center align-items-center">
                                <img
                                    src="/assets/team/ashutosh.jpg"
                                    height="70%"
                                    width="70%"
                                    alt="logo"
                                />
                            </div>
                        {/*)}*/}
                        <div className="col-md-6">
                            <h3 className="about" style={{ fontFamily: "fantasy" }}>Message From the Founder</h3>
                            {/*<h2>About Us</h2>*/}
                            <p className="" style={{ textAlign: "justify", fontWeight: '400' }}>
                            AGRARIAN , The Trust For Growth has a mission (Save the Mother Earth) to feed the people of the world through manufacturing and marketing advanced technologies which accelerates nutritious food and more production in a way that does not harm the environment. Now Agrarian becomes one of the biggest Farmers Helping company .<br/>
The concept of hidden hunger syndrome has already spread to every corner of India through our best management system. We operate this mission to combat Hidden Hunger which has becomes worldwide problem today. This plantation will help us in future to reduce the CO2 in environment.AGRARIAN has transitioned from a local farmer into progressive farmers. We are committed to establishing in-depth relationships with its partners and clients by associating with them, learning their environments, goals, and challenges first hand so we can be able to offer the best solutions.<br/>
With the help of new technology and Insets, Diseases, and sensors, our team minimised the production cost of Agriculture products and produced the best quality and healthy food. At last, farmers get benefited and hopefully farmers’ life uplifted. and they earn more than their efforts. congratulate all its staff for holding a high level of good morals that has been a pillar to its company.<br/>
 I wish all the very best to all our stakeholders and aspiring students who craft the future of our country. <br/>
                                <strong>Thank you for reading!<br/>Ashutosh Kumar<br/>Founder-And -CEO</strong>
                                {/*<Link to='/' className="read-btn btn btn-primary mt-3">Read More</Link>*/}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mentor;