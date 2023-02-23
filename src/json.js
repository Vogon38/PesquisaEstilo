export const surveyJson = {
  pages: [{
    elements: [{
      type: "html",
      html: "<h2>Teste de Estilo.</h2>"
    }]
  }, {
    elements: [{
      name: "descreva-sua-personalidade",
      title: "DESCREVA SUA PERSONALIDADE",
      type: "checkbox",
      choices: [
        { value: "Esportivo", text: "Informal, espontânea, ativa, alegre, energética, divertida, despretensiosa" },
        { value: "Elegante", text: "Exigente, refinada, bem-sucedida, reservada, educada, preparada, perspicaz" },
        { value: "Romântico", text: "Feminina, meiga, delicada, carinhosa, gentil, sensível, romântica" },
        { value: "Sexy", text: "Glamorosa, sensual, ousada, magnética, provocante, atraente" },
        { value: "Dramático", text: "Sofisticada, moderna, firme, distante, urbana, autoconfiante" },
        { value: "Tradicional", text: "Conservadora, séria, organizada, sistemática, eficiente, confiável" },
        { value: "Criativo", text: "Exótica, aventureira, inovadora, original, artística, imaginativa" }
      ],
      "isRequired": true,
      "maxSelectedChoices": 2
    }]
  }, {
    elements: [{
      name: "roupa-preferida",
      title: "COMO É A SUA ROUPA PREFERIDA?",
      type: "checkbox",
      choices: [
        { value: "Esportivo", text: "Roupas confortáveis, práticas de usar e cuidar" },
        { value: "Elegante", text: "Roupas discretas mas com toques refinados" },
        { value: "Romântico", text: "Roupas delicadas de cores suaves" },
        { value: "Sexy", text: "Se ajusta perfeitamente ao meu corpo" },
        { value: "Dramático", text: "Roupas estruturadas, modernas" },
        { value: "Tradicional", text: "Roupas discretas que passem desapercebidas" },
        { value: "Criativo", text: "“Mix” na hora de se vestir, roupas de brechó" }
      ],
      "isRequired": true,
      "maxSelectedChoices": 2
    }]
  }, {
    elements: [{
      name: "caimento-ideal",
      title: "QUAL É O CAIMENTO IDEAL DAS SUAS ROUPAS?",
      type: "checkbox",
      choices: [
        { value: "Esportivo", text: "A roupa precisa ser solta no corpo, tenho que me movimentar confortavelmente" },
        { value: "Elegante", text: "O caimento das roupas deve ser perfeito, como se fosse feito sob medida" },
        { value: "Romântico", text: "Gosto de peças fluídas no corpo, com caimento leve e suave" },
        { value: "Sexy", text: "Prefiro roupas que se ajustam ao meu corpo e valorizem partes estratégicas" },
        { value: "Dramático", text: "A roupa precisa ser estruturada, com formas e volumes definidos e marcantes" },
        { value: "Tradicional", text: "Gosto de roupas com caimento clássico, linhas retas e discretas" },
        { value: "Criativo", text: "Gosto de peças desestruturadas, assimétricas com caimento diferente" }
      ],
      "isRequired": true,
      "maxSelectedChoices": 2
    }]
  },
  {
    elements: [{
      "name": "cores-preferidas",
      "title": "QUAIS SUAS CORES PREFERIDAS NA HORA DE MONTAR UM LOOK?",
      "type": "imagepicker",
      "choices": [
        {
          "value": "Esportivo",
          "imageLink": "/images/1/Imagem1.jpg",
          text: "Primárias e básicas"
        },
        {
          "value": "Elegante",
          "imageLink": "/images/1/Imagem2.jpg",
          text: "Tom sobre tom"
        },
        {
          "value": "Romântico",
          "imageLink": "/images/1/Imagem3.jpg",
          text: "Claras e pastéis"
        },
        {
          "value": "Sexy",
          "imageLink": "/images/1/Imagem4.jpg",
          text: "Fortes e escuras"
        },
        {
          "value": "Dramático",
          "imageLink": "/images/1/Imagem5.jpg",
          text: "Chamativas e contrastantes"
        },
        {
          "value": "Tradicional",
          "imageLink": "/images/1/Imagem6.jpg",
          text: "Cores Tradicionais"
        },
        {
          "value": "Criativo",
          "imageLink": "/images/1/Imagem7.jpg",
          text: "Mistura de cores intensas"
        }
      ],
      "isRequired": true,
      "showLabel": true,
      "colCount": 2,
      "multiSelect": true,
      "validators": [{
        "type": "answercount",
        "minCount": 1,
        "maxCount": 2
      }],
    }]
  },
  {
    elements: [{
      "name": "estampas-preferidas",
      "title": "QUAIS ESTAMPAS VOCÊ MAIS GOSTA?",
      "type": "imagepicker",
      "choices": [
        {
          "value": "Esportivo",
          "imageLink": "/images/2/Imagem1.jpg",
          text: "Botânicas e alegres"
        },
        {
          "value": "Elegante",
          "imageLink": "/images/2/Imagem2.jpg",
          text: "Tweed e jacquards elegantes"
        },
        {
          "value": "Romântico",
          "imageLink": "/images/2/Imagem3.jpg",
          text: "Poá e florais delicados"
        },
        {
          "value": "Sexy",
          "imageLink": "/images/2/Imagem4.jpg",
          text: "Animal Print e logomania chamativas"
        },
        {
          "value": "Dramático",
          "imageLink": "/images/2/Imagem5.jpg",
          text: "Contrastantes e diferentes"
        },
        {
          "value": "Tradicional",
          "imageLink": "/images/2/Imagem6.jpg",
          text: "Listra e xadrez básico"
        },
        {
          "value": "Criativo",
          "imageLink": "/images/2/Imagem7.jpg",
          text: "Chinesas e mix de estampas"
        }
      ],
      "isRequired": true,
      "showLabel": true,
      "colCount": 2,
      "multiSelect": true,
      "validators": [{
        "type": "answercount",
        "minCount": 1,
        "maxCount": 2
      }],
    }],
  }, {
    elements: [{
      name: "detalhes-adora",
      title: "QUAIS DETALHES VOCÊ ADORA?",
      type: "checkbox",
      choices: [
        { value: "Esportivo", text: "Gosto de roupas sem detalhes. Sou muito básica para vestir" },
        { value: "Elegante", text: "Gosto de detalhes sofisticados que dão um ar refinado para a roupa" },
        { value: "Romântico", text: "Adoro detalhes femininos como babados, rendas, pregas e outros" },
        { value: "Sexy", text: "Uso decotes, fendas e outros detalhes que valorizam o meu corpo" },
        { value: "Dramático", text: "Preciso de poucos detalhes porém grandes, para criar um efeito marcante" },
        { value: "Tradicional", text: "Prefiro detalhes discretos" },
        { value: "Criativo", text: "Uso detalhes diferentes do padrão" }
      ],
      "isRequired": true,
      "maxSelectedChoices": 2
    }]
  }, {
    elements: [{
      name: "estilo-preferido",
      title: "QUAL O SEU ESTILO DE ROUPA PREFERIDO?",
      type: "checkbox",
      choices: [
        { value: "Esportivo", text: "Gosto do básico, confortável, prático e às vezes com uma pegada rústica" },
        { value: "Elegante", text: "Adoro peças clean, clássicas mas sofisticadas. Menos é mais!" },
        { value: "Romântico", text: "Minhas roupas são delicadas, femininas e românticas" },
        { value: "Sexy", text: "Minhas roupas são sensuais na medida certa" },
        { value: "Dramático", text: "Minhas roupas são bastante urbanas e sempre tenho peças impactantes" },
        { value: "Tradicional", text: "Tenho muitas roupas formais e tradicionais. Elas são atemporais" },
        { value: "Criativo", text: "Gosto de roupas diferentes e pronto!" }
      ],
      "isRequired": true,
      "maxSelectedChoices": 2
    }]
  }, {
    elements: [{
      name: "compras",
      title: "COMO GOSTA DE FAZER SUAS COMPRAS?",
      type: "checkbox",
      choices: [
        { value: "Esportivo", text: "Compro quando preciso, não gosto de perder tempo, gosto de facilidades, detesto provar muitas roupas" },
        { value: "Elegante", text: "Compro pensando em atualizar o que eu já tenho, gosto de qualidade e atualidade" },
        { value: "Romântico", text: "Adoro ir as compras, compro por prazer e adoro tudo que tenha detalhes delicados" },
        { value: "Sexy", text: "Adoro comprar peças que valorizam o meu corpo, gosto de tendência também" },
        { value: "Dramático", text: "Compro o que está na vitrines, nas novelas, nas revistas, adoro lançamentos" },
        { value: "Tradicional", text: "Faço compras planejadas, gosto de qualidade e não ligo pra moda" },
        { value: "Criativo", text: "Adoro lugares alternativos, brechós, feiras de artesanatos, pois adoro o incomum" }
      ],
      "isRequired": true,
      "maxSelectedChoices": 2
    }]
  }, {
    elements: [{
      name: "tecidos",
      title: "VOCÊ ESCOLHE CERTOS TECIDOS PORQUE ELES",
      type: "checkbox",
      choices: [
        { value: "Esportivo", text: "São fáceis de cuidar" },
        { value: "Elegante", text: "São sofisticados" },
        { value: "Romântico", text: "São delicados" },
        { value: "Sexy", text: "São perfeitos no corpo" },
        { value: "Dramático", text: "São atuais, estão na moda" },
        { value: "Tradicional", text: "São de qualidade" },
        { value: "Criativo", text: "São interessantes, diferentes" }
      ],
      "isRequired": true,
      "maxSelectedChoices": 2
    }]
  }, {
    elements: [{
      name: "sapatos",
      title: "COMO SÃO SEUS SAPATOS PREFERIDOS?",
      type: "checkbox",
      choices: [
        { value: "Esportivo", text: "São essencialmente confortáveis" },
        { value: "Elegante", text: "São essencialmente sofisticados" },
        { value: "Romântico", text: "São essencialmente delicados" },
        { value: "Sexy", text: "São essencialmente perfeitos para meu corpo" },
        { value: "Dramático", text: "São essencialmente lançamentos" },
        { value: "Tradicional", text: "São essencialmente duráveis" },
        { value: "Criativo", text: "São essencialmente diferentes" }
      ],
      "isRequired": true,
      "maxSelectedChoices": 2
    }]
  }, {
    elements: [{
      "name": "calcas-preferidas",
      "title": "QUAL VOCÊ ADORA?",
      "type": "imagepicker",
      "choices": [
        {
          "value": "Esportivo",
          "imageLink": "/images/3/Imagem1.png",
          "text": "1",
        },
        {
          "value": "Elegante",
          "imageLink": "/images/3/Imagem2.jpg",
          "text": "2",
        },
        {
          "value": "Romântico",
          "imageLink": "/images/3/Imagem3.png",
          "text": "3",
        },
        {
          "value": "Sexy",
          "imageLink": "/images/3/Imagem4.jpg",
          "text": "4",
        },
        {
          "value": "Dramático",
          "imageLink": "/images/3/Imagem5.jpg",
          "text": "5",
        },
        {
          "value": "Tradicional",
          "imageLink": "/images/3/Imagem6.jpg",
          "text": "6",
        },
        {
          "value": "Criativo",
          "imageLink": "/images/3/Imagem7.jpg",
          "text": "7",
        }
      ],
      "isRequired": true,
      "showLabel": true,
      "colCount": 2,
      "multiSelect": true,
      "validators": [{
        "type": "answercount",
        "minCount": 1,
        "maxCount": 2
      }],
    }]
  }, {
    elements: [{
      "name": "sapatos-preferidas",
      "title": "QUAL VOCÊ ADORA?",
      "type": "imagepicker",
      "choices": [
        {
          "value": "Esportivo",
          "imageLink": "/images/4/Imagem1.jpg",
          "text": "1",
        },
        {
          "value": "Elegante",
          "imageLink": "/images/4/Imagem2.png",
          "text": "2",
        },
        {
          "value": "Romântico",
          "imageLink": "/images/4/Imagem3.jpg",
          "text": "3",
        },
        {
          "value": "Sexy",
          "imageLink": "/images/4/Imagem4.png",
          "text": "4",
        },
        {
          "value": "Dramático",
          "imageLink": "/images/4/Imagem5.png",
          "text": "5",
        },
        {
          "value": "Tradicional",
          "imageLink": "/images/4/Imagem6.jpg",
          "text": "6",
        },
        {
          "value": "Criativo",
          "imageLink": "/images/4/Imagem7.jpg",
          "text": "7",
        }
      ],
      "isRequired": true,
      "showLabel": true,
      "colCount": 2,
      "multiSelect": true,
      "validators": [{
        "type": "answercount",
        "minCount": 1,
        "maxCount": 2
      }],
    }]
  }, {
    elements: [{
      "name": "saias-preferidas",
      "title": "QUAL VOCÊ ADORA?",
      "type": "imagepicker",
      "choices": [
        {
          "value": "Esportivo",
          "imageLink": "/images/6/Imagem1.jpg",
          "text": "1",
        },
        {
          "value": "Elegante",
          "imageLink": "/images/6/Imagem2.jpg",
          "text": "2",
        },
        {
          "value": "Romântico",
          "imageLink": "/images/6/Imagem3.jpg",
          "text": "3",
        },
        {
          "value": "Sexy",
          "imageLink": "/images/6/Imagem4.jpg",
          "text": "4",
        },
        {
          "value": "Dramático",
          "imageLink": "/images/6/Imagem5.jpg",
          "text": "5",
        },
        {
          "value": "Tradicional",
          "imageLink": "/images/6/Imagem6.png",
          "text": "6",
        },
        {
          "value": "Criativo",
          "imageLink": "/images/6/Imagem7.jpg",
          "text": "7",
        }
      ],
      "isRequired": true,
      "showLabel": true,
      "colCount": 2,
      "multiSelect": true,
      "validators": [{
        "type": "answercount",
        "minCount": 1,
        "maxCount": 2
      }],
    }]
  }, {
    elements: [{
      "name": "bolsas-preferidas",
      "title": "QUAL VOCÊ ADORA?",
      "type": "imagepicker",
      "choices": [
        {
          "value": "Esportivo",
          "imageLink": "/images/7/Imagem1.jpg",
          "text": "1",
        },
        {
          "value": "Elegante",
          "imageLink": "/images/7/Imagem2.jpg",
          "text": "2",
        },
        {
          "value": "Romântico",
          "imageLink": "/images/7/Imagem3.jpg",
          "text": "3",
        },
        {
          "value": "Sexy",
          "imageLink": "/images/7/Imagem4.jpg",
          "text": "4",
        },
        {
          "value": "Dramático",
          "imageLink": "/images/7/Imagem5.png",
          "text": "5",
        },
        {
          "value": "Tradicional",
          "imageLink": "/images/7/Imagem6.jpg",
          "text": "6",
        },
        {
          "value": "Criativo",
          "imageLink": "/images/7/Imagem7.jpg",
          "text": "7",
        }
      ],
      "isRequired": true,
      "showLabel": true,
      "colCount": 2,
      "multiSelect": true,
      "validators": [{
        "type": "answercount",
        "minCount": 1,
        "maxCount": 2
      }],
    }]
  }, {
    elements: [{
      "name": "oculos-preferidas",
      "title": "QUAL VOCÊ ADORA?",
      "type": "imagepicker",
      "choices": [
        {
          "value": "Esportivo",
          "imageLink": "/images/8/Imagem1.jpg",
          "text": "1",
        },
        {
          "value": "Elegante",
          "imageLink": "/images/8/Imagem2.jpg",
          "text": "2",
        },
        {
          "value": "Romântico",
          "imageLink": "/images/8/Imagem3.png",
          "text": "3",
        },
        {
          "value": "Sexy",
          "imageLink": "/images/8/Imagem4.jpg",
          "text": "4",
        },
        {
          "value": "Dramático",
          "imageLink": "/images/8/Imagem5.jpg",
          "text": "5",
        },
        {
          "value": "Tradicional",
          "imageLink": "/images/8/Imagem6.jpg",
          "text": "6",
        },
        {
          "value": "Criativo",
          "imageLink": "/images/8/Imagem7.jpg",
          "text": "7",
        }
      ],
      "isRequired": true,
      "showLabel": true,
      "colCount": 2,
      "multiSelect": true,
      "validators": [{
        "type": "answercount",
        "minCount": 1,
        "maxCount": 2
      }],
    }]
  }, {
    elements: [{
      "name": "acessorios-preferidas",
      "title": "QUAL VOCÊ ADORA?",
      "type": "imagepicker",
      "choices": [
        {
          "value": "Esportivo",
          "imageLink": "/images/9/Imagem1.png",
          "text": "1",
        },
        {
          "value": "Elegante",
          "imageLink": "/images/9/Imagem2.png",
          "text": "2",
        },
        {
          "value": "Romântico",
          "imageLink": "/images/9/Imagem3.png",
          "text": "3",
        },
        {
          "value": "Sexy",
          "imageLink": "/images/9/Imagem4.png",
          "text": "4",
        },
        {
          "value": "Dramático",
          "imageLink": "/images/9/Imagem5.png",
          "text": "5",
        },
        {
          "value": "Tradicional",
          "imageLink": "/images/9/Imagem6.png",
          "text": "6",
        },
        {
          "value": "Criativo",
          "imageLink": "/images/9/Imagem7.png",
          "text": "7",
        }
      ],
      "isRequired": true,
      "showLabel": true,
      "colCount": 2,
      "multiSelect": true,
      "validators": [{
        "type": "answercount",
        "minCount": 1,
        "maxCount": 2
      }],
    }],
    "isRequired": true,
  }],
  showQuestionNumbers: "on",
  pageNextText: "Seguinte",
  pagePrevText: "Anterior",
  completeText: "Enviar",
  showPrevButton: true,
  firstPageIsStarted: true,
  startSurveyText: "Iniciar",
  completedHtml: "Obrigada!",
  // showPreviewBeforeComplete: "showAnsweredQuestions"
};
