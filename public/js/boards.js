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
    let project;
    
    if(localStorage.getItem('Projet') === null){
        project = [];
    }
    else{
        project = JSON.parse(localStorage.getItem('Projet'));
    }

    project.push(proj);
    localStorage.setItem('projet', JSON.stringify(project));
}