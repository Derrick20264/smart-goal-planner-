import React from "react";

function GoalItem({ goal }) {
  const { name, targetAmount, currentAmount, description } = goal;

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>
        Progress: {currentAmount} / {targetAmount}
      </p>
    </div>
  );
}

export default GoalItem;
