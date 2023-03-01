import 'survey-core/defaultV2.min.css';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { Survey } from 'survey-react-ui';
import { Chart } from 'chart.js/auto';
import { Model } from 'survey-core';
import { surveyJson } from './json.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const chartLabels = ["Esportivo", "Elegante", "Romântico", "Sexy", "Dramático", "Tradicional", "Criativo"];
const chartColors = ["#4dc9f6", "#f67019", "#f53794", "#537bc4", "#acc236", "#166a8f", "#00a950"];

function App() {
  const survey = useRef(new Model(surveyJson)).current;
  const [surveyResults, setSurveyResults] = useState(null);
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);

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
      const chartData = {
        labels: chartLabels,
        datasets: [
          {
            label: 'Dados das Respostas',
            data: chartLabels.map((label, index) => {
              let count = 0;
              for (let questionName in surveyResults) {
                const value = surveyResults[questionName];
                if (Array.isArray(value) && value.includes(label)) {
                  count++;
                } else if (value === label) {
                  count++;
                }
              }
              return count;
            }),
            backgroundColor: chartColors,
            borderColor: chartColors,
            borderWidth: 1,
          },
        ],
      };      
      setChartData({ labels: chartLabels, ...chartData });
    }
  }, [surveyResults]);  

  useEffect(() => {
    if (chartData) {
      const ctx = document.getElementById('survey-results-chart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              stepSize: 1,
              precision: 0,
              max: 16,
            }
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  var label = chartData.datasets[context.datasetIndex].label;
                  var value = context.dataset.data[context.dataIndex];
                  var count = value + ' escolha' + (value !== 1 ? 's' : '');
                  return label + ': ' + count;
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

  const downloadPDF = () => {
    if (!chartRef.current) {
      console.log("Error: chart ref is not available.");
      return;
    }
  
    // Get current date for footer
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  
    html2canvas(chartRef.current, {scale: 3}).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'pt', 'a4');
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
  
      // Add header
      pdf.setFontSize(26);
      pdf.setTextColor("#2b2d42");
      pdf.setFont("helvetica", "bold")
      pdf.text("Resultado da Pesquisa de Estilo", width / 2, 60, { align: "center" });
  
      // Add footer
      const footerY = pdf.internal.pageSize.getHeight() - 20;
      pdf.setFontSize(10);
      pdf.setTextColor("#777");
      const footerText = `Copyright © ${currentYear} - Andressa Sevegnani`;
      pdf.text(footerText, 40, footerY, { align: "left" });
      pdf.text("1", width - 40, footerY, { align: "right" });
  
      // Calculate the new width and height
      const scaleFactor = 0.8;
      const newWidth = (width - 80) * scaleFactor;
      const newHeight = (height - 190) * scaleFactor;
  
      // Calculate the new x-coordinate and y-coordinate
      const x = (width - newWidth) / 2;
      const y = (height - newHeight) / 2;
  
      // Add the chart image with the new width, height, x-coordinate, and y-coordinate
      pdf.addImage(imgData, 'PNG', x, y, newWidth, newHeight);
  
      // Download PDF
      pdf.save('pesquisa_de_estilo.pdf');
    });
  };  

  return (
    <div className="App">
      <div className="survey-container">
        <Survey model={survey} onComplete={onComplete} />
      </div>
      <div className="chart-container">
        {chartData && (
          <>
            <div className="button-container">
              <button onClick={downloadPDF}>Download</button>
            </div>
            <canvas id="survey-results-chart" ref={chartRef} crossOrigin="anonymous"></canvas>
          </>
        )}
      </div>
    </div>
  );  
}  

export default App;
