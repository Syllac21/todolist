//déclaration variables
let user = 'Syl';

// mon tableau de tâche
let MyTable =[
    {
        "type" : "table",
        "id" : "taskTable",
        "tailClass" : "text-center",
        "content" : "",
        "parent" : "container"
    },
    {
        "type" : "tr",
        "id" : "hTask",
        "tailClass" : "text-center",
        "content" : "",
        "parent" : "taskTable"
    },
    {
        "type" : "th",
        "id" : "hTitleTask",
        "tailClass" : "text-center",
        "content" : "Tâche",
        "parent" : "hTask"
    },
    {
        "type" : "th",
        "id" : "hDescriptionTask",
        "tailClass" : "text-center",
        "content" : "Description",
        "parent" : "hTask"
    },
    {
        "type" : "th",
        "id" : "hDeadlineTask",
        "tailClass" : "text-center",
        "content" : "Echéance",
        "parent" : "hTask"
    }
]

/**
 * créer un élément HTML dans l'élément parent de type type d'id id avec la classe tailClass et contenant le text content
 * @param {* objet avec les propriété type, id, tailClass, content et parent} element 
*/
function createNewElement(element){
    const newElement = document.createElement(element.type);
    newElement.setAttribute('id' , element.id);
    newElement.setAttribute('class' , element.tailClass);
    newElement.innerHTML = element.content;
    const parentElement = document.getElementById(element.parent);
    parentElement.appendChild(newElement);
}

// affichage bannière
for(let i=0 ; i < MyHeader.length ; i++){
    createNewElement(MyHeader[i]);
}
displayTask();

// récupération des tâches 
function extractTask(data) {
    
   let tableMap = data.list.map(
       item => ({
           taskName : item.titre,
           taskDescription : item.description,
           taskDeadline : item.echeance
        })
    );
   return tableMap;
}

async function loadTask() {
    let path = './data/listeTaches-Syl.json';
    try {
        const response = await fetch(path);
        
        if (!response.ok) throw new Error('Erreur lors du chargement du fichier JSON');
        
        const jsonData = await response.json(); // Lit le contenu JSON
        
        let listTask = extractTask(jsonData);
        return listTask; // Extrait les questions
        
    } catch (error) {
        console.error(error);
    }
}

const actionList = document.getElementById('btnDisplayTask');

const onClickActionList = actionList.addEventListener('click' , ()=>{

})

function displayTask(){
    loadTask().then((listTask)=>{
        
        //création entête de tableau
        for(let i = 0 ; i < MyTable.length ; i++){
            createNewElement(MyTable[i]);
        }
        
        let table = listTask.map(
            (item, index) =>[ 
            {
                type : "tr",
                id : `rang${index}`,
                tailClass : "text-center",
                content : "",
                parent : "taskTable"
             },
            {type : "td",
                id : `name${index}`,
                tailClass : "text-center",
                content : item.taskname,
                parent : `rang${index}`
            },
            {type : "td",
            id : `description${index}`,
            tailClass : "text-center",
            content : item.taskDescription,
            parent : `rang${index}`
            },
            {type : "td",
            id : `deadline${index}`,
            tailClass : "text-center",
            content : item.taskDeadline,
            parent : `rang${index}`
            }
        ]
        );

        console.log(table);
})
}


    




