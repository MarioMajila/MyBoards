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

        if(localStorage.getItem('ProjectPack') === null)
            localStorage.setItem('ProjectPack', JSON.stringify(projectPack));
        return JSON.parse(localStorage.getItem('ProjectPack'));
    }

    // Ajout d'un nouveau projet
    function addProject(event){
        if(projectName.value == ""){
            alert('Veuillez donner un nom à votre projet');
        }
        else{
            let projectpack = initProjectPack();
            let id = projectpack.project.length;
            let projet = {
                id: id,
                name: projectName.value,
                type: projectType.value,
                desc: description,
                state: 0
            }
        }        

        event.preventDefault();
    }

    function InsertProjectInLocalStorage(project){
        
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
