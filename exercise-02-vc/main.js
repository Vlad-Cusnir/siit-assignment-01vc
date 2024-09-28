function ckDiv3and5() {
    
    let numberInput = document.getElementById("numberInput").value;
    let number = Number(numberInput);
    let message = number + " is ";
    
    if (number % 3 === 0) {
        message += "divisible by 3";
    } else {
        message += "not divisible by 3";
    }

    if (number % 5 === 0) {
        message += "divisible by 5";
    } else {
        message += "not divisible by 5";
    }
    
    document.getElementById("output").innerHTML = message;
}
