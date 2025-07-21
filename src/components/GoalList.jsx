import React from "react";
import GoalItem from "./GoalItem";

function GoalList({ goals }) {
  return (
    <div>
      {goals.map((goal, index) => (
        <GoalItem key={index} goal={goal} />
      ))}
    </div>
  );
}

export default GoalList;
