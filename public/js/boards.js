// Initialisation des variables
const projectName = document.querySelector('#name')
const projectType = document.querySelector('#type')
const description = document.querySelector('#description')
const btnEnregistrer = document.querySelector('#btnEnregistrer')

LoadEventListener();

function LoadEventListener(){

    btnEnregistrer.addEventListener('click', addProject);
}

function addProject(event){
    console.log('C\'est déjà bon');

    event.preventDefault();
}

function storeProjectInLocalStorage(proj){
    
}