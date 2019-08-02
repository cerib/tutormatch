import React from "react";
import FilterTutors from "./filtertutors";
import TutorCardsList from "./tutorcardslist";
import "./tutorssection.css";
const TutorsSection = () => {
  const tutors = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    }
  ];

  return (
    <React.Fragment>
      <div className="ui container tutorssection">
        <div className="tutors-section-description">
          <h2>Our Tutors</h2>
          <p>
            We have more than 2 tutors from various disciplines ready to match
            with you.
          </p>
        </div>
        <FilterTutors />
      </div>
      <div className="ui divider breaker" />
      <div className="ui container" style={{ margin: 30 }}>
        <TutorCardsList tutors={tutors} />
      </div>
    </React.Fragment>
  );
};

export default TutorsSection;
