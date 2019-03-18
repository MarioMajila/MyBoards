// Initialisation des variables
const projectName = document.querySelector('#name')
const projectType = document.querySelector('#type')
const description = document.querySelector('#description')
const btnEnregistrer = document.querySelector('#btnEnregistrer')

LoadEventListener();

function LoadEventListener(){

    btnEnregistrer.addEventListener('click', addProject);
}