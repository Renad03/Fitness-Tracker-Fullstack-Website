import { useState } from 'react';
import './MacronutrientCalculator.css';

export default function MacronutrientCalculator() {
  const [calories, setCalories] = useState('');
  const [goal, setGoal] = useState('balanced');
  const [macros, setMacros] = useState(null);

  const handleGoalChange = (newGoal) => {
    setGoal(newGoal);
  };

  

  const calculateMacros = () => {
    if (!calories) return;

    const caloriesNum = parseFloat(calories);
    let protein, carbs, fats;

    switch (goal) {
      case 'lowCarb':
        protein = Math.round((caloriesNum * 0.4) / 4);
        carbs = Math.round((caloriesNum * 0.2) / 4);
        fats = Math.round((caloriesNum * 0.4) / 9);
        break;

      case 'keto':
        protein = Math.round((caloriesNum * 0.25) / 4);
        carbs = Math.round((caloriesNum * 0.05) / 4);
        fats = Math.round((caloriesNum * 0.7) / 9);
        break;

      case 'highProtein':
        protein = Math.round((caloriesNum * 0.5) / 4);
        carbs = Math.round((caloriesNum * 0.3) / 4);
        fats = Math.round((caloriesNum * 0.2) / 9);
        break;

      case 'balanced':
      default:
        protein = Math.round((caloriesNum * 0.3) / 4);
        carbs = Math.round((caloriesNum * 0.4) / 4);
        fats = Math.round((caloriesNum * 0.3) / 9);
    }

    const proteinCals = protein * 4;
    const carbsCals = carbs * 4;
    const fatsCals = fats * 9;

    const proteinPercent = Math.round((proteinCals / caloriesNum) * 100);
    const carbsPercent = Math.round((carbsCals / caloriesNum) * 100);
    const fatsPercent = Math.round((fatsCals / caloriesNum) * 100);

    setMacros({
      protein,
      carbs,
      fats,
      proteinPercent,
      carbsPercent,
      fatsPercent
    });
  };

  return (
    <div className="macro-calculator-container">
      <h2 className="macro-calculator-title">Macronutrient Calculator</h2>

      <div className="form-group">
        <label className="form-label">Daily Calories</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          className="form-input"
          placeholder="Enter your daily calorie goal"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Nutrition Goal</label>
        <div className="goal-buttons">
          <button
            className={`goal-button ${goal === 'balanced' ? 'active' : ''}`}
            onClick={() => handleGoalChange('balanced')}
          >
            Balanced
          </button>
          <button
            className={`goal-button ${goal === 'lowCarb' ? 'active' : ''}`}
            onClick={() => handleGoalChange('lowCarb')}
          >
            Low Carb
          </button>
          <button
            className={`goal-button ${goal === 'highProtein' ? 'active' : ''}`}
            onClick={() => handleGoalChange('highProtein')}
          >
            High Protein
          </button>
          <button
            className={`goal-button ${goal === 'keto' ? 'active' : ''}`}
            onClick={() => handleGoalChange('keto')}
          >
            Ketogenic
          </button>
        </div>
      </div>

      <button
        onClick={calculateMacros}
        className="calculate-button"
      >
        Calculate Macros
      </button>

      {macros && (
        <div className="macros-result-container">
          <h3 className="macros-title">Daily Macronutrients</h3>

          {}
        </div>
      )}

      <div className="nutrient-info">
        {}
      </div>
    </div>
  );
}