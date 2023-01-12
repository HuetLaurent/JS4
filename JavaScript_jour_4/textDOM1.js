//exercice DOM 1

const btn = document.getElementById('button');

btn.addEventListener('click', () => {
    console.log("Hello World !");
});

//exercice DOM 2

const text = document.getElementById('text');
const btntext = document.getElementById('buttonText');
const retour = document.getElementById('retour');

btntext.addEventListener('click', () => {
    console.log(text.value);
    retour.textContent = text.value;
    btntext.onclick = function() {
        text.value = '';
    }
});

//exercice DOM 3

const title = document.querySelectorAll(h2);

title.addEventListener('click', () => {
    text.nextElementSibling.remove();
});