import React from 'react';
import {Link} from "react-router-dom";
import Marquee from "react-fast-marquee";

const TopBar = () => {
    // @ts-ignore
    return (
        <>
            <div className="container" style={{width: '100vw', height: '30px', color: '#1dca11'}}>
                <div className="row">
                    <div className="col-12">
                        <Marquee>
                            <p>If You are Have an Entrepreneur Mindset and skills then join our team and make society a
                                better place, We are hiring <Link to='/blogs' target='_blank'> click here</Link> to know more</p>
                        </Marquee>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopBar;