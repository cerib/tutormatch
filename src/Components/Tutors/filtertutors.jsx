import React, { useState } from "react";

const FilterTutors = ({ cities, sortHandler, setCityFilter }) => {
  const [activeSort, setActiveSort] = useState("byname");
  const [activeFilter, setActiveFilter] = useState("");

  const handleSortClick = type => {
    setActiveSort(type);
    sortHandler(type);
  };

  const handleFilterClick = city => {
    if (activeFilter === city) {
      setActiveFilter("");
    } else {
      setActiveFilter(city);
    }
    setCityFilter(city);
  };

  const cityButtons = cities.map(city => {
    return (
      <button
        key={city}
        className={`ui button ${activeFilter === city ? "green" : ""}`}
        onClick={() => handleFilterClick(city)}
      >
        {city}
      </button>
    );
  });
  return (
    <div className="filter-and-sort-menu">
      <div>
        <span className="filter-button-label">Filter by:</span>
        <div className="ui buttons filter-buttons">{cityButtons}</div>
      </div>
      <br />
      <div>
        <span className="filter-button-label">Sort by: </span>
        <div className="ui buttons filter-buttons">
          <button
            onClick={() => handleSortClick("byname")}
            className={`ui button ${activeSort === "byname" ? "green" : ""}`}
          >
            Name
          </button>
          <button
            onClick={() => handleSortClick("bycity")}
            className={`ui button ${activeSort === "bycity" ? "green" : ""}`}
          >
            City
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterTutors;
