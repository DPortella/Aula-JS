var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    if (currentNumber >= 10) {
        document.getElementsByName("adicionar").disable = true;
    } else {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    
    if (currentNumber >= 0) {
        document.getElementById("currentNumber").style.color = "gray";
     }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        document.getElementById("currentNumber").style.color = "red";
        }
}
