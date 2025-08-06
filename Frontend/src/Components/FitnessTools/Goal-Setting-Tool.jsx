import { useState } from 'react';
import './GoalSettingTool.css'; // Import the CSS file

export default function GoalSettingTool() {
  const [goalType, setGoalType] = useState('weight');
  const [currentValue, setCurrentValue] = useState('');
  const [targetValue, setTargetValue] = useState('');
  const [timeframe, setTimeframe] = useState('12');
  const [goalPlan, setGoalPlan] = useState(null);

  const calculateGoalPlan = () => {
    if (!currentValue || !targetValue) return;

    const current = parseFloat(currentValue);
    const target = parseFloat(targetValue);
    const weeks = parseInt(timeframe);

    const totalChange = target - current;
    const weeklyChange = totalChange / weeks;

    const weeklyTargets = [];
    let runningValue = current;

    for (let i = 1; i <= weeks; i++) {
      runningValue += weeklyChange;
      weeklyTargets.push({
        week: i,
        target: Math.round(runningValue * 10) / 10,
      });
    }

    let isHealthy = true;
    let warningMessage = '';

    if (goalType === 'weight') {
      const weeklyChangeLbs = Math.abs(weeklyChange);
      if (
        (totalChange < 0 && weeklyChangeLbs > 2) ||
        (totalChange > 0 && weeklyChangeLbs > 1)
      ) {
        isHealthy = false;
        warningMessage =
          totalChange < 0
            ? 'This rate of weight loss may be too aggressive and difficult to maintain.'
            : 'This rate of weight gain may be too fast for lean muscle growth.';
      }
    }

    setGoalPlan({
      currentValue: current,
      targetValue: target,
      totalChange,
      weeklyChange,
      weeklyTargets,
      isHealthy,
      warningMessage,
      timeframeWeeks: weeks,
    });
  };

  const getUnitLabel = () => {
    switch (goalType) {
      case 'weight':
        return 'lbs';
      case 'bodyFat':
        return '%';
      case 'benchPress':
      case 'deadlift':
      case 'squat':
        return 'lbs';
      default:
        return '';
    }
  };

  const getGoalTypeLabel = () => {
    switch (goalType) {
      case 'weight':
        return 'Weight';
      case 'bodyFat':
        return 'Body Fat';
      case 'benchPress':
        return 'Bench Press';
      case 'deadlift':
        return 'Deadlift';
      case 'squat':
        return 'Squat';
      default:
        return 'Value';
    }
  };

  return (
    <div className="goal-setting-container">
      <h2 className="goal-setting-title">Fitness Goal Setting Tool</h2>

      <div className="form-group">
        <label className="form-label">Goal Type</label>
        <select
          value={goalType}
          onChange={(e) => {
            setGoalType(e.target.value);
            setGoalPlan(null);
          }}
          className="form-select"
        >
          <option value="weight">Body Weight</option>
          <option value="bodyFat">Body Fat Percentage</option>
          <option value="benchPress">Bench Press Max</option>
          <option value="squat">Squat Max</option>
          <option value="deadlift">Deadlift Max</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">
          Current {getGoalTypeLabel()} ({getUnitLabel()})
        </label>
        <input
          type="number"
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          className="form-input"
          placeholder={`Enter your current ${getGoalTypeLabel().toLowerCase()}`}
          step={goalType === 'bodyFat' ? '0.1' : '1'}
        />
      </div>

      <div className="form-group">
        <label className="form-label">
          Target {getGoalTypeLabel()} ({getUnitLabel()})
        </label>
        <input
          type="number"
          value={targetValue}
          onChange={(e) => setTargetValue(e.target.value)}
          className="form-input"
          placeholder={`Enter your target ${getGoalTypeLabel().toLowerCase()}`}
          step={goalType === 'bodyFat' ? '0.1' : '1'}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Timeframe (weeks)</label>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="form-select"
        >
          <option value="4">4 weeks (1 month)</option>
          <option value="8">8 weeks (2 months)</option>
          <option value="12">12 weeks (3 months)</option>
          <option value="16">16 weeks (4 months)</option>
          <option value="24">24 weeks (6 months)</option>
          <option value="52">52 weeks (1 year)</option>
        </select>
      </div>

      <button onClick={calculateGoalPlan} className="calculate-button">
        Create Goal Plan
      </button>

      {goalPlan && (
        <div className="goal-plan-results">
          <h3 className="results-title">Goal Summary</h3>
          <p>
            Current {getGoalTypeLabel()}:{' '}
            <span className="font-bold">
              {goalPlan.currentValue} {getUnitLabel()}
            </span>
          </p>
          <p>
            Target {getGoalTypeLabel()}:{' '}
            <span className="font-bold">
              {goalPlan.targetValue} {getUnitLabel()}
            </span>
          </p>
          <p>
            Total Change:{' '}
            <span className="font-bold">
              {goalPlan.totalChange.toFixed(1)} {getUnitLabel()}
            </span>
          </p>
          <p>
            Weekly Change:{' '}
            <span className="font-bold">
              {goalPlan.weeklyChange.toFixed(2)} {getUnitLabel()}/week
            </span>
          </p>
          <p>
            Timeframe:{' '}
            <span className="font-bold">{goalPlan.timeframeWeeks} weeks</span>
          </p>

          {!goalPlan.isHealthy && (
            <div className="warning-message">
              <p className="font-bold">⚠️ Warning:</p>
              <p>{goalPlan.warningMessage}</p>
              <p>Consider a longer timeframe for a more sustainable approach.</p>
            </div>
          )}

          <div className="weekly-targets">
            <h3 className="results-subtitle">Weekly Progress Targets</h3>
            <div className="table-container">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="py-1 text-left">Week</th>
                    <th className="py-1 text-right">
                      Target {getGoalTypeLabel()}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {goalPlan.weeklyTargets.map((week) => (
                    <tr key={week.week} className="border-b border-gray-600">
                      <td className="py-1">Week {week.week}</td>
                      <td className="py-1 text-right">
                        {week.target} {getUnitLabel()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="tips-section">
            <p className="font-bold">Tips:</p>
            {goalType === 'weight' && goalPlan.totalChange < 0 && (
              <ul className="list-disc pl-5 mt-1">
                <li>Aim for a calorie deficit of 500-1000 calories per day</li>
                <li>Include both cardio and strength training in your routine</li>
                <li>Focus on protein intake to preserve muscle mass</li>
              </ul>
            )}
            {goalType === 'weight' && goalPlan.totalChange > 0 && (
              <ul className="list-disc pl-5 mt-1">
                <li>Aim for a calorie surplus of 250-500 calories per day</li>
                <li>Prioritize strength training to build muscle</li>
                <li>Increase protein intake to support muscle growth</li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}