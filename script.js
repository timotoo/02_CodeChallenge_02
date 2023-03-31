function calculate() {
    let firstNumber =
    parseInt(document.getElementById("firstNumber").value);
    let secondNumber =
    parseInt(document.getElementById("secondNumber").value);


    document.getElementById("result").value = 
    firstNumber + secondNumber;
}

let calculateButton = document.getElementById("calculateButton");
calculateButton.value = "Calculate";
calculateButton.style.fontSize = "20px";
calculateButton.style.padding = "10px 50px";

calculateButton.addEventListener("click", calculate);


