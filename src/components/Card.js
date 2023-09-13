import React from "react";
import "../styles/Card.css";

function Card(props) {

// const data = require('./data.js');

  return (
    <>
      {props.details.map((value) => (
        <div className="card-container">
          <div className="card" id="photo_card">
            {/* picture of person */}
            <div className="photo-container">
              <img src={value.image} alt="Person's Image" className="photo" />
            </div>
          </div>

          {/* firstName and socials */}
          <div className="content">
            <h3 id="name">{value.firstName} <br/> {value.lastName}</h3>
            <h5 id="position">{value.position}</h5>
            <ul className="socials">
              <li className="linkedin">
                <a target="_blank" href={value.linkedin}>
                  <i className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg> */}
                  </i>
                  {/* linkedin */}
                </a>
              </li>

              <li className="mail">
                <a target="_blank" href={value.mail}>
                  <i className="fa fa-envelope">
                    {/* ::before */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                  </i>
                  {/* mail */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;



// const Card = ({ teamData }) => {
//   return (
//     <div className="team-container">
//       {Object.keys(teamData).map((teamKey) => (
//         <div key={teamKey} className="team-section">
//           <h2>{teamKey}</h2>
//           <div className="team-cards">
//             {Object.keys(teamData[teamKey]).map((memberKey) => {
//               const member = teamData[teamKey][memberKey];
//               return (
//                 <div key={memberKey} className="team-card">
//                   <img src={member.image} alt={member.firstName} />
//                   <h3>{member.firstName}</h3>
//                   <p>{member.position}</p>
//                   <p>Email: {member.mail}</p>
//                   <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
//                     LinkedIn
//                   </a>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };





