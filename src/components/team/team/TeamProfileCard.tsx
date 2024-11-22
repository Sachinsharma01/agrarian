import React from 'react';
import { Link } from 'react-router-dom';

// const TeamProfileCard = (props:any) => {
//     return (
//         <>
//             <div className="card mx-3 mt-3" style={{width: '18rem'}}>
//                 <img src={props.image} alt={props.image} className='card-img' />
//                 <div className='card-body'>
//                     <h4 className='text-capitalize '><Link to={`/team/profile/${props.name}`} target='_blank' className='card-title team-name text-decoration-none text-dark'>{props.name}</Link></h4>
//                     <h6 className='card-text text-capitalize' style={{color: '#1DCA11'}}>{props.profile}</h6>
//                 </div>
//             </div>
//         </>
//     )
// }
// TeamProfileCard.js

const TeamProfileCard = (props:any) => {
    return (
        <div className="card mx-3 mt-3">
        <img
          src={props.image}
          alt={props.image}
          className='card-img' 
          style={{
            width: "250px", // Fixed width for uniform image sizes
            height: "250px", // Fixed height for uniform image sizes
            objectFit: "cover", // Crop image to fill dimensions without distortion
            borderRadius: "10px" // Optional: Adds rounded corners
          }}
        />
        <div className='card-body'>
                    <h4 className='text-capitalize '><Link to={`/team/profile/${props.name}`} target='_blank' className='card-title team-name text-decoration-none text-dark'>{props.name}</Link></h4>
                    <h6 className='card-text text-capitalize' style={{color: '#1DCA11'}}>{props.profile}</h6>
                </div>
      </div>
    );
  };
  

export default TeamProfileCard;