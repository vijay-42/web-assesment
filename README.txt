technology used 

HTML
CSS
Bootstrap
Javascript

 HTML (plan.html)

Defines the structure of the app.
Contains a question card (#questionBox) and a result card (#resultBox).
Links to external CSS and JS files.


CSS (plan.css)

Adds styling, including a gradient background animation and hover effects.
Contains classes for question and result cards for better visual presentation.


JavaScript   (plan.js)
 
 
  =>Stored in an array with text and options(Questions and   options).
 =>Stored in an object (userAnswers).
 => getRecommendation() computes a suggestion based on user inputs.
 => Functions like showQuestion() and showResult() update the UI.
 => startOver() resets the app for a new session.