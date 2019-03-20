// Initialisation des modules
const $ = require('jquery');

$(() => {
    // Initialisation des variables
    const projectName = $('#name')
    const projectType = $('#type')
    const description = $('#description')
    const btnEnregistrer = $('#btnEnregistrer')

    const projectCollection = $('#projectCollection')

    LoadEventListener();

    function LoadEventListener(){

        btnEnregistrer.on('click', addProject);
    }

    function initProjectPack(){
        let projectPack = {
            project : []
        }
    }

    // Ajout d'un nouveau projet
    function addProject(event){
        if(projectName.value == ""){
            alert('Veuillez donner un nom à votre projet');
        }        

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
})
