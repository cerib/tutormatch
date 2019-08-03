import React, { useState, useEffect } from "react";
import TutorCard from "./tutorcard";

const TutorCardsList = ({ tutors, showAllTutors, hasFetchedAll }) => {
  const placeholderImage =
    process.env.PUBLIC_URL + "/assets/images/user-photo.jpg";

  const [fetchClicked, setFetchClicked] = useState(false);

  useEffect(() => {
    if (hasFetchedAll) {
      setFetchClicked(true);
    } else {
      setFetchClicked(false);
    }
  }, [hasFetchedAll]);

  const tutorCards = tutors.map(tutor => {
    return (
      <TutorCard
        key={tutor.id}
        name={tutor.name}
        city={tutor.address.city}
        image={placeholderImage}
      />
    );
  });

  const handleAllTutorsClick = () => {
    showAllTutors();
  };

  return (
    <div>
      <div className="ui container centered cards">{tutorCards}</div>
      {!fetchClicked ? (
        <div className="ui column centered grid">
          <button
            className="ui button"
            id="all-tutors-button"
            onClick={handleAllTutorsClick}
          >
            See all tutors
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TutorCardsList;
