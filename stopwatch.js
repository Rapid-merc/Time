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
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const display = document.getElementById('display');

// Stopwatch variables
let startTime;
let stopwatchInterval;
let elapsedTime = 0;
let isRunning = false;

// Format time as HH:MM:SS
function formatTime(time) {
  const hours = Math.floor(time / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

// Update the stopwatch display
function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

// Start the stopwatch
function startStopwatch() {
  if (!isRunning) {
    startTime = Date.now() - (elapsedTime * 1000);
    stopwatchInterval = setInterval(() => {
      elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
}

// Stop the stopwatch
function stopStopwatch() {
  if (isRunning) {
    clearInterval(stopwatchInterval);
    isRunning = false;
  }
}

// Reset the stopwatch
function resetStopwatch() {
  stopStopwatch();
  elapsedTime = 0;
  updateDisplay();
}

// Event listeners
startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
