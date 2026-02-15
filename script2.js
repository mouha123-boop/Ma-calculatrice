 document.getElementById('BoutonCalcul').onclick = () => {
    let number = parseFloat(document.getElementById('number').value);
    let result = 1;

    if (isNaN(number) || number < 0) {
        document.getElementById('resultat').textContent = "Veuillez entrer un nombre entier positif.";
        return;
    }

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    document.getElementById('resultat').textContent = `La factorielle de ${number} est ${result}`;
};