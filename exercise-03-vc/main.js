document
  .getElementById("generateButton")
  .addEventListener("click", generateRange);

function generateRange() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  if (num1 > num2) {
    document.getElementById("output").textContent =
      "Please enter numbers in ascending order.";
    return;
  }

  let rangeArray = [];

  for (let i = num1; i <= num2; i++) {
    rangeArray.push(i);

    document.getElementById("output").textContent = rangeArray.join(" ");
  }
}
