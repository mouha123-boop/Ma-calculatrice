let boutonVerifier = document.getElementById('boutonVerifier');
boutonVerifier.onclick = () => {
    let numberInput = document.getElementById('number');
    let number = parseInt(numberInput.value);
    
    let resultDiv = document.getElementById('resultat');
    
    if (isNaN(number)) {
        resultDiv.textContent = "Veuillez entrer un nombre valide.";
    } else if (number <= 0) {
        resultDiv.textContent = "Veuillez entrer un nombre strictement positif.";
    } else {
        let estPremier = true;
        for (let i = 2; i < number; i++) { 
            if (number % i === 0) {
                estPremier = false;
                break;
            }
        }
        if (estPremier && number > 1) {
            resultDiv.textContent = `${number} est un nombre premier`;
        } else {
            resultDiv.textContent = `${number} n'est pas un nombre premier`;
        }
    }
};
