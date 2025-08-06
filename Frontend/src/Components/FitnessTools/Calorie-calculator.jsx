import { useState } from 'react';
import './Calorie-calculator.css';

export default function CalorieCalculator() {
  const [gender, setGender] = useState('female');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activity, setActivity] = useState('moderate');
  const [goal, setGoal] = useState('maintain');
  const [unit, setUnit] = useState('metric');
  const [result, setResult] = useState(null);

  const calculateCalories = () => {
    if (!age || !weight || !height) return;

    let weightKg = weight;
    let heightCm = height;

    if (unit === 'imperial') {
      weightKg = weight * 0.453592;
      heightCm = height * 2.54;
    }

    let bmr;
    if (gender === 'male') {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
    }

    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    const tdee = bmr * activityMultipliers[activity];

    let goalCalories;
    switch (goal) {
      case 'lose':
        goalCalories = tdee - 500;
        break;
      case 'gain':
        goalCalories = tdee + 500;
        break;
      default:
        goalCalories = tdee;
    }

    setResult({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      goalCalories: Math.round(goalCalories),
    });
  };

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    setWeight('');
    setHeight('');
  };

  return (
    <div className="calculator-container">
      <h1>Calorie Calculator</h1>

      {/* Unit Toggle */}
      <div className="unit-toggle">
        <button
          className={unit === 'metric' ? 'active' : ''}
          onClick={() => handleUnitChange('metric')}
        >
          Metric
        </button>
        <button
          className={unit === 'imperial' ? 'active' : ''}
          onClick={() => handleUnitChange('imperial')}
        >
          Imperial
        </button>
      </div>

      {/* Gender */}
      <div className="form-group">
        <label>Gender</label>
        <div className="gender-toggle">
          <button
            className={gender === 'male' ? 'active' : ''}
            onClick={() => setGender('male')}
          >
            Male
          </button>
          <button
            className={gender === 'female' ? 'active' : ''}
            onClick={() => setGender('female')}
          >
            Female
          </button>
        </div>
      </div>

      {/* Age */}
      <div className="form-group">
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
          min="15"
          max="100"
        />
      </div>

      {/* Weight */}
      <div className="form-group">
        <label>{unit === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder={unit === 'metric' ? 'Enter weight in kg' : 'Enter weight in lbs'}
        />
      </div>

      {/* Height */}
      <div className="form-group">
        <label>{unit === 'metric' ? 'Height (cm)' : 'Height (inches)'}</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder={unit === 'metric' ? 'Enter height in cm' : 'Enter height in inches'}
        />
      </div>

      {/* Activity */}
      <div className="form-group">
        <label>Activity Level</label>
        <select value={activity} onChange={(e) => setActivity(e.target.value)}>
          <option value="sedentary">Sedentary (little or no exercise)</option>
          <option value="light">Lightly active (1-3 days/week)</option>
          <option value="moderate">Moderately active (3-5 days/week)</option>
          <option value="active">Very active (6-7 days/week)</option>
          <option value="veryActive">Extra active (physical job or training twice a day)</option>
        </select>
      </div>

      {/* Goal */}
      <div className="form-group">
        <label>Goal</label>
        <div className="goal-buttons">
          <button
            className={goal === 'lose' ? 'active' : ''}
            onClick={() => setGoal('lose')}
          >
            Lose Weight
          </button>
          <button
            className={goal === 'maintain' ? 'active' : ''}
            onClick={() => setGoal('maintain')}
          >
            Maintain
          </button>
          <button
            className={goal === 'gain' ? 'active' : ''}
            onClick={() => setGoal('gain')}
          >
            Gain Weight
          </button>
        </div>
      </div>

      {/* Calculate Button */}
      <button onClick={calculateCalories} className="calculate-button">
        Calculate Calories
      </button>

      {/* Result */}
      {result && (
        <div className="form-group" style={{ marginTop: '30px', textAlign: 'center' }}>
          <p>BMR: <strong>{result.bmr} cal/day</strong></p>
          <p>TDEE: <strong>{result.tdee} cal/day</strong></p>
          <p style={{ fontSize: '20px', marginTop: '20px' }}>
            Recommended Intake: <strong>{result.goalCalories} cal/day</strong>
          </p>
        </div>
      )}
    </div>
  );
}
