function PretvoriJedinicu() {
    const velicina = parseInt(document.getElementById("velicina").value);
    const izJedinice = document.getElementById("Iz").value;
    const uJedinicu = document.getElementById("U").value;

    if (!izJedinice || !uJedinicu) {
        alert("Molimo odaberite obje memorijske jedinice.");
        return;
    }
    if (isNaN(velicina)) {
        alert("Molimo unesite ispravnu brojčanu vrijednost.");
        return;
    }
    const memorijskeJedinice = {
        kB: { kB: 1, MB: 0.001, GB: 0.00001, TB: 0.000000001},
        MB: { kB: 1024, MB: 1, GB: 0.001, TB: 0.00001},
        GB: { kB: 1048576, MB: 1024, GB: 1, TB: 0.001},
        TB: { kB: 1073741824, MB: 1048576, GB: 1024, TB: 1},
    };

    const rezultat = velicina * memorijskeJedinice[izJedinice][uJedinicu];
    document.getElementById("rezultat").value = rezultat;

}



