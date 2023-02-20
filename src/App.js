import React, { useState, useEffect, useRef } from 'react';
import { Survey } from 'survey-react-ui';
import { Chart } from 'chart.js/auto';
import 'survey-core/defaultV2.min.css';
import './App.css';
import { Model } from 'survey-core';
import { surveyJson } from './json.js';

const chartLabels = ["Esportivo", "Elegante", "Romântico", "Sexy", "Dramático", "Tradicional", "Criativo"];
const chartColors = ["#4dc9f6", "#f67019", "#f53794", "#537bc4", "#acc236", "#166a8f", "#00a950"];

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
      const chartData = chartLabels.map((label, index) => {
        let count = 0;
        for (let questionName in surveyResults) {
          const value = surveyResults[questionName];
          if (value === label) {
            count++;
          }
        }
        console.log(`${label}: ${count}`);
        return {
          label: label,
          data: [count],
          backgroundColor: chartColors[index % chartColors.length],
          borderColor: chartColors[index % chartColors.length],
          borderWidth: 1,
        };
      });
      console.log(chartData);
  
      setChartData({
        labels: [''],
        datasets: chartData,
      });
    }
  }, [surveyResults]);

  useEffect(() => {
    if (chartData && chartData.datasets) {
      const ctx = document.getElementById('survey-results-chart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
          maintainAspectRatio: false, // disable aspect ratio so chart can be responsive
          scales: {
            y: {
              beginAtZero: true,
              stepSize: 1,
              precision: 0
            }
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  var label = chartData.labels[context.dataIndex];
                  var value = context.dataset.data[context.dataIndex];
                  var count = value + ' response' + (value !== 1 ? 's' : '');
                  if (context.dataset.hasOwnProperty('datasets')) {
                    return label + ': ' + count;
                  } else {
                    return count;
                  }
                }
              }
            }
          }
        }
      });
    }
  }, [chartData]);  

  // console.log(surveyResults);
  // console.log(chartData);

  const onComplete = (survey, options) => {
    setSurveyResults(survey.data);
  };

  return (
    <>
      <Survey model={survey} onComplete={onComplete} />
      {chartData && (
        <div className="chart-container">
          <canvas id="survey-results-chart"></canvas>
        </div>
      )}
    </>
  );
}

export default App;
