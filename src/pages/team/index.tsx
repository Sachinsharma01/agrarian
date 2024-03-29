import React from 'react';
import TeamProfileCard from "../../components/team/team/TeamProfileCard";

export default function Team() {
    document.title = 'Agrarian | Team'
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
                    <div className="col-12">
                        <div className="container d-flex justify-content-center align-items-center flex-wrap">
                            {/*<div className="row">*/}
                            <TeamProfileCard image='/assets/team/ashutosh-1.jpg' name='Ashutosh Kumar' profile='founder & CEO'/>
                            <TeamProfileCard image='/assets/team/nishant.jpg' name='Nishant Mishra' profile='Co-founder & COO'/>
                            <TeamProfileCard image='/assets/team/akhil.jpg' name='Akhil Dubey' profile='Co-founder & CFO'/>
                            {/* <TeamProfileCard image='/assets/team/Utkarsh-Ojha.jpg' name='Utkarsh ' profile='Co-founder & CTO'/> */}
                            <TeamProfileCard image='/assets/team/varsha.jpg' name='Varsha ' profile='Marketing Manager'/>
                            <TeamProfileCard image='/assets/team/chandrashekhar.jpg' name='ChandraShekhar ' profile='Production Manager'/>
                            <TeamProfileCard image='/assets/team/abhishek.jpg' name='Abhishek Kumar' profile='Production Manager'/>
                            <TeamProfileCard image='/assets/team/komal.png' name='Komal Tiwari' profile='Field Executive'/>
                            <TeamProfileCard image='/assets/team/amisha.jpg' name='Amisha' profile='Field Executive'/>
                            <TeamProfileCard image='/assets/team/pradhuman.jpg' name='Pradhum Pandey' profile='Production Manager'/>
                            <TeamProfileCard image='/assets/team/dhruv.jpg' name='Dhruv Raj' profile='Production Manager'/>
                            <TeamProfileCard image='/assets/team/sunny.jpg' name='Sunny Kumar' profile='Production Manager'/>
                            <TeamProfileCard image='/assets/team/palak.jpg' name='Palak Kumari' profile='Marketing Manager'/>
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}