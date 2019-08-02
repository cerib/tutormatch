import React from "react";

const TutorCard = () => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="image">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/user-photo.jpg"}
            alt="tutor"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
      <div className="content">
        <div className="header">Euzinho da Silva</div>
      </div>
      <div className="content">
        <p>City</p>
        <div className="ui label">London</div>
        <p>Students so far</p>
        <img
          className="ui avatar image"
          src={process.env.PUBLIC_URL + "/assets/images/student-photo.jpg"}
          alt="avatar"
        />
        <img
          className="ui avatar image"
          src={process.env.PUBLIC_URL + "/assets/images/student-photo.jpg"}
          alt="avatar"
        />
        <img
          className="ui avatar image"
          src={process.env.PUBLIC_URL + "/assets/images/student-photo.jpg"}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default TutorCard;
