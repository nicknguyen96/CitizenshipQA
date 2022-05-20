import { QAs } from './English.js';

const speak = document.querySelector('#speak');
const next = document.querySelector('#next');
const Question = document.querySelector('.question');
const Answer = document.querySelector('.answer');

document.addEventListener('DOMContentLoaded', function () {


    let random = Math.floor(Math.random() * QAs.length);
    Question.innerHTML = QAs[random].Q;

    Answer.innerHTML = QAs[random].A;
})

next.addEventListener('click', () => {
    let random = Math.floor(Math.random() * QAs.length);
    Question.innerHTML = QAs[random].Q;
    Answer.innerHTML = QAs[random].A;
    console.log(Question, Answer)
})

let QuestionVoice = new SpeechSynthesisUtterance();
QuestionVoice.lang = 'en-US';
QuestionVoice.volume = 0.5;

QuestionVoice.addEventListener('end', ()=> {
    // do something here
});

speak.addEventListener('click', () => {
    QuestionVoice.text = Question.innerHTML;

    window.speechSynthesis.speak(QuestionVoice);
    
})

let Voice = window.SpeechSynthesisVoice;
console.log(Voice);
