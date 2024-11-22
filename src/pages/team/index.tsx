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
                            <TeamProfileCard image='/assets/team/1. Akhil Dubey.jpeg' name='Akhil Dubey' />
                            <TeamProfileCard image='/assets/team/2. Sachin Sharma.png' name='Sachin Sharma' profile=''/>
                            <TeamProfileCard image='/assets/team/3. Vipin Sharma.jpeg' name='Vipin Sharma' profile=''/>
                            {/* <TeamProfileCard image='/assets/team/Utkarsh-Ojha.jpg' name='Utkarsh ' profile='Co-founder & CTO'/> */}
                            <TeamProfileCard image='/assets/team/4. Veer Prakash.jpeg' name='Veer Prakash' profile=''/>
                            <TeamProfileCard image='/assets/team/5. Vrinda Mehrotra.jpeg' name='Vrinda Mehrotra' profile=''/>
                            <TeamProfileCard image='/assets/team/6. Vaishnavy Manglik.jpeg' name='Vaishnavy Manglik' profile=''/>
                            <TeamProfileCard image='/assets/team/7. Ansh Varshney.png' name='Ansh Varshney' profile=''/>
                            {/* <TeamProfileCard image='/assets/team/amisha.jpg' name='Amisha' profile='Field Executive'/>
                            <TeamProfileCard image='/assets/team/pradhuman.jpg' name='Pradhum Pandey' profile='Production Manager'/>
                            <TeamProfileCard image='/assets/team/dhruv.jpg' name='Dhruv Raj' profile='Production Manager'/>
                            <TeamProfileCard image='/assets/team/sunny.jpg' name='Sunny Kumar' profile='Production Manager'/>
                            <TeamProfileCard image='/assets/team/palak.jpg' name='Palak Kumari' profile='Marketing Manager'/> */}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}