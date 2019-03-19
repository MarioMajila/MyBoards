// Initialisation des variables
const projectName = document.querySelector('#name')
const projectType = document.querySelector('#type')
const description = document.querySelector('#description')
const btnEnregistrer = document.querySelector('#btnEnregistrer')

const projectCollection = document.querySelector('#projectCollection')

LoadEventListener();

function LoadEventListener(){

    btnEnregistrer.addEventListener('click', addProject);
}

// Ajout d'un nouveau projet
function addProject(event){
    if(projectName.value == ""){
        alert('Veuillez donner un nom à votre projet');
    }

    // Création d'un tableau
    const div = document.createElement('div');
    div.className = "card col-sm-3 project";

    // Création du nom du project
    const h2 = document.createElement('h2');
    h2.className = "project-title";
    h2.appendChild(document.createTextNode(projectName.value));
    
    div.appendChild(h2);
    alert(div)
    // alert('Projet ajouté !')
    storeProjectInLocalStorage(projectName.value);

    projectCollection.appendChild(h2);
    

    event.preventDefault();
}

//Stokage d'un projet dans le localStorage
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