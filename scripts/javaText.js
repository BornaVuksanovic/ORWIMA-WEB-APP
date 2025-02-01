function analizirajTekst() {
    const tekst = document.getElementById("tekst").value;

    // Brojanje znakova (bez razmaka)
    const brojZnakova = tekst.replace(/\s/g, "").length;

    // Brojanje riječi (koristi razmake kao razdjelnik)
    const rijeci = tekst.trim().split(/\s+/); // Regex: jedan ili više razmaka
    const brojRijeci = tekst.trim() === "" ? 0 : rijeci.length;

    // Brojanje rečenica (koristi točku, uskličnik ili upitnik kao kraj rečenice)
    const recenice = tekst.split(/[.!?]+/).filter(recenica => recenica.trim() !== "");
    const brojRecenica = recenice.length;

    // Prikaz rezultata u HTML-u
    document.getElementById("brojRijeci").textContent = brojRijeci;
    document.getElementById("brojRecenica").textContent = brojRecenica;
    document.getElementById("brojZnakova").textContent = brojZnakova;
}
