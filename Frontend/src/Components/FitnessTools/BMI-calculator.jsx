import { useState } from 'react';
import './BMI-Calculator.css'; 

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState('metric'); 
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) return;

    let bmiValue;
    if (unit === 'metric') {
      bmiValue = (weight / Math.pow(height / 100, 2)).toFixed(1);
    } else {
      bmiValue = ((weight * 703) / Math.pow(height, 2)).toFixed(1);
    }

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
  };

  return (
    <div className="bmi-calculator-container">
      <h2 className="bmi-calculator-title">BMI Calculator</h2>

      <div className="unit-buttons">
        <button
          className={`unit-button unit-button-metric ${unit === 'metric' ? 'active' : ''}`}
          onClick={() => handleUnitChange('metric')}
        >
          Metric
        </button>
        <button
          className={`unit-button unit-button-imperial ${unit === 'imperial' ? 'active' : ''}`}
          onClick={() => handleUnitChange('imperial')}
        >
          Imperial
        </button>
      </div>

      <div className="form-group">
        <label className="form-label">
          {unit === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="form-input"
          placeholder={unit === 'metric' ? 'Enter weight in kg' : 'Enter weight in lbs'}
        />
      </div>

      <div className="form-group">
        <label className="form-label">
          {unit === 'metric' ? 'Height (cm)' : 'Height (inches)'}
        </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="form-input"
          placeholder={unit === 'metric' ? 'Enter height in cm' : 'Enter height in inches'}
        />
      </div>

      <button
        onClick={calculateBMI}
        className="calculate-button"
      >
        Calculate BMI
      </button>

      {bmi && (
        <div className="result-container">
          <div className="text-center">
            <p className="result-bmi">Your BMI: <span className="font-bold">{bmi}</span></p>
            <p className="result-category">Category: <span className="font-bold">{category}</span></p>
          </div>
        </div>
      )}

      <div className="bmi-categories">
        <p>BMI Categories:</p>
        <ul className="bmi-categories-list">
          <li>Underweight: Less than 18.5</li>
          <li>Normal weight: 18.5 - 24.9</li>
          <li>Overweight: 25 - 29.9</li>
          <li>Obese: 30 or higher</li>
        </ul>
      </div>
    </div>
  );
}