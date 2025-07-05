let [h, m, s] = [0, 0, 0];
let timer = null;

function updateDisplay() {
  document.getElementById('display').innerText =
    `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function start() {
  if (timer) return;
  timer = setInterval(() => {
    s++;
    if (s == 60) { s = 0; m++; }
    if (m == 60) { m = 0; h++; }
    updateDisplay();
  }, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  pause();
  [h, m, s] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  const lapTime = document.getElementById('display').innerText;
  const li = document.createElement("li");
  li.innerText = `Lap: ${lapTime}`;
  document.getElementById("laps").appendChild(li);
}

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    button.style.animation = "buttonClick 0.2s";
    setTimeout(() => button.style.animation = "", 200);
  });
});