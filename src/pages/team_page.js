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
      <div className="headerTeams">
        <h1>TEAMS 2023-24</h1>
      </div>
      <div className="headerPlusCards">
        {/* <div className="fic">
          <h1>FIC</h1>
          <div className="cards">
            <Card details={CardDataFIC} />
          </div>
        </div> */}

        <div className="board-members">
          <h1>BOARD MEMBERS</h1>
          <div className="cards">
            <Card details={CardDataBoard} />
          </div>
        </div>

        <div className="heads">
          <h1>HEADS</h1>
          <div className="cards">
            <Card details={CardDataHeads} />
          </div>
        </div>

        <div className="web">
          <h1>WEB TEAM</h1>
          <div className="cards">
            <Card details={CardDataWeb} />
          </div>
        </div>

        <div className="events">
          <h1>EVENTS TEAM</h1>
          <div className="cards">
            <Card details={CardDataEvents} />
          </div>
        </div>

        <div className="sponsorship">
          <h1>SPONSORSHIP TEAM</h1>
          <div className="cards">
            <Card details={CardDataSponsorship} />
          </div>
        </div>

        <div className="pubrel">
          <h1>PUBLIC RELATIONS TEAM</h1>
          <div className="cards">
            <Card details={CardDataPR} />
          </div>
        </div>

        <div className="membership">
          <h1>MEMBERSHIP TEAM</h1>
          <div className="cards">
            <Card details={CardDataMembership} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamPage;
