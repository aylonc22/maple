const Filter = ({}) => {
  return (
    <div className="filter">
      <div className="filterButton">
        <img
          src="https://maplelegends.com/static/images/rank/all.png"
          alt="all"
          title="all"
        />
      </div>
      <div className="filterButton">
        <img
          src="https://maplelegends.com/static/images/rank/warrior.png"
          alt="warrior"
          title="warrior"
        />
      </div>
      <div className="filterButton">
        <img
          src="https://maplelegends.com/static/images/rank/magician.png"
          alt="magician"
          title="magician"
        />
      </div>
      <input
        className="search"
        type="text"
        placeholder="search"
        title="search username"
      />
      <div className="searchButton">search</div>
    </div>
  );
};

export default Filter;
