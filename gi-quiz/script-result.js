let score = localStorage.getItem('quizScore');
let results = JSON.parse(localStorage.getItem('quizResults')) || [];
let scorePercentage = (score / 100 ) * 100;

document.getElementById('score').textContent = `Your Score: ${score}/100 (${scorePercentage}%)`;

let incorrectDiv = document.getElementById('incorrectAnswers');
if (results.length === 0) {
    incorrectDiv.innerHTML = "<p>Well done! You answered all the questions correctly.</p>";
} else {
    results.forEach(res => {
        let optionsHTML = res.options.map(option => `<li>${option}</li>`).join("");

        incorrectDiv.innerHTML += `
            <p><strong>Question:</strong> ${res.question}</p>
            <p><span style="color:red;">Your Answer:</span> ${res.userAnswer}</p>
            <p><span style="color:green;">Correct Answer:</span> ${res.correctAnswer}</p>
            <p><strong>Answer Choices:</strong></p>
            <ul>${optionsHTML}</ul>
            <hr>
        `;

    });

    incorrectDiv.innerHTML += `<button onclick="window.location.href='full-questions.html'">Try Again</button>`;
}

// Clear storage after displaying results
localStorage.removeItem('quizScore');
localStorage.removeItem('quizResults');