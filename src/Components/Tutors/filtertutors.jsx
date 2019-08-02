import React from "react";

const FilterTutors = () => {
  return (
    <div className="filter-and-sort-menu">
      <span className="filter-button-label">Filter by:</span>
      <div className="ui buttons filter-buttons">
        <button className="ui button">Liverpool</button>
        <button className="ui button">London</button>
        <button className="ui button">Manchester</button>
      </div>
      <span className="filter-button-label">Sort by: </span>
      <div className="ui buttons filter-buttons">
        <button className="ui button">Name</button>
        <button className="ui button">City</button>
      </div>
    </div>
  );
};

export default FilterTutors;
