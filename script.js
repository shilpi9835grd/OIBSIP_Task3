document.getElementById('con').onclick = tempConvert;
document.getElementById('cl').onclick = clearForm;

function tempConvert() {
    var fahrenheit = document.getElementById("f").value;
    var celsius = document.getElementById("c").value;

    if(fahrenheit != '') {
        celsius = (parseFloat(fahrenheit) - 32) /1.8;
    } else {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }


    document.getElementById('f').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('c').value = parseFloat(celsius).toFixed(1);
}

function clearForm() {
    document.getElementById('f').value = '';
    document.getElementById('c').value = '';
}

