let violationTimeout;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation for demonstration purposes
    if (username === 'test' && password === 'test') {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('examContainer').style.display = 'block';
    } else {
        alert('Username atau Password salah!');
    }
});

document.getElementById('startExamButton').addEventListener('click', function() {
    document.getElementById('startExamButton').style.display = 'none';
    document.getElementById('examContent').style.display = 'block';
    startExamTimer();

    const questions = [
        'Apa itu atom?',
        'Apa itu molekul?',
        'Apa itu ikatan kovalen?',
        'Apa itu reaksi kimia?',
        'Apa itu tabel periodik?',
        'Apa itu pH?',
        'Apa itu asam dan basa?',
        'Apa itu elektrolit?',
        'Apa itu oksidasi dan reduksi?',
        'Apa itu stoikiometri?'
    ];

    const questionsContainer = document.getElementById('questions');
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${index + 1}. ${question}</p><input type="text" placeholder="Jawaban">`;
        questionsContainer.appendChild(questionElement);
    });
});

function startExamTimer() {
    setTimeout(() => {
        document.getElementById('finishExamButton').style.display = 'block';
    }, 60000); // 1 minute 
}

document.getElementById('finishExamButton').addEventListener('click', function() {
    alert('Ujian selesai! Silahkan istirahat/menunggu jadwal ujian selanjutnya');
    document.getElementById('examContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
});

// mengingatkan agar tidak keluar website
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        alert('Jangan meninggalkan aplikasi ini selama ujian!');
        violationTimeout = setTimeout(() => {
            alert('Kamu melanggar aturan');
            document.getElementById('loginContainer').style.display = 'block';
            document.getElementById('examContainer').style.display = 'none';
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }, 5000); // 5 seconds in milliseconds
    } else {
        clearTimeout(violationTimeout);
    }
});
