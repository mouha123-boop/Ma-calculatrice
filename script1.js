const bouttons = [...document.querySelectorAll('.bouton')];
const listkeycode = bouttons.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
  const valeur = e.keyCode.toString();
  calculer(valeur);
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('bouton')) {
    const valeur = e.target.dataset.key;
    calculer(valeur);
  }
});

const calculer = (valeur) => {
  if (listkeycode.includes(valeur)) {
    switch (valeur) {
      case '8':
        ecran.textContent = "";
        break;
      case '13':
        try {
          const calcul = eval(ecran.textContent);
          ecran.textContent = calcul;
        } catch (error) {
          ecran.textContent = 'Erreur';
        }
        break;
      default:
        const indexKeycode = listkeycode.indexOf(valeur);
        const touche = bouttons[indexKeycode];
        const code = getCodeFromButton(touche);
        ecran.textContent += code;
    }
  }
};

const getCodeFromButton = (button) => {
  switch (button.textContent) {
    case 'C':
      return '';
    case '(':
      return '(';
    case ')':
      return ')';
    case '/':
      return '/';
    case '*':
      return '*';
    case '-':
      return '-';
    case '+':
      return '+';
    case '.':
      return '.';
    case '=':
      return '=';
    default:
      return button.textContent;
  }
};