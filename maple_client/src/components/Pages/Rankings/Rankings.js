import React from "react";
import Filter from "./filter";
import Players from "./players";
import "./Rankings.css";

const Rankings = ({}) => {
  console.log(Players);
  return (
    <div className="Rankings">
      <div className="rankingsTitle">Rankings</div>
      <Filter />
      <div className="table">
        <div className="row">
          <div>Rank</div>
          <div>Character</div>
          <div>Job</div>
          <div>Fame</div>
          <div>Level</div>
        </div>
        {Players.map((player) => (
          <div className="row">
            <div>{player.rank}</div>
            <img src={player.img}></img>
            <div>{player.job}</div>
            <div>{player.fame}</div>
            <div>{player.level}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rankings;
