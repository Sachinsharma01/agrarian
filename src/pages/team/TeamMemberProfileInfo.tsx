import React from 'react';
import {getAboutdata} from "../../utils/getAboutData";
import {useParams} from "react-router-dom";

const TeamMemberProfileInfo = () => {
    let { name} : any = useParams();
    const profileInfo : any = getAboutdata(name);
    document.title = `Agrarian | ${name}`
    localStorage.setItem('active', 'team');
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 team-banner">
                        <div className="container h-100">
                            <div className="row d-flex h-100 justify-content-center align-items-center">
                                <div className="col-6">
                                    <h2 className='fs-1 text-center text-light'>Our Team</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5 ab">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="about" style={{fontFamily: "fantasy"}}>{profileInfo.profile}</h3>
                            <p className="" style={{textAlign: "justify", fontWeight: '400'}}>
                                {profileInfo.about}
                            </p>
                        </div>
                            <div className="rounded-3 col-md-6 d-flex justify-content-center align-items-center">
                                <img
                                    src={`${profileInfo.image}`}
                                    height="60px"
                                    width="60px"
                                    alt="logo"
                                />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TeamMemberProfileInfo;