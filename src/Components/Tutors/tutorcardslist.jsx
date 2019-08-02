import React from "react";
import TutorCard from "./tutorcard";

const TutorCardsList = ({ tutors }) => {
  console.log(tutors);
  return (
    <div>
      <div className="ui container four cards">
        <TutorCard />
        <TutorCard />
        <TutorCard />
      </div>
      <div className="ui column centered grid">
        <button className="ui button" id="all-tutors-button">
          See all tutors
        </button>
      </div>
    </div>
  );
};

export default TutorCardsList;
