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
            "text": "Tom sobre tom"
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
            "text": "Chamativas e contrastantes"
          },
          {
            "value": "6",
            "imageLink": "/images/1/Imagem6.jpg",
            "text": "Cores Tradicionais"
          },
          {
            "value": "7",
            "imageLink": "/images/1/Imagem7.jpg",
            "text": "Mistura de cores intensas"
          }
        ],
        isRequired: true,
        "showLabel": true,
        "colCount": 2,
        "multiSelect": false
      }]
    },
    {
      elements: [{
        "name": "estampas-preferidas",
        "title": "QUAIS ESTAMPAS VOCÊ MAIS GOSTA?",
        "type": "imagepicker",
        "choices": [
          {
            "value": "1",
            "imageLink": "/images/2/Imagem1.jpg",
            "text": "Botânicas e alegres"
          },
          {
            "value": "2",
            "imageLink": "/images/2/Imagem2.jpg",
            "text": "Tweed e jacquards elegantes"
          },
          {
            "value": "3",
            "imageLink": "/images/2/Imagem3.jpg",
            "text": "Poá e florais delicados"
          },
          {
            "value": "4",
            "imageLink": "/images/2/Imagem4.jpg",
            "text": "Animal Print e logomania chamativas"
          },
          {
            "value": "5",
            "imageLink": "/images/2/Imagem5.jpg",
            "text": "Contrastantes e diferentes"
          },
          {
            "value": "6",
            "imageLink": "/images/2/Imagem6.jpg",
            "text": "Listra e xadrez básico"
          },
          {
            "value": "7",
            "imageLink": "/images/2/Imagem7.jpg",
            "text": "Chinesas e mix de estampas"
          }
        ],
        isRequired: true,
        "showLabel": true,
        "colCount": 2,
        "multiSelect": false
      }],
    }, {
      elements: [{
        name: "detalhes-adora",
        title: "QUAIS DETALHES VOCÊ ADORA?",
        type: "radiogroup",
        choices: [
          { value: 7, text: "Uso detalhes diferentes do padrão" },
          { value: 6, text: "Prefiro detalhes discretos" },
          { value: 5, text: "Preciso de poucos detalhes porém grandes, para criar um efeito marcante" },
          { value: 4, text: "Uso decotes, fendas e outros detalhes que valorizam o meu corpo" },
          { value: 3, text: "Adoro detalhes femininos como babados, rendas, pregas e outros" },
          { value: 2, text: "Gosto de detalhes sofisticados que dão um ar refinado para a roupa" },
          { value: 1, text: "Gosto de roupas sem detalhes. Sou muito básica para vestir" }
        ],
        isRequired: true
      }]
    }, {
      elements: [{
        name: "estilo-preferido",
        title: "QUAL O SEU ESTILO DE ROUPA PREFERIDO?",
        type: "radiogroup",
        choices: [
          { value: 7, text: "Gosto de roupas diferentes e pronto!" },
          { value: 6, text: "Tenho muitas roupas formais e tradicionais. Elas são atemporais" },
          { value: 5, text: "Minhas roupas são bastante urbanas e sempre tenho peças impactantes" },
          { value: 4, text: "Minhas roupas são sensuais na medida certa" },
          { value: 3, text: "Minhas roupas são delicadas, femininas e românticas" },
          { value: 2, text: "Adoro peças clean, clássicas mas sofisticadas. Menos é mais!" },
          { value: 1, text: "Gosto do básico, confortável, prático e às vezes com uma pegada rústica" }
        ],
        isRequired: true
      }]
    }, {
      elements: [{
        name: "compras",
        title: "COMO GOSTA DE FAZER SUAS COMPRAS?",
        type: "radiogroup",
        choices: [
          { value: 7, text: "Adoro lugares alternativos, brechós, feiras de artesanatos, pois adoro o incomum" },
          { value: 6, text: "Faço compras planejadas, gosto de qualidade e não ligo pra moda" },
          { value: 5, text: "Compro o que está na vitrines, nas novelas, nas revistas, adoro lançamentos" },
          { value: 4, text: "Adoro comprar peças que valorizam o meu corpo, gosto de tendência também" },
          { value: 3, text: "Adoro ir as compras, compro por prazer e adoro tudo que tenha detalhes delicados" },
          { value: 2, text: "Compro pensando em atualizar o que eu já tenho, gosto de qualidade e atualidade" },
          { value: 1, text: "Compro quando preciso, não gosto de perder tempo, gosto de facilidades, detesto provar muitas roupas" }
        ],
        isRequired: true
      }]
    }, {
      elements: [{
        name: "tecidos",
        title: "VOCÊ ESCOLHE CERTOS TECIDOS PORQUE ELES",
        type: "radiogroup",
        choices: [
          { value: 7, text: "São interessantes, diferentes" },
          { value: 6, text: "São de qualidade" },
          { value: 5, text: "São atuais, estão na moda" },
          { value: 4, text: "São perfeitos no corpo" },
          { value: 3, text: "São delicados" },
          { value: 2, text: "São sofisticados" },
          { value: 1, text: "São fáceis de cuidar" }
        ],
        isRequired: true
      }]
    }, {
      elements: [{
        name: "sapatos",
        title: "COMO SÃO SEUS SAPATOS PREFERIDOS?",
        type: "radiogroup",
        choices: [
          { value: 7, text: "São essencialmente diferentes" },
          { value: 6, text: "São essencialmente duráveis" },
          { value: 5, text: "São essencialmente lançamentos" },
          { value: 4, text: "São essencialmente perfeitos para meu corpo" },
          { value: 3, text: "São essencialmente delicados" },
          { value: 2, text: "São essencialmente sofisticados" },
          { value: 1, text: "São essencialmente confortáveis" }
        ],
        isRequired: true
      }]
     }, {
      elements: [{
        "name": "calcas-preferidas",
        "title": "QUAL VOCÊ ADORA?",
        "type": "imagepicker",
        "choices": [
          {
            "value": "1",
            "imageLink": "/images/3/Imagem1.png",
          },
          {
            "value": "2",
            "imageLink": "/images/3/Imagem2.jpg",
          },
          {
            "value": "3",
            "imageLink": "/images/3/Imagem3.png",
          },
          {
            "value": "4",
            "imageLink": "/images/3/Imagem4.jpg",
          },
          {
            "value": "5",
            "imageLink": "/images/3/Imagem5.jpg",
          },
          {
            "value": "6",
            "imageLink": "/images/3/Imagem6.jpg",
          },
          {
            "value": "7",
            "imageLink": "/images/3/Imagem7.jpg",
          }
        ],
        isRequired: true,
        "showLabel": true,
        "colCount": 2,
        "multiSelect": false
      }]
    }, {
      elements: [{
        "name": "sapatos-preferidas",
        "title": "QUAL VOCÊ ADORA?",
        "type": "imagepicker",
        "choices": [
          {
            "value": "1",
            "imageLink": "/images/4/Imagem1.jpg",
          },
          {
            "value": "2",
            "imageLink": "/images/4/Imagem2.png",
          },
          {
            "value": "3",
            "imageLink": "/images/4/Imagem3.jpg",
          },
          {
            "value": "4",
            "imageLink": "/images/4/Imagem4.png",
          },
          {
            "value": "5",
            "imageLink": "/images/4/Imagem5.png",
          },
          {
            "value": "6",
            "imageLink": "/images/4/Imagem6.jpg",
          },
          {
            "value": "7",
            "imageLink": "/images/4/Imagem7.jpg",
          }
        ],
        isRequired: true,
        "showLabel": true,
        "colCount": 2,
        "multiSelect": false
      }]
    }, {
      elements: [{
        "name": "saias-preferidas",
        "title": "QUAL VOCÊ ADORA?",
        "type": "imagepicker",
        "choices": [
          {
            "value": "1",
            "imageLink": "/images/6/Imagem1.jpg",
          },
          {
            "value": "2",
            "imageLink": "/images/6/Imagem2.jpg",
          },
          {
            "value": "3",
            "imageLink": "/images/6/Imagem3.jpg",
          },
          {
            "value": "4",
            "imageLink": "/images/6/Imagem4.jpg",
          },
          {
            "value": "5",
            "imageLink": "/images/6/Imagem5.jpg",
          },
          {
            "value": "6",
            "imageLink": "/images/6/Imagem6.png",
          },
          {
            "value": "7",
            "imageLink": "/images/6/Imagem7.jpg",
          }
        ],
        isRequired: true,
        "showLabel": true,
        "colCount": 2,
        "multiSelect": false
      }]
    }, {
      elements: [{
        "name": "bolsas-preferidas",
        "title": "QUAL VOCÊ ADORA?",
        "type": "imagepicker",
        "choices": [
          {
            "value": "1",
            "imageLink": "/images/7/Imagem1.jpg",
          },
          {
            "value": "2",
            "imageLink": "/images/7/Imagem2.jpg",
          },
          {
            "value": "3",
            "imageLink": "/images/7/Imagem3.jpg",
          },
          {
            "value": "4",
            "imageLink": "/images/7/Imagem4.jpg",
          },
          {
            "value": "5",
            "imageLink": "/images/7/Imagem5.png",
          },
          {
            "value": "6",
            "imageLink": "/images/7/Imagem6.jpg",
          },
          {
            "value": "7",
            "imageLink": "/images/7/Imagem7.jpg",
          }
        ],
        isRequired: true,
        "showLabel": true,
        "colCount": 2,
        "multiSelect": false
      }]
    }, {
      elements: [{
        "name": "oculos-preferidas",
        "title": "QUAL VOCÊ ADORA?",
        "type": "imagepicker",
        "choices": [
          {
            "value": "1",
            "imageLink": "/images/8/Imagem1.jpg",
          },
          {
            "value": "2",
            "imageLink": "/images/8/Imagem2.jpg",
          },
          {
            "value": "3",
            "imageLink": "/images/8/Imagem3.png",
          },
          {
            "value": "4",
            "imageLink": "/images/8/Imagem4.jpg",
          },
          {
            "value": "5",
            "imageLink": "/images/8/Imagem5.jpg",
          },
          {
            "value": "6",
            "imageLink": "/images/8/Imagem6.jpg",
          },
          {
            "value": "7",
            "imageLink": "/images/8/Imagem7.jpg",
          }
        ],
        isRequired: true,
        "showLabel": true,
        "colCount": 2,
        "multiSelect": false
      }]
    }, {
      elements: [{
        "name": "acessorios-preferidas",
        "title": "QUAL VOCÊ ADORA?",
        "type": "imagepicker",
        "choices": [
          {
            "value": "1",
            "imageLink": "/images/9/Imagem1.png",
          },
          {
            "value": "2",
            "imageLink": "/images/9/Imagem2.png",
          },
          {
            "value": "3",
            "imageLink": "/images/9/Imagem3.png",
          },
          {
            "value": "4",
            "imageLink": "/images/9/Imagem4.png",
          },
          {
            "value": "5",
            "imageLink": "/images/9/Imagem5.png",
          },
          {
            "value": "6",
            "imageLink": "/images/9/Imagem6.png",
          },
          {
            "value": "7",
            "imageLink": "/images/9/Imagem7.png",
          }
        ],
        "showLabel": true,
        "colCount": 2,
        "multiSelect": false
      }],
      isRequired: true,
    }],
    showQuestionNumbers: "on",
    pageNextText: "Seguinte",
    pagePrevText: "Anterior",
    completeText: "Enviar",
    showPrevButton: true,
    firstPageIsStarted: true,
    startSurveyText: "Iniciar",
    completedHtml: "Obrigada",
    showPreviewBeforeComplete: "showAnsweredQuestions"
  };
