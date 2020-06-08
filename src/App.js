import React from 'react';
import './App.css';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
 
function App() {


  Survey
  .StylesManager
  .applyTheme("winterstone");
  Survey.defaultBootstrapCss.navigationButton = "btn btn-green";



  var surveyJSON = {
    
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "firstqs",
        "title": "How many people do visit your website everyday?",
        "isRequired": true,
        "colCount":4,
        "hasOther": false,
        "choices": [
          "Less than 100", 
          "101-1000", 
          "1001-5000",
          "More than 5000"
        ]
       }
      ],
     // "title": "What operating system do you use?"
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "checkbox",
        "name": "secondqs",
        "title": "What language(s) are you currently using?",
        "isRequired": true,
        "choices": [
         "Javascript",
         "Java",
         "Python",
         "CSS",
        ],
        "colCount": 4
       }
      ],
      //"title": "What language(s) are you currently using?"
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "checkbox",
        "name": "thirdqs",
        "title": "What operating system do you use?",
        "isRequired": true,
        "colCount":4,
        "hasOther": false,
        "choices": [
          "Windows", 
          "Linux", 
          "Macintosh OSX",
          "Other"
        ]
       }
      ],
     // "title": "What operating system do you use?"
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "rating",
        "name": "fourthqs",
        "title": "Rate Us",
        "isRequired": true,
        "colCount":4,
        "hasOther": false,
        "choicesLoaded": [
          "1",
          "2",
          "3",
          "4",
          "5"
        ]
       }
      ],
     // "title": "What operating system do you use?"
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "text",
        "name": "name",
        "title": "Name:"
       },
       {
        "type": "text",
        "name": "email",
        "title": "Your e-mail"
       }
      ],
      "title": "Please enter your name and e-mail"
     }
    ],
    "showProgressBar": "bottom"
   }
 
   function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

  return (
      <div className="container">

    <div><p className="para">Please answer dew questions, so that we can help better.</p></div>


<div className="survey">
<div className="top">Quick Survey</div>
      <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />
      </div>
        {/* // <div className="para"><p>Please answer few questions, so that we can help you better</p></div>

        // <div className="survey" id="surveyElement">
        //   <div className="top" >Quick Survey</div>
        //   {surveyRender}
        //   {onSurveyCompletion} 
          
        // </div>
        // <div className="surveyResult"></div> */}
      </div>
    );
  
}
 
export default App;