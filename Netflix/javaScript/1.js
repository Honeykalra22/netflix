console.log("Hitesh kalra")

function convertTemperature() {
    var celsius = parseFloat(document.getElementById('temperature').value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('result').innerHTML = celsius + "°C = " + fahrenheit + "°F";
}

document.getElementById('convertButton').addEventListener('click', convertTemperature);
