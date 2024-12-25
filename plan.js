  
 document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
});

 


          let currentQuestion = 0;

          let userAnswers = {};
 
         // Questions and   options
         const questions = [
             {
                 text: "Do you prefer mountains or beach?",
                 options: ["Mountains", "Beach"]
             },
             {
                 text: "Looking for adventure or relaxation?",
                 options: ["Adventure", "Relaxation"]
             },
             {
                 text: "What's your budget?",
                 options: ["Low", "Medium", "High"]
             }
         ];
 
         //   recommendation  
         function getRecommendation(answers) {
             if (answers[0] === "Beach") {
                 if (answers[1] === "Adventure") {
                     if (answers[2] === "Low") {
                         return "We recommend Goa, India! Perfect for beach fun on a budget.";
                     } else if (answers[2] === "Medium") {
                         return "Try Bali, Indonesia! Great mix of beaches and activities.";
                     } else {
                         return "Visit the Maldives! Luxury beach paradise awaits.";
                     }
                 } else {
                     if (answers[2] === "Low") {
                         return "Consider Thailand's peaceful beaches and affordable resorts.";
                     } else if (answers[2] === "Medium") {
                         return "Greece's beautiful islands are perfect for your budget.";
                       } else {
                         return "The Seychelles offers ultimate luxury beach relaxation.";
                     }
                 }
             } else {
                 if (answers[1] === "Adventure") {
                     if (answers[2] === "Low") {
                         return "Nepal's hiking trails offer amazing adventures on a budget.";
                     } else if (answers[2] === "Medium") {
                         return "Colorado, USA is perfect for mountain activities.";
                     } else {
                         return "The Swiss Alps await with premium mountain experiences.";
                     }
                 } else {
                     if (answers[2] === "Low") {
                         return "India's Himachal Pradesh offers peaceful mountain stays.";
                     } else if (answers[2] === "Medium") {
                         return "Visit New Zealand's South Island for scenic mountain views.";
                     } else {
                         return "Canada's Banff provides luxury mountain relaxation.";
                     }
                 }
             }
         }
 
         // Display the current question
         function showQuestion() {
             const question = questions[currentQuestion];
             document.getElementById('questionText').textContent = question.text;
 
             const optionsBox = document.getElementById('optionsBox');
             optionsBox.innerHTML = ''; 
 
             // Create buttons  for each option
             question.options.forEach(option => {
                 const button = document.createElement('button');
                 button.className = 'btn btn-outline-primary choice-btn';
                 button.textContent = option;
                 button.onclick = () => selectOption(option);
                 optionsBox.appendChild(button);
             });
         }
 
         // Handle option selection
         function selectOption(choice) {
             userAnswers[currentQuestion] = choice;
 
             if (currentQuestion < questions.length - 1) {
                  currentQuestion++;
                 showQuestion();
             } else {
                  showResult();
             }
         }
 
         //   final recommendation
         function showResult() {
             document.getElementById('questionBox').style.display = 'none';
             document.getElementById('resultBox').style.display = 'block';
 
             const recommendation = getRecommendation(Object.values(userAnswers));
             document.getElementById('recommendationText').textContent = recommendation;
         }
 
         //        Reset 
         function startOver() {
             currentQuestion = 0;
             userAnswers = {};
             document.getElementById('resultBox').style.display = 'none';
             document.getElementById('questionBox').style.display = 'block';
             showQuestion();
         }
 
          showQuestion();

       
        