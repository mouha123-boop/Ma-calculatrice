const input = document.getElementById('userNumber');
const btn = document.getElementById('playBtn');
const replayBtn = document.getElementById('replayBtn');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

let essais = 0;
let victoires = 0;
const totalEssais = 10;

btn.addEventListener('click', () => {
    if (essais < totalEssais) {
        const userValue = parseInt(input.value, 10);
        if (userValue < 1 || userValue > 6 || isNaN(userValue)) {
            resultDiv.textContent = "Veuillez entrer un nombre entre 1 et 6.";
            return;
        }

        const randomValue = Math.floor(Math.random() * 6) + 1;

        if (userValue === randomValue) {
            victoires++;
            resultDiv.textContent = `Bravo ! Le nombre était ${randomValue}.`;
        } else {
            resultDiv.textContent = `Raté ! Le nombre était ${randomValue}.`;
        }

        essais++;
        scoreDiv.textContent = `Essais : ${essais} / ${totalEssais}`;

        if (essais === totalEssais) {
            const score = Math.round((victoires * 100) / totalEssais);
            let message = score >= 40 ? "Victoire !" : "Échec !";
            scoreDiv.textContent += ` | Score : ${score}% - ${message}`;

            btn.disabled = true;
            replayBtn.style.display = 'inline-block'; // ✅ Affiche le bouton Rejouer
        }

        input.value = '';
        input.focus();
    }
});

// ✅ Gère le clic sur "Rejouer"
replayBtn.addEventListener('click', () => {
    essais = 0;
    victoires = 0;
    resultDiv.textContent = '';
    scoreDiv.textContent = 'Essais : 0 / 10';
    input.value = '';
    input.focus();
    btn.disabled = false;
    replayBtn.style.display = 'none'; // Cache à nouveau le bouton
});
