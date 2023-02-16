import './App.css';
import { useState, useCallback } from 'react';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { Doughnut } from 'react-chartjs-2';
import { surveyJson } from './json';

StylesManager.applyTheme("modern");

function App() {
  const [surveyResults, setSurveyResults] = useState(null);
  const [chartData, setChartData] = useState(null);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom'
    }
  };

  const calculateChartData = (results) => {
    const data = {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    };
    for (const key in results) {
      const answer = results[key];
      data[answer] += 1;
    }
    return {
      labels: Object.keys(data),
      datasets: [
        {
          data: Object.values(data),
          backgroundColor: [
            '#36A2EB',
            '#FF6384',
            '#FFCE56',
            '#8e5ea2',
            '#3cba9f'
          ]
        }
      ]
    };
  };

  const displayResults = useCallback((sender) => {
    setSurveyResults(sender.data);
    setChartData(calculateChartData(sender.data));
  }, []);

  const renderChart = () => {
    if (chartData) {
      return (
        <div style={{ width: '300px', height: '300px' }}>
          <Doughnut data={chartData} options={chartOptions} />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Survey
          model={new Model(surveyJson)}
          onComplete={displayResults}
        />
        {surveyResults && (
          <pre>{JSON.stringify(surveyResults, null, 2)}</pre>
        )}
        {renderChart()}
      </header>
    </div>
  );
}

export default App;
