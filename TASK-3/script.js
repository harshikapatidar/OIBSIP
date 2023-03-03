let inputElems = document.querySelectorAll("input[type='number']");
const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip-percentage");
const total = document.querySelector("#totalOutput");
const numberOfPersons = document.querySelector("#persons");
const calculateBtn = document.querySelector(".calculate-btn");
const celsiusElem = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
degree.value = "";
celsiusElem.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
e.preventDefault();
convert();
});


function convert() {
    let inputValue = degree.value;


if (tempType.value === "fahrenheit") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    celsiusElem.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
} else if (tempType.value === "kelvin") {
    const KelvinToCelsius = inputValue - 273.15;
    celsiusElem.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
} else if (tempType.value == "celsius") {
    const CelsiusToFahrenheit = (inputValue * 9/5) + 32;
    celsiusElem.innerHTML = `${CelsiusToFahrenheit.toFixed(3)} &#8457` ;
}
}



