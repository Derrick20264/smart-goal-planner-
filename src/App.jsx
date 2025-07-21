import React, { useEffect, useState } from "react";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";


function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("https://smart-goal-planner-lz9m.onrender.com/goals")
      .then((r) => r.json())
      .then((data) => {
        console.log("Fetched goals:", data);
        setGoals(data);
      })
      .catch((error) => console.error("Fetch error:", error));
    }, []);


  return (
    
      <div className="App">
        <h1>Smart Goal Planner</h1>
        <GoalList goals={goals} />
        <GoalForm onAddGoal={(newGoal) => setGoals([...goals, newGoal])} />
      </div>
      );
}

export default App;
