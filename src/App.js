import React, { Component } from 'react';
import './App.css';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
 
class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
    this.onCompleteComponent = this.onCompleteComponent.bind(this)
  }
  onCompleteComponent = () => {
    this.setState({
      isCompleted : true
    })
  }

  render() {
    
    Survey
    .StylesManager
    .applyTheme("winterstone");
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

var json = {
    
    pages: [
      {
        
      
        // title: "How many people do visit your website everyday?",
        questions: [
            {
                type: "radiogroup",
                name: "firstqs",
                title: "How many people do visit your website everyday?",
                colCount:4,
                hasOther: false,
                isRequired: true,
                choices: ["Less than 100", "101-1000", "1001-5000","More than 5000"]
            }
        ]
    },
        {
            
            questions: [
                {
                    type: "checkbox",
                    name: "secondqs",
                    colCount:4,
                    title: "What operating system do you use?",
                    hasOther: true,
                    isRequired: true,
                    choices: ["Windows", "Linux", "Macintosh OSX"]
                }
            ]
        }, {
            
            questions: [
                {
                    type: "checkbox",
                    name: "langs",
                    title: "What language(s) are you currently using?",
                    colCount: 4,
                    isRequired: true,
                    choices: [
                        "Javascript",
                        "Java",
                        "Python",
                        "CSS",
                    ]
                }
            ]
        }, 
        {
          
          questions: [
              {
                  type: "rating",
                  name: "langs",
                  title: "Rate Us",
                  colCount: 4,
                  isRequired: true,
                  choicesLoaded: [
                      "1","2","3","4"
                  ]
              }
          ]
      },
        {
            title: "Please enter your name and e-mail",
            questions: [
                {
                    type: "text",
                    name: "name",
                    
                }, {
                    type: "text",
                    name: "email",
                    
                }
            ]
        }
    ]
};

// window.survey = new Survey.Model(json);

// survey
//     .onComplete
//     .add(function (result) {
//         document
//             .querySelector('#surveyResult')
//             .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
//     });

// survey.showProgressBar = 'bottom';

// ReactDOM.render(<Survey.Survey model={survey}/>, document.getElementById("surveyElement"));

 var surveyRender = !this.state.isCompleted ? (
   <Survey.Survey 
   json={json}
   showCompletedPage={false}
   onComplete={this.onCompleteComponent}
   
   />
 ) : null;

 var onSurveyCompletion= this.state.isCompleted ? (
 <div className="thanks"><p className="thanksPara">Thanks for completing the survey</p></div>
 ) : null;

    return (
      <div className="container">
        <div className="para"><p>Please answer few questions, so that we can help you better</p></div>

        <div className="survey">
          <div className="top">Quick Survey</div>
          {surveyRender}
          {onSurveyCompletion}
        </div>
      </div>
    );
  }
}
 
export default App;