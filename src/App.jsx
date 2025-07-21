import React, { useState } from "react";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";

function App() {
  

  return (
    
      <div>
        <h1>Smart Goal Planner</h1>
        <Goalform />
        <GoalList />
      </div>
      );
}

export default App;
