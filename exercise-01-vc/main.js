function converttoMies() {
    // input number of Km 
    let km = Number(document.getElementById("kmInpt").value);

    // (1 km = 0.62 miles)
    let miles = km * 0.62;

    // result
    let resultMessage = `${km} km = ${miles} miles`;
    document.getElementById("result").textContent = resultMessage;

}