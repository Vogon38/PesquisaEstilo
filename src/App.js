import React, { useState, useEffect, useRef } from 'react';
import { Survey } from 'survey-react-ui';
import { Chart } from 'chart.js/auto';
import 'survey-core/defaultV2.min.css';
import './App.css';
import { Model } from 'survey-core';
import { surveyJson } from './json.js';

function App() {
  const survey = useRef(new Model(surveyJson)).current;
  const [surveyResults, setSurveyResults] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Load Chart.js library
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js@3.7.0/dist/chart.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup Chart.js library
      document.body.removeChild(script);
    };
  }, []);

  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
    setSurveyResults(survey.data);
  });

  useEffect(() => {
    if (surveyResults) {
      const surveyQuestions = survey.getAllQuestions();
      const chartLabels = surveyQuestions.map(q => q.title);
      const chartData = surveyQuestions.map(q => {
        if (q.getType() === 'radiogroup' || q.getType() === 'checkbox') {
          return q.choices.map(c => surveyResults[q.name] ? surveyResults[q.name][c.value] : 0).reduce((a, b) => a + b, 0);
        } else {
          return surveyResults[q.name];
        }
      });

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
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (tooltipItem, data) => {
                  const value = data.datasets[0].data[tooltipItem.index];
                  return `${value} responses`;
                }
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
    <>
      <Survey model={survey} onComplete={onComplete} />
      {chartData && (
        <div className="chart-container">
          <h2>Survey Results</h2>
          <canvas id="survey-results-chart"></canvas>
        </div>
      )}
    </>
  );
}

export default App;
