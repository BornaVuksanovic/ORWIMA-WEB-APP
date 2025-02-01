function analizirajTekst() {
    const tekst = document.getElementById("tekst").value;
    const brojZnakova = tekst.replace(/\s/g, "").length;
    const rijeci = tekst.trim().split(/\s+/); 
    const brojRijeci = tekst.trim() === "" ? 0 : rijeci.length;
    const recenice = tekst.split(/[.!?]+/).filter(recenica => recenica.trim() !== "");
    const brojRecenica = recenice.length;

    document.getElementById("brojRijeci").textContent = brojRijeci;
    document.getElementById("brojRecenica").textContent = brojRecenica;
    document.getElementById("brojZnakova").textContent = brojZnakova;
}
