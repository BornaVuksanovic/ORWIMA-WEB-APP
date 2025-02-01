function PretvoriTemperature() {
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const izTemp = document.getElementById("Iz").value;
    const uTemp = document.getElementById("U").value;

    if (!izTemp || !uTemp) {
        alert("Molimo odaberite obje skale.");
        return;
    }
    if (isNaN(temperatura)) {
        alert("Molimo unesite ispravnu brojčanu vrijednost.");
        return;
    }
    
    let rezultat = null; 

    if (izTemp == "C" && uTemp == "C") {
        rezultat = temperatura * 1;
    }
    else if (izTemp == "C" && uTemp == "F") {
        rezultat = temperatura * 9 / 5 + 32;
    }
    else if (izTemp == "C" && uTemp == "K") {
        rezultat = temperatura +273.15;
    }

    else if (izTemp == "F" && uTemp == "F") {
        rezultat = temperatura * 1;
    }
    else if (izTemp == "F" && uTemp == "C") {
        rezultat = (temperatura-32)*5/9;
    }
    else if (izTemp == "F" && uTemp == "K") {
        rezultat = (temperatura+459.67)*5/9;
    }

    else if (izTemp == "K" && uTemp == "K") {
        rezultat = temperatura * 1;
    }
    else if (izTemp == "K" && uTemp == "C") {
        rezultat = temperatura -273.15;
    }
    else if (izTemp == "K" && uTemp == "F") {
        rezultat = temperatura *9/5-459.67;
    }



    if (rezultat !== null) {
        document.getElementById("rezultat").value = rezultat.toFixed(2);
    } else {
        alert("Konverzija nije podržana.");
    }
}

