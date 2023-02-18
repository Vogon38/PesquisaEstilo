import React, { useState, useEffect } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import Chart from 'chart.js';
import './App.css';
import { surveyJson } from './json.js';

function App() {
  const [surveyResults, setSurveyResults] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (surveyResults) {
      const choices = surveyResults.questions[0].choices;
      const chartLabels = choices.map(choice => choice.text);
      const chartData = choices.map(choice => surveyResults.data[0][choice.value]);

      setChartData({
        labels: chartLabels,
        datasets: [{
          label: 'Responses',
          data: chartData,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1
        }]
      });
    }
  }, [surveyResults]);

  useEffect(() => {
    if (chartData) {
      const ctx = document.getElementById('survey-results-chart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          tooltips: {
            callbacks: {
              label: (tooltipItem, data) => {
                const value = data.datasets[0].data[tooltipItem.index];
                return `${value} responses`;
              }
            }
          }
        }
      });
    }
  }, [chartData]);

  const onComplete = (survey, options) => {
    setSurveyResults(survey.data);
  };

  return (
    <div className="App">
      <div className="survey-container">
        <Survey.Survey json={surveyJson} onComplete={onComplete} />
      </div>
      {chartData && (
        <div className="chart-container">
          <h2>Survey Results</h2>
          <canvas id="survey-results-chart"></canvas>
        </div>
      )}
    </div>
  );
}

export default App;
