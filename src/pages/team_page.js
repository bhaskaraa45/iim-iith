import "../styles/teamPageStyles.css";
import Card from "../components/Card.js";
import {
  CardDataWeb,
  CardDataSponsorship,
  CardDataPR,
  CardDataEvents,
  // CardDataFIC,
  CardDataBoard,
  // CardDataViceChairperson,
  CardDataMembership,
  CardDataHeads,
} from "../services/CardData.js";

function TeamPage() {
  return (
    <>
    <div className="wholePage">
      
      <div className="headerTeams" data-aos="zoom-in" >
        <h1>TEAMS 2023-24</h1>
      </div>
      <div className="headerPlusCards">
        {/* <div className="fic">
          <h1>FIC</h1>
          <div className="cards">
            <Card details={CardDataFIC} />
          </div>
        </div> */}

        <div className="board-members" 
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="1000">
          <h1>BOARD MEMBERS</h1>
          <div className="cards">
            <Card details={CardDataBoard} />
          </div>
        </div>

        <div className="heads" data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="1000">
          <h1>HEADS</h1>
          <div className="cards">
            <Card details={CardDataHeads} />
          </div>
        </div>

        <div className="web" data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="1000">
          <h1>WEB TEAM</h1>
          <div className="cards">
            <Card details={CardDataWeb} />
          </div>
        </div>

        <div className="events" data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="1000">
          <h1>EVENTS TEAM</h1>
          <div className="cards">
            <Card details={CardDataEvents} />
          </div>
        </div>

        <div className="sponsorship" data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="1000">
          <h1>SPONSORSHIP TEAM</h1>
          <div className="cards">
            <Card details={CardDataSponsorship} />
          </div>
        </div>

        <div className="pubrel" data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="1000">
          <h1>PUBLIC RELATIONS TEAM</h1>
          <div className="cards">
            <Card details={CardDataPR} />
          </div>
        </div>

        <div className="membership" 
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="1000"
        >
          <h1>MEMBERSHIP TEAM</h1>
          <div className="cards">
            <Card details={CardDataMembership} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default TeamPage;
