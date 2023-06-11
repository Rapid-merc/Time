//About that nav!
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// DOM elements
const timerLink = document.getElementById('timerLink');
const stopwatchLink = document.getElementById('stopwatchLink');
const timerSection = document.querySelector('.timer');
const stopwatchSection = document.querySelector('.stopwatch');
const song = document.getElementById('song');
const stopSongButton = document.getElementById('stopSongButton');

// Timer functionality
const timerInput = document.getElementById('timerInput');
const timerStart = document.getElementById('timerStart');
const timerStop = document.getElementById('timerStop');
const timerDisplay = document.getElementById('timerDisplay');
let timerInterval;

timerStart.addEventListener('click', function () {
  const timeInSeconds = parseInt(timerInput.value);
  if (!isNaN(timeInSeconds)) {
    clearInterval(timerInterval);
    startTimer(timeInSeconds);
  }
});

timerStop.addEventListener('click', function () {
  clearInterval(timerInterval);
  stopSong();
});

stopSongButton.addEventListener('click', stopSong);

function startTimer(duration) {
  let timer = duration;
  timerInterval = setInterval(function () {
    const hours = Math.floor(timer / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((timer % 3600) / 60).toString().padStart(2, '0');
    const seconds = (timer % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    if (--timer < 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = 'Time up! Enter time again.';
      playSong();
    }
  }, 1000);
}

function playSong() {
  song.play();
}

function stopSong() {
  song.pause();
  song.currentTime = 0;
}









  