let questions = [
    {
        "question": "Which animal is known as the king of the jungle?",
        "answer_1": "Tiger",
        "answer_2": "Elephant",
        "answer_3": "Lion",
        "answer_4": "Gorilla",
        "correctAnswer": 3
    },
    {
        "question": "What is the fastest land animal?",
        "answer_1": "Leopard",
        "answer_2": "Cheetah",
        "answer_3": "Lion",
        "answer_4": "Horse",
        "correctAnswer": 2
    },
    {
        "question": "Which bird is known for its colorful plumage and mimicking sounds?",
        "answer_1": "Peacock",
        "answer_2": "Sparrow",
        "answer_3": "Owl",
        "answer_4": "Parrot",
        "correctAnswer": 4
    },
    {
        "question": "What is the largest mammal on Earth?",
        "answer_1": "Blue Whale",
        "answer_2": "Elephant",
        "answer_3": "Giraffe",
        "answer_4": "Hippopotamus",
        "correctAnswer": 1
    },
    {
        "question": "Which animal is famous for playing dead as a defense mechanism?",
        "answer_1": "Possum",
        "answer_2": "Snake",
        "answer_3": "Frog",
        "answer_4": "Turtle",
        "correctAnswer": 2
    }
]

let currentQuestion = 0;
let counterAnswers = 0;

function init(){
    document.getElementById("totalQuestions").innerHTML = questions.length;
    showQuestion();
}

function showQuestion (){
    if(currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = "";
        document.getElementById('questionBody').style = "display: none";
        document.getElementById("totalQuestionsEndScreen").innerHTML = questions.length;
        document.getElementById("answerCounter").innerHTML = counterAnswers;
        document.getElementById("headerImg").src = "./assets/img/trophy.png";
        
    } else {
        let question = questions[currentQuestion];
        let percent  = Math.round(((currentQuestion + 1) / questions.length) * 100);
        document.getElementById("progressBar").innerHTML = `${percent}%`;
        document.getElementById("progressBar").style = `width: ${percent}%`;

        document.getElementById("currentQuestion").innerHTML = currentQuestion + 1;
        document.getElementById("questionText").innerHTML = question['question'];
        document.getElementById("answer_1").innerHTML = question['answer_1'];
        document.getElementById("answer_2").innerHTML = question['answer_2'];
        document.getElementById("answer_3").innerHTML = question['answer_3'];
        document.getElementById("answer_4").innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectionQuestionNumber = selection.slice(-1);
    let idFromRightAnswer = `answer_${question['correctAnswer']}`;

    if (selectionQuestionNumber == question['correctAnswer']) {
        document.getElementById(selection).classList.add('bg-success');
        counterAnswers++;

    } else {
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idFromRightAnswer).classList.add('bg-success');
    }
    document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
    document.getElementById('nextButton').disabled = true;
    resetAnswerButtons();
    

}


function resetAnswerButtons() {
    document.getElementById('answer_1').classList.remove('bg-danger');
    document.getElementById('answer_1').classList.remove('bg-success');
    document.getElementById('answer_2').classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('bg-success');
    document.getElementById('answer_3').classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('bg-success');
    document.getElementById('answer_4').classList.remove('bg-danger');
    document.getElementById('answer_4').classList.remove('bg-success');
}
