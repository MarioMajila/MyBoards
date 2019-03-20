// Initialisation des modules
const $ = require('jquery');

$(() => {

    LoadEventListener();

    function LoadEventListener(){

        $('#btnEnregistrer').on('click', addProject);
    }

    // Initialisation du paquet de projet
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
        if($('#name').val() == ""){
            alert('Veuillez donner un nom à votre projet');
        }
        else{
            let projectpack = initProjectPack();
            let id = projectpack.project.length;
            let projet = {
                id: id,
                name: $('#name').val(),
                type: $('#type').val(),
                desc: $('#description').val(),
                state: 0
            }

            InsertProjectInLocalStorage(projet);
            alert('Project saved successfully !')

            gutFields();
        }        

        event.preventDefault();
    }

    // Insertion d'un projet dans le localStorage
    function InsertProjectInLocalStorage(project){
        let projectPack = initProjectPack();
        projectPack.project.push(project);

        localStorage.setItem('ProjectPack', JSON.stringify(projectPack));
    }

    function displayProjects(){
        
    }

    function gutFields(){
        $('#name').val() = "";
        $('#type').val() = "";
        $('#descrition').val() = "";
    }
})
