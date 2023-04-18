const quiz = [
    {
    question: 'Where does Michael Scott move to start his new life with Holly?',
    answer: 'Boulder, Colorado',
    congrats: ['Great!', 'Congratulations!', 'Excellent!']
    },
    {
    question: 'What are the names of Jim and Pam Halperts kids?',
    answer: 'Cecelia "Cece" and Phillip',
    congrats: ['Fantastic!', 'Awesome!', "You're a genius!"]
    },
    {
    question: 'Which of Angelas cats did Dwight mercy-kill?',
    answer: 'Sprinkles',
    congrats: ['Brilliant!', 'Incredible!', 'You are a star!']
    },
    {
    question: 'What was the name of Jan Levinsons assistant at corporate?',
    answer: 'Hunter',
    congrats: ['Great!', 'Congratulations!', 'Excellent!']
    },
    {
    question: 'Who came up with Suck It?',
    answer: 'David Wallace',
    congrats: ['Fantastic!', 'Awesome!', 'You are a genius!']
    },
    {
    question: 'Michael and Dwight tried to steal clients from which local competing business?',
    answer: 'Prince Family Paper',
    congrats: ['Great!', 'Congratulations!', 'Excellent!']
    },
    {
    question: 'What was the name of Stanley Hudsons mistress?',
    answer: 'Cynthia',
    congrats: ['Brilliant!', 'Incredible!', 'You are a star!']
    }
    ];

    const questionText = document.getElementById('question-text');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');
const resultMessage = document.getElementById('result-message');

let currentQuestion = 0;

function displayQuestion() {
  questionText.textContent = quiz[currentQuestion].question;
}

function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = quiz[currentQuestion].answer.toLowerCase();
  if (userAnswer === correctAnswer) {
    const congratsMessage = quiz[currentQuestion].congrats[Math.floor(Math.random() * quiz[currentQuestion].congrats.length)];
    resultMessage.textContent = congratsMessage;
  } else {
    resultMessage.textContent = 'Sorry, that\'s incorrect. Please try again.';
  }
  answerInput.value = '';
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    displayQuestion();
  } else {
    questionText.textContent = 'Quiz complete! Thanks for playing.';
    answerInput.style.display = 'none';
    submitButton.style.display = 'none';
  }
}

displayQuestion();
submitButton.addEventListener('click', checkAnswer);