const conversion = {
    Kilometre: 1000,
    Metre: 1,
    Centimetre: 0.01,
    Millimetre: 0.001,
    Micrometre: 1e-6,
    Nanometre: 1e-9,
    Mile: 1609.34,
    Yard: 0.9144,
    Foot: 0.3048,
    Inch: 0.0254,
    "Nautical mile": 1852
};

let lastChanged = 'input'; 

function convertUnits() {
    const fromUnit = document.getElementById("from-Units").value;
    const toUnit = document.getElementById("to-Units").value;
    const inputVal = parseFloat(document.getElementById("inputValue").value);
    const outputVal = parseFloat(document.getElementById("outputValue").value);

    if (lastChanged === 'input' && !isNaN(inputVal) && inputVal >= 0) {
        const valueInMetres = inputVal * conversion[fromUnit];
        const convertedValue = valueInMetres / conversion[toUnit];
        document.getElementById("outputValue").value = convertedValue.toFixed(4);
    } 
    else if (lastChanged === 'output' && !isNaN(outputVal) && outputVal >= 0) {
        const valueInMetres = outputVal * conversion[toUnit];
        const convertedValue = valueInMetres / conversion[fromUnit];
        document.getElementById("inputValue").value = convertedValue.toFixed(4);
    } 
    else {
        document.getElementById("inputValue").value = "";
        document.getElementById("outputValue").value = "";
    }
}

document.getElementById('inputValue').addEventListener('input', () => {
    lastChanged = 'input';
    convertUnits();
});

document.getElementById('outputValue').addEventListener('input', () => {
    lastChanged = 'output';
    convertUnits();
});

document.getElementById('from-Units').addEventListener('change', convertUnits);
document.getElementById('to-Units').addEventListener('change', convertUnits);
