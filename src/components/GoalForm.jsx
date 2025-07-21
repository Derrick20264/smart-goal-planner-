// src/components/GoalForm.jsx
import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    description: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.name && formData.targetAmount) {
      onAddGoal({ ...formData, currentAmount: 0 });
      setFormData({ name: "", targetAmount: "", description: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Goal Name" value={formData.name} onChange={handleChange} required />
      <input name="targetAmount" placeholder="Target Amount" value={formData.targetAmount} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
