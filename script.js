let count = 0;

function increment(){
    count++;
    updateDisplay();
}
function decrement(){
    count--;
    updateDisplay();
}
function reset(){
    count=0;
    updateDisplay();
}
function updateDisplay(){
    document.getElementById("counter").innerText = count;
}
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
