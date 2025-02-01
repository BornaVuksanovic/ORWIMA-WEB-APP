function PretvoriValute() {
    const kolicina = parseFloat(document.getElementById("kolicina").value);
    const izValuta = document.getElementById("Iz").value;
    const uValuta = document.getElementById("U").value;

    if (!izValuta || !uValuta) {
        alert("Molimo odaberite obje valute.");
        return;
    }
    if (isNaN(kolicina)) {
        alert("Molimo unesite ispravnu brojčanu vrijednost.");
        return;
    }

    const tecajevi = {
        EUR: { EUR: 1, USD: 1.0492, GBP: 0.8268, CHF: 0.9380, INR: 89.1208 },
        USD: { EUR: 0.9533, USD: 1, GBP: 0.7878, CHF: 0.8939, INR: 84.9538 },
        GBP: { EUR: 1.2100, USD: 1.2694, GBP: 1, CHF: 1.1347, INR: 107.836 },
        CHF: { EUR: 1.0661, USD: 1.1185, GBP: 0.8813, CHF: 1, INR: 95.0213 },
        INR: { EUR: 0.01122, USD: 0.01177, GBP: 0.00927, CHF: 0.01052, INR: 1 }
    };

    const rezultat = kolicina * tecajevi[izValuta][uValuta];
    document.getElementById("rezultat").value = rezultat.toFixed(2);

}



