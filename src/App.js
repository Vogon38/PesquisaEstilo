import { useCallback, useState, useRef } from 'react';
import './App.css';

import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

StylesManager.applyTheme("defaultV2");

const surveyJson = {
  pages: [{
    elements: [{
      type: "html",
      html: "<h2>Teste de Estilo.</h2>"
    }]
  }, {
    elements: [{
      name: "descreva-sua-personalidade",
      title: "DESCREVA SUA PERSONALIDADE",
      type: "radiogroup",
      choices: [
        { value: 7, text: "Exótica, aventureira, inovadora, original, artística, imaginativa" },
        { value: 6, text: "Conservadora, séria, organizada, sistemática, eficiente, confiável" },
        { value: 5, text: "Sofisticada, moderna, firme, distante, urbana, autoconfiante" },
        { value: 4, text: "Glamorosa, sensual, ousada, magnética, provocante, atraente" },
        { value: 3, text: "Feminina, meiga, delicada, carinhosa, gentil, sensível, romântica" },
        { value: 2, text: "Exigente, refinada, bem-sucedida, reservada, educada, preparada, perspicaz" },
        { value: 1, text: "Informal, espontânea, ativa, alegre, energética, divertida, despretensiosa" }
      ],
      isRequired: true
    }]
  }, {
    elements: [{
      name: "roupa-preferida",
      title: "COMO É A SUA ROUPA PREFERIDA?",
      type: "radiogroup",
      choices: [
        { value: 7, text: "“Mix” na hora de se vestir, roupas de brechó" },
        { value: 6, text: "Roupas discretas que passem desapercebidas" },
        { value: 5, text: "Roupas estruturadas, modernas" },
        { value: 4, text: "Se ajusta perfeitamente ao meu corpo" },
        { value: 3, text: "Roupas delicadas de cores suaves" },
        { value: 2, text: "Roupas discretas mas com toques refinados" },
        { value: 1, text: "Roupas confortáveis, práticas de usar e cuidar" }
      ],
      isRequired: true
    }]
  }, {
    elements: [{
      name: "caimento-ideal",
      title: "QUAL É O CAIMENTO IDEAL DAS SUAS ROUPAS?",
      type: "radiogroup",
      choices: [
        { value: 7, text: "Gosto de peças desestruturadas, assimétricas com caimento diferente" },
        { value: 6, text: "Gosto de roupas com caimento clássico, linhas retas e discretas" },
        { value: 5, text: "A roupa precisa ser estruturada, com formas e volumes definidos e marcantes" },
        { value: 4, text: "Prefiro roupas que se ajustam ao meu corpo e valorizem partes estratégicas" },
        { value: 3, text: "Gosto de peças fluídas no corpo, com caimento leve e suave." },
        { value: 2, text: "O caimento das roupas deve ser perfeito, como se fosse feito sob medida" },
        { value: 1, text: "A roupa precisa ser solta no corpo, tenho que me movimentar confortavelmente" }
      ],
      isRequired: true
    }]
  },
  {
    elements: [{
      "name": "cores-preferidas",
      "title": "QUAIS SUAS CORES PREFERIDAS NA HORA DE MONTAR UM LOOK?",
      "type": "imagepicker",
      "choices": [
        {
          "value": "1",
          "imageLink": "/images/1/Imagem1.jpg",
          "text": "Primárias e básicas"
        },
        {
          "value": "2",
          "imageLink": "/images/1/Imagem2.jpg",
          "text": "Tom sobre tom ou mistura de cores harmônicas"
        },
        {
          "value": "3",
          "imageLink": "/images/1/Imagem3.jpg",
          "text": "Claras e pastéis"
        },
        {
          "value": "4",
          "imageLink": "/images/1/Imagem4.jpg",
          "text": "Fortes e escuras"
        },
        {
          "value": "5",
          "imageLink": "/images/1/Imagem5.jpg",
          "text": "Muito preto em contraste com branco ou cores chamativas"
        },
        {
          "value": "6",
          "imageLink": "/images/1/Imagem6.jpg",
          "text": "Cores Tradicionais"
        },
        {
          "value": "7",
          "imageLink": "/images/1/Imagem7.jpg",
          "text": "Mistura de cores diferentes e inusitadas"
        }
      ],
      "showLabel": true,
      "colCount": 2,
      "multiSelect": false
    }], 
  }],
  showQuestionNumbers: "on",
  pageNextText: "Seguinte",
  completeText: "Finalizar",
  showPrevButton: false,
  firstPageIsStarted: true,
  startSurveyText: "Realize o teste",
  completedHtml: "Obrigada!",
  showPreviewBeforeComplete: "showAnsweredQuestions"
};

function App() {
  // useRef enables the Model object to persist between state changes
  const survey = useRef(new Model(surveyJson)).current;
  const [surveyResults, setSurveyResults] = useState("");
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);

  const displayResults = useCallback((sender) => {
    setSurveyResults(JSON.stringify(sender.data, null, 4));
    setIsSurveyCompleted(true);
  }, []);

  survey.onComplete.add(displayResults);

  return (
    <>
      <Survey model={survey} id="surveyContainer" />
      {isSurveyCompleted && (
        <>
          <p>Result JSON:</p>
          <code style={{ whiteSpace: 'pre' }}>
            {surveyResults}
          </code>
        </>
      )
      }
    </>
  );
}

export default App;
